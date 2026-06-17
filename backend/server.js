require("dotenv").config();
const express = require("express");
const cors    = require("cors");
const fetch   = require("node-fetch");

const app  = express();
const PORT = process.env.PORT || 4000;
const API_KEY = process.env.TRACK_API_KEY || "";

app.use(express.json());
app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://localhost:3001",
    process.env.FRONTEND_URL || "*",
  ],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
}));

/* ── Health check ── */
app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "allesway-tracking" });
});

const HEADERS = () => ({
  "Content-Type": "application/json",
  "17token": API_KEY,
});

async function register17(number) {
  const res = await fetch("https://api.17track.net/track/v2.2/register", {
    method:  "POST",
    headers: HEADERS(),
    body:    JSON.stringify([{ number }]),
  });
  return res.json();
}

const STATUS_TEXT_MAP = {
  "NotFound": 0, "Expired": 20,
  "InTransit": 10, "PickedUp": 10, "InfoReceived": 10, "Departed": 10, "Departure": 10,
  "Arrived": 10, "OutForDelivery": 10, "AttemptFail": 35,
  "Delivered": 40, "DeliveryFailure": 35,
  "Exception": 50, "Alert": 50,
  "Returning": 50, "Returned": 50,
};

function statusCode(statusStr) {
  if (!statusStr) return 0;
  for (const [key, code] of Object.entries(STATUS_TEXT_MAP)) {
    if (statusStr.toLowerCase().includes(key.toLowerCase())) return code;
  }
  return 10;
}

function buildResponse(item) {
  const info = item?.track_info;
  if (!info) return null;

  const latestStatus = info.latest_status?.status || "Unknown";
  const latestEvent  = info.latest_event;
  const shippingInfo = info.shipping_info;
  const timeMetrics  = info.time_metrics;
  const miscInfo     = info.misc_info;

  /* Events from all providers, sorted newest first */
  const events = [];
  for (const provider of (info.tracking?.providers || [])) {
    for (const ev of (provider.events || [])) {
      events.push({
        description: ev.description || null,
        location:    ev.address?.city || ev.location || null,
        timestamp:   ev.time_iso || null,
      });
    }
  }
  events.sort((a, b) => {
    if (!a.timestamp) return 1;
    if (!b.timestamp) return -1;
    return new Date(b.timestamp) - new Date(a.timestamp);
  });

  /* Milestones — only ones that have a time */
  const milestones = (info.milestone || []).map(m => ({
    key:     m.key_stage,
    time:    m.time_iso || null,
    reached: !!m.time_iso,
  }));

  /* Estimated delivery */
  const estFrom = timeMetrics?.estimated_delivery_date?.from;
  const estTo   = timeMetrics?.estimated_delivery_date?.to;
  const estimatedDelivery = estTo || estFrom || null;

  /* Last sync time across providers */
  let lastUpdate = null;
  for (const provider of (info.tracking?.providers || [])) {
    const t = provider.latest_sync_time;
    if (t && (!lastUpdate || new Date(t) > new Date(lastUpdate))) lastUpdate = t;
  }

  /* Weight */
  let weight = null;
  if (miscInfo?.weight_kg) weight = `${miscInfo.weight_kg} kg`;
  else if (miscInfo?.weight_raw) weight = `${miscInfo.weight_raw} kg`;

  return {
    number:           item.number,
    statusCode:       statusCode(latestStatus),
    statusText:       latestStatus,
    latest: {
      description: latestEvent?.description || null,
      location:    latestEvent?.address?.city || latestEvent?.location || null,
      timestamp:   latestEvent?.time_iso || null,
    },
    origin:           shippingInfo?.shipper_address?.country || null,
    destination:      shippingInfo?.recipient_address?.country || null,
    carrier:          info.tracking?.providers?.[0]?.provider?.name || null,
    service:          miscInfo?.service_type || null,
    weight,
    daysInTransit:    timeMetrics?.days_of_transit_done ?? null,
    estimatedDelivery,
    lastUpdate,
    milestones,
    events,
  };
}

async function getInfo17(number) {
  const res = await fetch("https://api.17track.net/track/v2.2/gettrackinfo", {
    method:  "POST",
    headers: HEADERS(),
    body:    JSON.stringify([{ number }]),
  });
  return res.json();
}

/* ── Track endpoint ── */
app.post("/api/track", async (req, res) => {
  const { number } = req.body || {};

  if (!number || typeof number !== "string" || !number.trim()) {
    return res.status(400).json({ error: "tracking_number_required" });
  }
  if (!API_KEY) {
    return res.status(500).json({ error: "api_key_not_configured" });
  }

  const num = number.trim();

  try {
    /* Step 1: register the number */
    const regJson = await register17(num);
    const wasNew = regJson?.data?.accepted?.length > 0;

    /* Step 2: if newly registered, wait briefly for 17track to fetch data */
    if (wasNew) await new Promise(r => setTimeout(r, 1500));

    /* Step 3: get tracking info */
    const json = await getInfo17(num);

    /* Step 4: if still not found after wait, retry once more after longer delay */
    if (json?.data?.rejected?.length && !json?.data?.accepted?.length) {
      await new Promise(r => setTimeout(r, 3000));
      const json2 = await getInfo17(num);
      const accepted2 = json2?.data?.accepted || [];
      if (accepted2.length) {
        const out = buildResponse(accepted2[0]);
        return out ? res.json(out) : res.status(404).json({ error: "no_tracking_data" });
      }
      return res.status(404).json({ error: "not_found" });
    }

    if (json.code !== 0) {
      return res.status(502).json({ error: "17track_error", code: json.code });
    }

    const accepted = json?.data?.accepted || [];
    if (!accepted.length) {
      return res.status(404).json({ error: "not_found" });
    }

    const out = buildResponse(accepted[0]);
    if (!out) return res.status(404).json({ error: "no_tracking_data" });
    return res.json(out);

  } catch (err) {
    console.error("Track error:", err.message);
    return res.status(500).json({ error: "server_error" });
  }
});

app.listen(PORT, () => {
  console.log(`Allesway tracking backend running on port ${PORT}`);
});
