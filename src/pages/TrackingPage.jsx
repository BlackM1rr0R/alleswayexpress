import { useState } from "react";
import { Particles, useReveal } from "../utils/animations";
import PageHeader from "../components/PageHeader";
import "../styles/Tracking.css";

const DHL_API_KEY = process.env.REACT_APP_DHL_API_KEY || "";

const LABELS = {
  de: {
    ph: { title: "Sendungsverfolgung", desc: "Verfolgen Sie Ihre Sendung in Echtzeit" },
    placeholder: "Sendungsnummer eingeben…",
    btn: "Verfolgen",
    loading: "Wird geladen…",
    error_empty: "Bitte geben Sie eine Sendungsnummer ein.",
    error_notfound: "Sendung nicht gefunden. Bitte Nummer prüfen.",
    error_api: "API-Schlüssel fehlt. Bitte in .env konfigurieren.",
    error_generic: "Fehler beim Laden. Bitte erneut versuchen.",
    status_label: "Aktueller Status",
    origin: "Absender",
    destination: "Empfänger",
    events_title: "Sendungsverlauf",
    no_location: "Unbekannter Ort",
    dhl_btn: "Auf DHL.de verfolgen",
    tip_title: "Wo finde ich meine Sendungsnummer?",
    tip_desc: "Die Sendungsnummer finden Sie in Ihrer Versandbestätigung per E-Mail oder auf dem Paketschein.",
    status_map: {
      "pre-transit": "Versandvorbereitung",
      "transit": "Unterwegs",
      "delivered": "Zugestellt",
      "failure": "Zustellproblem",
      "unknown": "Unbekannt",
    },
  },
  en: {
    ph: { title: "Shipment Tracking", desc: "Track your shipment in real time" },
    placeholder: "Enter tracking number…",
    btn: "Track",
    loading: "Loading…",
    error_empty: "Please enter a tracking number.",
    error_notfound: "Shipment not found. Please check the number.",
    error_api: "API key missing. Please configure in .env.",
    error_generic: "Error loading data. Please try again.",
    status_label: "Current status",
    origin: "Sender",
    destination: "Recipient",
    events_title: "Shipment history",
    no_location: "Unknown location",
    dhl_btn: "Track on DHL.com",
    tip_title: "Where do I find my tracking number?",
    tip_desc: "You can find your tracking number in your shipping confirmation email or on the parcel label.",
    status_map: {
      "pre-transit": "Pre-transit",
      "transit": "In transit",
      "delivered": "Delivered",
      "failure": "Delivery issue",
      "unknown": "Unknown",
    },
  },
};

const STATUS_ICON = {
  "pre-transit": "📦",
  "transit": "🚛",
  "delivered": "✅",
  "failure": "⚠️",
  "unknown": "❓",
};

const STATUS_COLOR = {
  "pre-transit": "#D4821A",
  "transit": "#0ea5e9",
  "delivered": "#22c55e",
  "failure": "#ef4444",
  "unknown": "#6b7280",
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

function getLocation(loc) {
  if (!loc) return null;
  const parts = [loc.address?.addressLocality, loc.address?.countryCode].filter(Boolean);
  return parts.join(", ") || null;
}

export default function TrackingPage({ setPage, lang = "de" }) {
  const t = LABELS[lang] || LABELS.de;
  const [query, setQuery]       = useState("");
  const [loading, setLoading]   = useState(false);
  const [result, setResult]     = useState(null);
  const [error, setError]       = useState("");

  const refForm   = useReveal();
  const refResult = useReveal();

  const track = async () => {
    const num = query.trim();
    if (!num) { setError(t.error_empty); return; }
    if (!DHL_API_KEY || DHL_API_KEY === "your_dhl_api_key_here") {
      setError(t.error_api); return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch(
        `https://api-eu.dhl.com/track/shipments?trackingNumber=${encodeURIComponent(num)}`,
        { headers: { "DHL-API-Key": DHL_API_KEY } }
      );

      if (res.status === 404) { setError(t.error_notfound); setLoading(false); return; }
      if (!res.ok) { setError(t.error_generic); setLoading(false); return; }

      const data = await res.json();
      const shipment = data?.shipments?.[0];
      if (!shipment) { setError(t.error_notfound); setLoading(false); return; }
      setResult(shipment);
    } catch {
      setError(t.error_generic);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => { if (e.key === "Enter") track(); };

  const statusKey = result?.status?.status || "unknown";
  const statusLabel = t.status_map[statusKey] || statusKey;
  const statusColor = STATUS_COLOR[statusKey] || "#6b7280";
  const statusIcon  = STATUS_ICON[statusKey]  || "❓";

  const dhlUrl = lang === "de"
    ? `https://www.dhl.de/de/privatkunden/pakete-empfangen/verfolgen.html?piececode=${encodeURIComponent(query)}`
    : `https://www.dhl.com/en/express/tracking.html?AWB=${encodeURIComponent(query)}&autoSearch=true`;

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
              <span className="trk-dhl-badge">DHL</span>
              <span className="trk-powered">Powered by DHL Tracking</span>
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
            {query && !loading && (
              <a className="trk-dhl-link" href={dhlUrl} target="_blank" rel="noopener noreferrer">
                ↗ {t.dhl_btn}
              </a>
            )}
          </div>

          {/* Tip box */}
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
                <div className="trk-status-eyebrow">{t.status_label}</div>
                <div className="trk-status-text" style={{ color: statusColor }}>{statusLabel}</div>
                <div className="trk-status-desc">{result.status?.description}</div>
                {result.status?.timestamp && (
                  <div className="trk-status-time">{formatDate(result.status.timestamp, lang)}</div>
                )}
              </div>
            </div>

            {/* Origin / Destination */}
            <div className="trk-od-row">
              {result.origin && (
                <div className="trk-od-card">
                  <div className="trk-od-label">📤 {t.origin}</div>
                  <div className="trk-od-val">{getLocation(result.origin) || t.no_location}</div>
                </div>
              )}
              <div className="trk-od-arrow">→</div>
              {result.destination && (
                <div className="trk-od-card">
                  <div className="trk-od-label">📥 {t.destination}</div>
                  <div className="trk-od-val">{getLocation(result.destination) || t.no_location}</div>
                </div>
              )}
            </div>

            {/* Events timeline */}
            {result.events?.length > 0 && (
              <div className="trk-events">
                <h3 className="trk-events-title">{t.events_title}</h3>
                <div className="trk-timeline">
                  {result.events.map((ev, i) => (
                    <div className={`trk-event${i === 0 ? " trk-event--latest" : ""}`} key={i}>
                      <div className="trk-event-dot" style={{ background: i === 0 ? statusColor : undefined }} />
                      <div className="trk-event-body">
                        <div className="trk-event-desc">{ev.description}</div>
                        <div className="trk-event-meta">
                          {getLocation(ev.location) && <span className="trk-event-loc">📍 {getLocation(ev.location)}</span>}
                          {ev.timestamp && <span className="trk-event-time">{formatDate(ev.timestamp, lang)}</span>}
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
