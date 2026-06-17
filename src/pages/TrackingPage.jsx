import { useState } from "react";
import { Particles, useReveal } from "../utils/animations";
import PageHeader from "../components/PageHeader";
import "../styles/Tracking.css";

const API_KEY = process.env.REACT_APP_17TRACK_KEY || "";

/* 17track status code → internal key */
const STATUS_CODE_MAP = {
  0:  "unknown",
  10: "transit",
  20: "expired",
  30: "pickup",
  35: "undelivered",
  40: "delivered",
  50: "alert",
};

const STATUS_ICON = {
  unknown:     "❓",
  transit:     "🚛",
  expired:     "🕒",
  pickup:      "📦",
  undelivered: "⚠️",
  delivered:   "✅",
  alert:       "🔔",
};

const STATUS_COLOR = {
  unknown:     "#6b7280",
  transit:     "#0ea5e9",
  expired:     "#6b7280",
  pickup:      "#D4821A",
  undelivered: "#ef4444",
  delivered:   "#22c55e",
  alert:       "#f59e0b",
};

const LABELS = {
  de: {
    ph: { title: "Sendungsverfolgung", desc: "Verfolgen Sie Ihre Sendung in Echtzeit — über 2.000 Spediteure weltweit" },
    placeholder: "Sendungsnummer eingeben…",
    btn: "Verfolgen",
    loading: "Wird geladen…",
    error_empty:    "Bitte geben Sie eine Sendungsnummer ein.",
    error_notfound: "Sendung nicht gefunden. Bitte Nummer prüfen.",
    error_api:      "Tracking-Dienst derzeit nicht verfügbar.",
    error_generic:  "Fehler beim Laden. Bitte erneut versuchen.",
    status_label:   "Aktueller Status",
    origin:         "Herkunftsland",
    destination:    "Zielland",
    events_title:   "Sendungsverlauf",
    no_location:    "Unbekannter Ort",
    tip_title:      "Wo finde ich meine Sendungsnummer?",
    tip_desc:       "Die Sendungsnummer finden Sie in Ihrer Versandbestätigung per E-Mail oder auf dem Paketschein.",
    carriers:       "Über 2.000 Spediteure unterstützt",
    status_map: {
      unknown:     "Unbekannt",
      transit:     "Unterwegs",
      expired:     "Abgelaufen",
      pickup:      "Zur Abholung bereit",
      undelivered: "Zustellproblem",
      delivered:   "Zugestellt",
      alert:       "Benachrichtigung",
    },
  },
  en: {
    ph: { title: "Shipment Tracking", desc: "Track your shipment in real time — over 2,000 carriers worldwide" },
    placeholder: "Enter tracking number…",
    btn: "Track",
    loading: "Loading…",
    error_empty:    "Please enter a tracking number.",
    error_notfound: "Shipment not found. Please check the number.",
    error_api:      "Tracking service currently unavailable.",
    error_generic:  "Error loading data. Please try again.",
    status_label:   "Current status",
    origin:         "Origin country",
    destination:    "Destination country",
    events_title:   "Shipment history",
    no_location:    "Unknown location",
    tip_title:      "Where do I find my tracking number?",
    tip_desc:       "You can find your tracking number in your shipping confirmation email or on the parcel label.",
    carriers:       "2,000+ carriers supported",
    status_map: {
      unknown:     "Unknown",
      transit:     "In Transit",
      expired:     "Expired",
      pickup:      "Ready for Pickup",
      undelivered: "Delivery Issue",
      delivered:   "Delivered",
      alert:       "Alert",
    },
  },
};

function formatDate(ts, lang) {
  if (!ts) return "";
  try {
    return new Date(ts).toLocaleString(lang === "de" ? "de-DE" : "en-GB", {
      day: "2-digit", month: "2-digit", year: "numeric",
      hour: "2-digit", minute: "2-digit",
    });
  } catch {
    return ts;
  }
}

