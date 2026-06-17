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
    /* Step 1: register (needed if first time tracking this number) */
    await register17(num);

    /* Step 2: get tracking info */
    const json = await getInfo17(num);

    if (json.code !== 0) {
      return res.status(502).json({ error: "17track_error", code: json.code });
    }

    const accepted = json?.data?.accepted || [];

    if (!accepted.length) {
      return res.status(404).json({ error: "not_found" });
    }

    const item  = accepted[0];
    const track = item?.track;

    if (!track) {
      return res.status(404).json({ error: "no_tracking_data" });
    }

    return res.json({
      number:     item.number,
      statusCode: track.z0?.z ?? 0,
      latest: {
        description: track.z0?.c || null,
        location:    track.z0?.b || null,
        timestamp:   track.z0?.a || null,
      },
      origin:      track.b || null,
      destination: track.c || null,
      events: (track.z1 || []).map(ev => ({
        description: ev.c || null,
        location:    ev.b || null,
        timestamp:   ev.a || null,
      })),
    });

  } catch (err) {
    console.error("Track error:", err.message);
    return res.status(500).json({ error: "server_error" });
  }
});

app.listen(PORT, () => {
  console.log(`Allesway tracking backend running on port ${PORT}`);
});
