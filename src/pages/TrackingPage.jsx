import { useState, useEffect } from "react";
import { Particles, useReveal } from "../utils/animations";
import PageHeader from "../components/PageHeader";
import "../styles/Tracking.css";

const BACKEND =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000"
    : (process.env.REACT_APP_BACKEND_URL || "");

const STATUS_CODE_MAP = {
  0: "unknown", 10: "transit", 20: "expired",
  30: "pickup",  35: "undelivered", 40: "delivered", 50: "alert",
};
const STATUS_ICON  = { unknown:"❓", transit:"🚛", expired:"🕒", pickup:"📦", undelivered:"⚠️", delivered:"✅", alert:"🔔" };
const STATUS_COLOR = { unknown:"#6b7280", transit:"#0ea5e9", expired:"#6b7280", pickup:"#D4821A", undelivered:"#ef4444", delivered:"#22c55e", alert:"#f59e0b" };

const LABELS = {
  de: {
    ph: { title: "Sendungsverfolgung", desc: "Verfolgen Sie Ihre Sendung in Echtzeit — über 2.000 Spediteure weltweit" },
    placeholder: "Sendungsnummer eingeben…",
    btn: "Verfolgen", loading: "Wird geladen…",
    error_empty:    "Bitte geben Sie eine Sendungsnummer ein.",
    error_notfound: "Sendung nicht gefunden. Bitte Nummer prüfen.",
    error_generic:  "Fehler beim Laden. Bitte erneut versuchen.",
    status_label:   "Aktueller Status",
    origin:         "Herkunftsland",
    destination:    "Zielland",
    events_title:   "Sendungsverlauf",
    tip_title:      "Wo finde ich meine Sendungsnummer?",
    tip_desc:       "Die Sendungsnummer finden Sie in Ihrer Versandbestätigung per E-Mail oder auf dem Paketschein.",
    carriers:       "Über 2.000 Spediteure unterstützt",
    supported:      "Unterstützte Spediteure:",
    no_events:      "Noch keine Ereignisse verfügbar.",
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
    btn: "Track", loading: "Loading…",
    error_empty:    "Please enter a tracking number.",
    error_notfound: "Shipment not found. Please check the number.",
    error_generic:  "Error loading data. Please try again.",
    status_label:   "Current status",
    origin:         "Origin country",
    destination:    "Destination country",
    events_title:   "Shipment history",
    tip_title:      "Where do I find my tracking number?",
    tip_desc:       "You can find your tracking number in your shipping confirmation email or on the parcel label.",
    carriers:       "2,000+ carriers supported",
    supported:      "Supported carriers:",
    no_events:      "No events available yet.",
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

const CARRIERS = ["DHL","FedEx","UPS","DPD","GLS","TNT","Hermes","DB Schenker"];

function formatDate(ts, lang) {
  if (!ts) return "";
  try {
    return new Date(ts).toLocaleString(lang === "de" ? "de-DE" : "en-GB", {
      day:"2-digit", month:"2-digit", year:"numeric",
      hour:"2-digit", minute:"2-digit",
    });
  } catch { return ts; }
}

export default function TrackingPage({ setPage, lang = "de", trackQuery = "", clearTrackQuery }) {
  const t = LABELS[lang] || LABELS.de;
  const [query, setQuery]     = useState(trackQuery || "");
  const [loading, setLoading] = useState(false);
  const [result, setResult]   = useState(null);
  const [error, setError]     = useState("");

  const refForm = useReveal();

  useEffect(() => {
    if (trackQuery) {
      setQuery(trackQuery);
      clearTrackQuery && clearTrackQuery();
    }
  }, []); // eslint-disable-line

  const track = async () => {
    const num = query.trim();
    if (!num) { setError(t.error_empty); return; }

    setLoading(true); setError(""); setResult(null);

    try {
      const res = await fetch(`${BACKEND}/api/track`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ number: num }),
      });

      const data = await res.json();

      if (res.status === 404) { setError(t.error_notfound); setLoading(false); return; }
      if (!res.ok) { setError(t.error_generic); setLoading(false); return; }

      setResult(data);
    } catch {
      setError(t.error_generic);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => { if (e.key === "Enter") track(); };

  const statusKey   = STATUS_CODE_MAP[result?.statusCode ?? 0] || "unknown";
  const statusLabel = t.status_map[statusKey];
  const statusColor = STATUS_COLOR[statusKey];
  const statusIcon  = STATUS_ICON[statusKey];

  return (
    <>
      <PageHeader title={t.ph.title} desc={t.ph.desc} setPage={setPage} lang={lang} page="tracking" />

      <div className="trk-page-bg">
        <div className="trk-orb-1" /><div className="trk-orb-2" />
        <div className="trk-orb-3" /><div className="trk-grid-bg" />
        <div className="trk-scan-line" />
      </div>
      <Particles />

      {/* ── Form ── */}
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
                onChange={e => { setQuery(e.target.value); setError(""); setResult(null); }}
                onKeyDown={handleKey}
              />
              <button className="trk-btn" onClick={track} disabled={loading}>
                {loading ? <span className="trk-spinner" /> : "🔍"}
                {" "}{loading ? t.loading : t.btn}
              </button>
            </div>
            {error && <div className="trk-error">{error}</div>}
            <div className="trk-carriers-row">
              <span className="trk-carriers-label">{t.supported}</span>
              {CARRIERS.map(c => <span className="trk-carrier-chip" key={c}>{c}</span>)}
              <span className="trk-carrier-chip trk-carrier-chip--more">+1992</span>
            </div>
          </div>

          <div className="trk-tip">
            <span className="trk-tip-icon">💡</span>
            <div><strong>{t.tip_title}</strong><p>{t.tip_desc}</p></div>
          </div>
        </div>
      </section>

      {/* ── Result ── */}
      {result && (
        <section className="trk-section">
          <div className="section-inner">

            {/* Status card */}
            <div className="trk-status-card" style={{ borderColor: statusColor }}>
              <div className="trk-status-icon" style={{ color: statusColor }}>{statusIcon}</div>
              <div className="trk-status-body">
                <div className="trk-status-eyebrow">{t.status_label} · {result.number}</div>
                <div className="trk-status-text" style={{ color: statusColor }}>{statusLabel}</div>
                {result.latest?.description && (
                  <div className="trk-status-desc">{result.latest.description}</div>
                )}
                {result.latest?.timestamp && (
                  <div className="trk-status-time">{formatDate(result.latest.timestamp, lang)}</div>
                )}
              </div>
            </div>

            {/* Origin / Destination */}
            {(result.origin || result.destination) && (
              <div className="trk-od-row">
                {result.origin && (
                  <div className="trk-od-card">
                    <div className="trk-od-label">📤 {t.origin}</div>
                    <div className="trk-od-val">{result.origin}</div>
                  </div>
                )}
                <div className="trk-od-arrow">→</div>
                {result.destination && (
                  <div className="trk-od-card">
                    <div className="trk-od-label">📥 {t.destination}</div>
                    <div className="trk-od-val">{result.destination}</div>
                  </div>
                )}
              </div>
            )}

            {/* Timeline */}
            <div className="trk-events">
              <h3 className="trk-events-title">{t.events_title}</h3>
              {result.events?.length > 0 ? (
                <div className="trk-timeline">
                  {result.events.map((ev, i) => (
                    <div className={`trk-event${i === 0 ? " trk-event--latest" : ""}`} key={i}>
                      <div
                        className="trk-event-dot"
                        style={i === 0 ? { background: statusColor, borderColor: statusColor } : {}}
                      />
                      <div className="trk-event-body">
                        <div className="trk-event-desc">{ev.description || "—"}</div>
                        <div className="trk-event-meta">
                          {ev.location  && <span className="trk-event-loc">📍 {ev.location}</span>}
                          {ev.timestamp && <span className="trk-event-time">{formatDate(ev.timestamp, lang)}</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14 }}>{t.no_events}</p>
              )}
            </div>

          </div>
        </section>
      )}
    </>
  );
}