export default function TrackingPage({ setPage, lang = "de" }) {
  const t = LABELS[lang] || LABELS.de;
  const [query, setQuery]     = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult]   = useState(null);
  const [error, setError]     = useState("");

  const refForm   = useReveal();
  const refResult = useReveal();

  const track = async () => {
    const num = query.trim();
    if (!num) { setError(t.error_empty); return; }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("https://api.17track.net/track/v2.2/gettrackinfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "17token": API_KEY,
        },
        body: JSON.stringify([{ number: num }]),
      });

      if (!res.ok) { setError(t.error_generic); setLoading(false); return; }

      const json = await res.json();

      /* code 0 = success */
      if (json.code !== 0) { setError(t.error_api); setLoading(false); return; }

      const accepted = json?.data?.accepted;
      if (!accepted?.length) {
        const rejected = json?.data?.rejected;
        if (rejected?.length) { setError(t.error_notfound); setLoading(false); return; }
        setError(t.error_notfound); setLoading(false); return;
      }

      const item  = accepted[0];
      const track = item?.track;

      if (!track) { setError(t.error_notfound); setLoading(false); return; }

      setResult({ number: item.number, track });
    } catch {
      setError(t.error_generic);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => { if (e.key === "Enter") track(); };

  /* parse 17track response */
  const track17   = result?.track || null;
  const z0        = track17?.z0 || {};                  /* latest status event */
  const z1        = track17?.z1 || [];                  /* all events */
  const statusNum = z0.z ?? 0;
  const statusKey = STATUS_CODE_MAP[statusNum] || "unknown";
  const statusLabel = t.status_map[statusKey] || statusKey;
  const statusColor = STATUS_COLOR[statusKey] || "#6b7280";
  const statusIcon  = STATUS_ICON[statusKey]  || "❓";

  return (
    <>
      <PageHeader title={t.ph.title} desc={t.ph.desc} setPage={setPage} lang={lang} page="tracking" />

      <div className="trk-page-bg">
        <div className="trk-orb-1" />
        <div className="trk-orb-2" />
        <div className="trk-orb-3" />
        <div className="trk-grid-bg" />
        <div className="trk-scan-line" />
      </div>
      <Particles />

      {/* ── Search form ── */}
      <section className="trk-section reveal-section" ref={refForm}>
        <div className="section-inner">
          <div className="trk-form-wrap">
            <div className="trk-dhl-logo">
              <span className="trk-17track-badge">17TRACK</span>
              <span className="trk-powered">{t.carriers}</span>
            </div>
            <div className="trk-input-row">
              <input
                className="trk-input"
                type="text"
                placeholder={t.placeholder}
                value={query}
                onChange={(e) => { setQuery(e.target.value); setError(""); }}
                onKeyDown={handleKey}
              />
              <button className="trk-btn" onClick={track} disabled={loading}>
                {loading ? <span className="trk-spinner" /> : "🔍"} {loading ? t.loading : t.btn}
              </button>
            </div>
            {error && <div className="trk-error">{error}</div>}
          </div>

          {/* Tip */}
          <div className="trk-tip">
            <span className="trk-tip-icon">💡</span>
            <div>
              <strong>{t.tip_title}</strong>
              <p>{t.tip_desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Result ── */}
      {result && (
        <section className="trk-section reveal-section" ref={refResult}>
          <div className="section-inner">

            {/* Status card */}
            <div className="trk-status-card" style={{ borderColor: statusColor }}>
              <div className="trk-status-icon" style={{ color: statusColor }}>{statusIcon}</div>
              <div className="trk-status-body">
                <div className="trk-status-eyebrow">{t.status_label} · {result.number}</div>
                <div className="trk-status-text" style={{ color: statusColor }}>{statusLabel}</div>
                {z0.c && <div className="trk-status-desc">{z0.c}</div>}
                {z0.a && <div className="trk-status-time">{formatDate(z0.a, lang)}</div>}
              </div>
            </div>

            {/* Origin / Destination */}
            {(track17.b || track17.c) && (
              <div className="trk-od-row">
                {track17.b && (
                  <div className="trk-od-card">
                    <div className="trk-od-label">📤 {t.origin}</div>
                    <div className="trk-od-val">{track17.b}</div>
                  </div>
                )}
                <div className="trk-od-arrow">→</div>
                {track17.c && (
                  <div className="trk-od-card">
                    <div className="trk-od-label">📥 {t.destination}</div>
                    <div className="trk-od-val">{track17.c}</div>
                  </div>
                )}
              </div>
            )}

            {/* Events timeline */}
            {z1.length > 0 && (
              <div className="trk-events">
                <h3 className="trk-events-title">{t.events_title}</h3>
                <div className="trk-timeline">
                  {z1.map((ev, i) => (
                    <div className={`trk-event${i === 0 ? " trk-event--latest" : ""}`} key={i}>
                      <div className="trk-event-dot" style={{ background: i === 0 ? statusColor : undefined, borderColor: i === 0 ? statusColor : undefined }} />
                      <div className="trk-event-body">
                        <div className="trk-event-desc">{ev.c || "—"}</div>
                        <div className="trk-event-meta">
                          {ev.b && <span className="trk-event-loc">📍 {ev.b}</span>}
                          {ev.a && <span className="trk-event-time">{formatDate(ev.a, lang)}</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}
