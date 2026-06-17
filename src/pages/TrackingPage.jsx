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
const STATUS_BG    = { unknown:"rgba(107,114,128,0.07)", transit:"rgba(14,165,233,0.07)", expired:"rgba(107,114,128,0.07)", pickup:"rgba(212,130,26,0.07)", undelivered:"rgba(239,68,68,0.07)", delivered:"rgba(34,197,94,0.07)", alert:"rgba(245,158,11,0.07)" };
const STATUS_PROGRESS = { unknown:0, transit:55, expired:100, pickup:80, undelivered:70, delivered:100, alert:60 };

const LABELS = {
  de: {
    ph: { title: "Sendungsverfolgung", desc: "Verfolgen Sie Ihre Sendung in Echtzeit — über 2.000 Spediteure weltweit" },
    placeholder: "Sendungsnummer eingeben…",
    btn: "Verfolgen", loading: "Wird geladen…",
    search_again: "Neue Suche",
    error_empty:    "Bitte geben Sie eine Sendungsnummer ein.",
    error_notfound: "Sendung nicht gefunden. Bitte Nummer prüfen.",
    error_generic:  "Fehler beim Laden. Bitte erneut versuchen.",
    status_label:   "Aktueller Status",
    tracking_nr:    "Sendungsnummer",
    origin:         "Absenderland",
    destination:    "Zielland",
    carrier:        "Spediteur",
    service:        "Serviceart",
    weight:         "Gewicht",
    events_title:   "Sendungsverlauf",
    tip_title:      "Wo finde ich meine Sendungsnummer?",
    tip_desc:       "Die Sendungsnummer finden Sie in Ihrer Versandbestätigung per E-Mail oder auf dem Paketschein.",
    carriers:       "Über 2.000 Spediteure unterstützt",
    supported:      "Unterstützte Spediteure:",
    no_events:      "Noch keine Ereignisse verfügbar.",
    est_delivery:   "Voraussichtl. Lieferung",
    days_transit:   "Tage unterwegs",
    last_update:    "Letztes Update",
    milestones:     "Lieferstatus",
    route:          "Route",
    progress:       "Fortschritt",
    copy_done:      "Kopiert!",
    share:          "Teilen",
    details:        "Paketdetails",
    powered:        "Powered by AlleswayTrack",
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
    search_again: "New search",
    error_empty:    "Please enter a tracking number.",
    error_notfound: "Shipment not found. Please check the number.",
    error_generic:  "Error loading data. Please try again.",
    status_label:   "Current status",
    tracking_nr:    "Tracking number",
    origin:         "Origin",
    destination:    "Destination",
    carrier:        "Carrier",
    service:        "Service type",
    weight:         "Weight",
    events_title:   "Shipment history",
    tip_title:      "Where do I find my tracking number?",
    tip_desc:       "You can find your tracking number in your shipping confirmation email or on the parcel label.",
    carriers:       "2,000+ carriers supported",
    supported:      "Supported carriers:",
    no_events:      "No events available yet.",
    est_delivery:   "Est. delivery",
    days_transit:   "Days in transit",
    last_update:    "Last update",
    milestones:     "Delivery status",
    route:          "Route",
    progress:       "Progress",
    copy_done:      "Copied!",
    share:          "Share",
    details:        "Package details",
    powered:        "Powered by AlleswayTrack",
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

const MILESTONE_STEPS = [
  { key: "InfoReceived",       icon: "📋", labelDe: "Angemeldet",     labelEn: "Registered" },
  { key: "PickedUp",           icon: "📦", labelDe: "Abgeholt",       labelEn: "Picked Up" },
  { key: "Departure",          icon: "✈️", labelDe: "Abgang",         labelEn: "Departed" },
  { key: "Arrival",            icon: "🏭", labelDe: "Ankunft",        labelEn: "Arrived" },
  { key: "OutForDelivery",     icon: "🚚", labelDe: "In Zustellung",  labelEn: "Out for Delivery" },
  { key: "Delivered",          icon: "✅", labelDe: "Zugestellt",     labelEn: "Delivered" },
];

const COUNTRY_NAMES_DE = {
  DE:"Deutschland", AT:"Österreich", CH:"Schweiz", FR:"Frankreich", PL:"Polen",
  NL:"Niederlande", BE:"Belgien", IT:"Italien", ES:"Spanien", CN:"China",
  US:"USA", GB:"Großbritannien", CZ:"Tschechien", HU:"Ungarn", TR:"Türkei",
};
const COUNTRY_NAMES_EN = {
  DE:"Germany", AT:"Austria", CH:"Switzerland", FR:"France", PL:"Poland",
  NL:"Netherlands", BE:"Belgium", IT:"Italy", ES:"Spain", CN:"China",
  US:"USA", GB:"United Kingdom", CZ:"Czech Republic", HU:"Hungary", TR:"Turkey",
};
function countryName(code, lang) {
  if (!code) return code;
  const map = lang === "de" ? COUNTRY_NAMES_DE : COUNTRY_NAMES_EN;
  return map[code] || code;
}

function formatDate(ts, lang) {
  if (!ts) return "";
  try {
    return new Date(ts).toLocaleString(lang === "de" ? "de-DE" : "en-GB", {
      timeZone: "Europe/Berlin",
      day: "2-digit", month: "2-digit", year: "numeric",
      hour: "2-digit", minute: "2-digit",
    });
  } catch { return ts; }
}
function formatDateShort(ts, lang) {
  if (!ts) return "";
  try {
    return new Date(ts).toLocaleDateString(lang === "de" ? "de-DE" : "en-GB", {
      timeZone: "Europe/Berlin",
      day: "2-digit", month: "short",
    });
  } catch { return ts; }
}

function CopyButton({ text, label }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button className={`trk-copy-btn${copied ? " trk-copy-btn--done" : ""}`} onClick={copy}>
      {copied ? "✓ " + label : "⎘"}
    </button>
  );
}

function ProgressBar({ pct, color }) {
  return (
    <div className="trk-progress-track">
      <div
        className="trk-progress-fill"
        style={{ width: `${pct}%`, background: color }}
      />
      <div className="trk-progress-dot" style={{ left: `${pct}%`, background: color, boxShadow: `0 0 10px ${color}` }} />
    </div>
  );
}

export default function TrackingPage({ setPage, lang = "de", trackQuery = "", clearTrackQuery }) {
  const t = LABELS[lang] || LABELS.de;
  const [query, setQuery]     = useState(trackQuery || "");
  const [loading, setLoading] = useState(false);
  const [result, setResult]   = useState(null);
  const [error, setError]     = useState("");
  const [expandedEvents, setExpandedEvents] = useState(false);

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
    setLoading(true); setError(""); setResult(null); setExpandedEvents(false);
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
  const reset = () => { setResult(null); setError(""); setQuery(""); };

  const statusKey   = STATUS_CODE_MAP[result?.statusCode ?? 0] || "unknown";
  const statusLabel = t.status_map[statusKey];
  const statusColor = STATUS_COLOR[statusKey];
  const statusIcon  = STATUS_ICON[statusKey];
  const statusBg    = STATUS_BG[statusKey];
  const progress    = STATUS_PROGRESS[statusKey] || 0;

  /* build milestone steps with reached state */
  const milestoneMap = {};
  (result?.milestones || []).forEach(m => { milestoneMap[m.key] = m; });
  const steps = MILESTONE_STEPS.map(s => ({
    ...s,
    reached: milestoneMap[s.key]?.reached || false,
    time:    milestoneMap[s.key]?.time || null,
    label:   lang === "de" ? s.labelDe : s.labelEn,
  }));

  const visibleEvents = expandedEvents ? result?.events : result?.events?.slice(0, 5);
  const hasMoreEvents = (result?.events?.length || 0) > 5;

  return (
    <>
      <PageHeader title={t.ph.title} desc={t.ph.desc} setPage={setPage} lang={lang} page="tracking" />

      <div className="trk-page-bg">
        <div className="trk-orb-1" /><div className="trk-orb-2" />
        <div className="trk-orb-3" /><div className="trk-grid-bg" />
        <div className="trk-scan-line" />
      </div>
      <Particles />

      {/* ── Search form ── */}
      <section className="trk-section reveal-section" ref={refForm}>
        <div className="trk-section-inner">
          <div className="trk-form-wrap">
            <div className="trk-brand-row">
              <div className="trk-brand-badge">
                <span className="trk-brand-dot" />
                AlleswayTrack
              </div>
              <span className="trk-powered-label">{t.carriers}</span>
            </div>

            <div className="trk-search-block">
              <div className="trk-input-row">
                <div className="trk-input-wrap">
                  <span className="trk-input-icon">🔍</span>
                  <input
                    className="trk-input"
                    type="text"
                    placeholder={t.placeholder}
                    value={query}
                    onChange={e => { setQuery(e.target.value); setError(""); }}
                    onKeyDown={handleKey}
                  />
                  {query && (
                    <button className="trk-input-clear" onClick={() => setQuery("")}>✕</button>
                  )}
                </div>
                <button className="trk-btn" onClick={track} disabled={loading}>
                  {loading
                    ? <><span className="trk-spinner" /> {t.loading}</>
                    : t.btn
                  }
                </button>
              </div>
              {error && (
                <div className="trk-error">
                  <span>⚠️</span> {error}
                </div>
              )}
            </div>

            <div className="trk-carriers-row">
              <span className="trk-carriers-label">{t.supported}</span>
              {CARRIERS.map(c => <span className="trk-carrier-chip" key={c}>{c}</span>)}
              <span className="trk-carrier-chip trk-carrier-chip--more">+1992</span>
            </div>
          </div>

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
        <section className="trk-section trk-result-section">
          <div className="trk-section-inner">

            {/* ── Hero card ── */}
            <div className="trk-hero-card" style={{ borderColor: statusColor }}>
              <div className="trk-hero-top">
                <div className="trk-hero-left">
                  <div className="trk-hero-icon-wrap" style={{ background: statusBg, borderColor: statusColor }}>
                    <span className="trk-hero-icon">{statusIcon}</span>
                  </div>
                  <div className="trk-hero-body">
                    <div className="trk-hero-eyebrow">{t.status_label}</div>
                    <div className="trk-hero-status" style={{ color: statusColor }}>{statusLabel}</div>
                    {result.latest?.description && (
                      <div className="trk-hero-desc">{result.latest.description}</div>
                    )}
                  </div>
                </div>
                <div className="trk-hero-right">
                  <div className="trk-nr-box">
                    <div className="trk-nr-label">{t.tracking_nr}</div>
                    <div className="trk-nr-val">{result.number}</div>
                    <CopyButton text={result.number} label={t.copy_done} />
                  </div>
                  {result.latest?.timestamp && (
                    <div className="trk-hero-time">
                      🕐 {formatDate(result.latest.timestamp, lang)}&nbsp;<span className="trk-tz">MEZ</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Progress bar */}
              <div className="trk-progress-section">
                <div className="trk-progress-label">
                  <span>{t.progress}</span>
                  <span style={{ color: statusColor }}>{progress}%</span>
                </div>
                <ProgressBar pct={progress} color={statusColor} />
              </div>
            </div>

            {/* ── Route banner ── */}
            {(result.origin || result.destination) && (
              <div className="trk-route-card">
                <div className="trk-route-label">{t.route}</div>
                <div className="trk-route-body">
                  <div className="trk-route-point trk-route-point--from">
                    <div className="trk-route-flag">📤</div>
                    <div className="trk-route-country">{countryName(result.origin, lang) || "—"}</div>
                    <div className="trk-route-code">{result.origin}</div>
                  </div>
                  <div className="trk-route-line">
                    <div className="trk-route-truck">🚛</div>
                    <div className="trk-route-dashes" />
                  </div>
                  <div className="trk-route-point trk-route-point--to">
                    <div className="trk-route-flag">📥</div>
                    <div className="trk-route-country">{countryName(result.destination, lang) || "—"}</div>
                    <div className="trk-route-code">{result.destination}</div>
                  </div>
                </div>
              </div>
            )}

            {/* ── Stats row ── */}
            <div className="trk-stats-row">
              {result.carrier && (
                <div className="trk-stat">
                  <div className="trk-stat-icon">🏢</div>
                  <div className="trk-stat-body">
                    <div className="trk-stat-label">{t.carrier}</div>
                    <div className="trk-stat-val">{result.carrier}</div>
                  </div>
                </div>
              )}
              {result.service && (
                <div className="trk-stat">
                  <div className="trk-stat-icon">📋</div>
                  <div className="trk-stat-body">
                    <div className="trk-stat-label">{t.service}</div>
                    <div className="trk-stat-val">{result.service}</div>
                  </div>
                </div>
              )}
              {result.weight && (
                <div className="trk-stat">
                  <div className="trk-stat-icon">⚖️</div>
                  <div className="trk-stat-body">
                    <div className="trk-stat-label">{t.weight}</div>
                    <div className="trk-stat-val">{result.weight}</div>
                  </div>
                </div>
              )}
              {result.daysInTransit != null && (
                <div className="trk-stat">
                  <div className="trk-stat-icon">📅</div>
                  <div className="trk-stat-body">
                    <div className="trk-stat-label">{t.days_transit}</div>
                    <div className="trk-stat-val">{result.daysInTransit}</div>
                  </div>
                </div>
              )}
              {result.estimatedDelivery && (
                <div className="trk-stat trk-stat--accent">
                  <div className="trk-stat-icon">🗓️</div>
                  <div className="trk-stat-body">
                    <div className="trk-stat-label">{t.est_delivery}</div>
                    <div className="trk-stat-val">{formatDateShort(result.estimatedDelivery, lang)}</div>
                  </div>
                </div>
              )}
              {result.lastUpdate && (
                <div className="trk-stat">
                  <div className="trk-stat-icon">🔄</div>
                  <div className="trk-stat-body">
                    <div className="trk-stat-label">{t.last_update}</div>
                    <div className="trk-stat-val">{formatDate(result.lastUpdate, lang)}</div>
                  </div>
                </div>
              )}
            </div>

            {/* ── Milestone stepper ── */}
            <div className="trk-stepper-wrap">
              <h3 className="trk-section-title">{t.milestones}</h3>
              <div className="trk-stepper">
                {steps.map((s, i) => {
                  const isLast = i === steps.length - 1;
                  const nextDone = steps[i + 1]?.reached;
                  return (
                    <div key={s.key} className={`trk-step${s.reached ? " trk-step--done" : ""}`}>
                      <div className="trk-step-track">
                        <div
                          className="trk-step-circle"
                          style={s.reached ? { background: statusColor, borderColor: statusColor } : {}}
                        >
                          {s.reached ? <span className="trk-step-check">✓</span> : <span className="trk-step-num">{i + 1}</span>}
                        </div>
                        {!isLast && (
                          <div
                            className="trk-step-connector"
                            style={{ background: nextDone ? statusColor : undefined }}
                          />
                        )}
                      </div>
                      <div className="trk-step-info">
                        <div className="trk-step-icon">{s.icon}</div>
                        <div className="trk-step-label">{s.label}</div>
                        {s.time && (
                          <div className="trk-step-time">{formatDateShort(s.time, lang)}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── Timeline ── */}
            <div className="trk-timeline-wrap">
              <h3 className="trk-section-title">{t.events_title}</h3>
              {result.events?.length > 0 ? (
                <>
                  <div className="trk-timeline">
                    {visibleEvents.map((ev, i) => (
                      <div className={`trk-event${i === 0 ? " trk-event--latest" : ""}`} key={i}>
                        <div className="trk-event-left">
                          <div
                            className="trk-event-dot"
                            style={i === 0 ? { background: statusColor, borderColor: statusColor, boxShadow: `0 0 12px ${statusColor}66` } : {}}
                          />
                          {i < visibleEvents.length - 1 && <div className="trk-event-connector" />}
                        </div>
                        <div className="trk-event-card">
                          <div className="trk-event-head">
                            <div className="trk-event-desc">{ev.description || "—"}</div>
                            {i === 0 && <span className="trk-event-badge" style={{ background: statusColor }}>Aktuell</span>}
                          </div>
                          <div className="trk-event-meta">
                            {ev.location  && <span className="trk-event-loc">📍 {ev.location}</span>}
                            {ev.timestamp && (
                              <span className="trk-event-time">
                                🕐 {formatDate(ev.timestamp, lang)} <span className="trk-tz">MEZ</span>
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {hasMoreEvents && (
                    <button className="trk-expand-btn" onClick={() => setExpandedEvents(v => !v)}>
                      {expandedEvents
                        ? "▲ Weniger anzeigen"
                        : `▼ Alle ${result.events.length} Ereignisse anzeigen`
                      }
                    </button>
                  )}
                </>
              ) : (
                <p className="trk-no-events">{t.no_events}</p>
              )}
            </div>

            {/* ── Footer actions ── */}
            <div className="trk-result-footer">
              <button className="trk-new-search-btn" onClick={reset}>
                🔍 {t.search_again}
              </button>
              <div className="trk-powered-footer">{t.powered}</div>
            </div>

          </div>
        </section>
      )}
    </>
  );
}
