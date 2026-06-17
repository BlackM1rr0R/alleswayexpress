import { useState, useEffect } from "react";
import { Particles, useReveal } from "../utils/animations";
import PageHeader from "../components/PageHeader";
import "../styles/Tracking.css";

const LABELS = {
  de: {
    ph: { title: "Sendungsverfolgung", desc: "Verfolgen Sie Ihre Sendung in Echtzeit — über 2.000 Spediteure weltweit" },
    placeholder: "Sendungsnummer eingeben…",
    btn: "Verfolgen",
    tip_title: "Wo finde ich meine Sendungsnummer?",
    tip_desc: "Die Sendungsnummer finden Sie in Ihrer Versandbestätigung per E-Mail oder auf dem Paketschein.",
    carriers: "Über 2.000 Spediteure unterstützt",
    embed_hint: "Tracking-Ergebnisse werden unten angezeigt",
    error_empty: "Bitte geben Sie eine Sendungsnummer ein.",
    supported: "Unterstützte Spediteure:",
  },
  en: {
    ph: { title: "Shipment Tracking", desc: "Track your shipment in real time — over 2,000 carriers worldwide" },
    placeholder: "Enter tracking number…",
    btn: "Track",
    tip_title: "Where do I find my tracking number?",
    tip_desc: "You can find your tracking number in your shipping confirmation email or on the parcel label.",
    carriers: "2,000+ carriers supported",
    embed_hint: "Tracking results are displayed below",
    error_empty: "Please enter a tracking number.",
    supported: "Supported carriers:",
  },
};

const CARRIERS = ["DHL", "FedEx", "UPS", "DPD", "GLS", "TNT", "Hermes", "DB Schenker"];

export default function TrackingPage({ setPage, lang = "de", trackQuery = "", clearTrackQuery }) {
  const t = LABELS[lang] || LABELS.de;
  const [query, setQuery]       = useState(trackQuery || "");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError]       = useState("");

  const refForm   = useReveal();
  const refResult = useReveal();

  /* clear the pre-filled query from App state after reading it */
  useEffect(() => {
    if (trackQuery) {
      setQuery(trackQuery);
      clearTrackQuery && clearTrackQuery();
    }
  }, []); // eslint-disable-line

  const handleTrack = () => {
    const num = query.trim();
    if (!num) { setError(t.error_empty); return; }
    setError("");
    setSubmitted(false);
    /* small tick so iframe always reloads with new number */
    setTimeout(() => setSubmitted(true), 50);
  };

  const handleKey = (e) => { if (e.key === "Enter") handleTrack(); };

  const embedLang = lang === "en" ? "en" : "de";
  const embedUrl  = submitted
    ? `https://t.17track.net/${embedLang}#nums=${encodeURIComponent(query.trim())}`
    : null;

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
                onChange={(e) => { setQuery(e.target.value); setError(""); setSubmitted(false); }}
                onKeyDown={handleKey}
              />
              <button className="trk-btn" onClick={handleTrack}>
                🔍 {t.btn}
              </button>
            </div>

            {error && <div className="trk-error">{error}</div>}

            <div className="trk-carriers-row">
              <span className="trk-carriers-label">{t.supported}</span>
              {CARRIERS.map(c => (
                <span className="trk-carrier-chip" key={c}>{c}</span>
              ))}
              <span className="trk-carrier-chip trk-carrier-chip--more">+1992</span>
            </div>
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

      {/* ── Embedded 17track result ── */}
      {submitted && embedUrl && (
        <section className="trk-section trk-embed-section">
          <div className="section-inner">
            <div className="trk-embed-hint">
              <span>📦</span> {t.embed_hint}
            </div>
            <div className="trk-embed-wrap">
              <iframe
                key={embedUrl}
                src={embedUrl}
                title="17track"
                className="trk-embed-frame"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
