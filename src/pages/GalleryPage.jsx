import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { Particles } from "../utils/animations";
import "../styles/Gallery.css";

import kamyon3      from "../assets/kamyon3.jpeg";
import kamyon4      from "../assets/kamyon4.jpeg";
import kamyon2      from "../assets/kamyon2.jpeg";
import kamyon1      from "../assets/kamyon1.jpeg";
import kamyon       from "../assets/kamyon.jpeg";
import lkwtransport from "../assets/lkwtransport.jpeg";
import versich      from "../assets/versich.jpeg";
import sprinter     from "../assets/sprinter.jpeg";
import new5        from "../assets/new5.jpeg";
import new2        from "../assets/new2.jpeg";
import new1        from "../assets/new1.jpeg";
import express      from "../assets/express.jpeg";
import back2        from "../assets/back2.jpeg";
import back4        from "../assets/back4.jpeg";
import aaa1         from "../assets/aaaaaaaaaa1.jpg";
import aaa2         from "../assets/aaaaaaaaaa2.jpg";

const PHOTOS = [
  { src: kamyon3,      label: "LKW" },
  { src: kamyon4,      label: "LKW" },
  { src: kamyon1,      label: "Flugzeug" },
  { src: kamyon2,      label: "Sprinter" },
  { src: kamyon,       label: "Schiff" },
  { src: lkwtransport, label: "LKW" },
  { src: versich,      label: "LKW" },
  { src: sprinter,     label: "Sprinter" },
  { src: new5,         label: "LKW" },
  { src: new2,         label: "Sprinter" },
  { src: new1,         label: "LKW" },
  { src: express,      label: "Sprinter" },
  { src: back2,        label: "Karte" },
  { src: back4,        label: "LKW" },
  { src: aaa1,         label: "Sprinter" },
  { src: aaa2,         label: "Ladung" },
];

const FILTERS_DE = ["Alle", "LKW", "Sprinter", "Flugzeug", "Schiff", "Karte", "Ladung"];
const FILTERS_EN = ["All",  "Truck", "Sprinter", "Aircraft", "Ship",  "Map",   "Cargo"];
const LABEL_MAP  = { LKW: "Truck", Sprinter: "Sprinter", Flugzeug: "Aircraft", Schiff: "Ship", Karte: "Map", Ladung: "Cargo" };

const CONTENT = {
  de: {
    ph: { title: "Galerie", desc: "Einblick in unsere Fahrzeuge und den täglichen Betrieb" },
    intro_eyebrow: "Unsere Welt in Bildern",
    intro_title:   "Moderne Flotte. Professioneller Betrieb.",
    intro_desc:    "Seit der Gründung im Jahr 2025 baut Allesway Express auf eine leistungsstarke, moderne Fahrzeugflotte. Hier erhalten Sie einen authentischen Einblick in unsere tägliche Arbeit — von der Abholung bis zur pünktlichen Zustellung, von unseren LKW-Fahrern bis zu unseren Logistikzentren.",
    stats: [
      { num: "500+",  label: "Fahrzeuge in der Flotte" },
      { num: "16",    label: "Bundesländer abgedeckt" },
      { num: "200+",  label: "Städte beliefert" },
      { num: "99,7%", label: "Pünktlichkeitsrate" },
    ],
    cats: [
      { icon: "🚛", title: "LKW-Flotte",        desc: "Unsere schweren Lastkraftwagen sind das Rückgrat unseres Unternehmens. Von 7,5-Tonnern bis zum 40-Tonnen-Actros — für jede Ladung das richtige Fahrzeug, GPS-überwacht und vollversichert." },
      { icon: "🚐", title: "Sprinter-Service",   desc: "Wendige Transporter für den Stadt- und Regionalverkehr. Unsere Mercedes Sprinter liefern bis zu 1,5 Tonnen same-day — zuverlässig, schnell und direkt zum Empfänger." },
      { icon: "✈️", title: "Luftfracht",         desc: "Für dringende internationale Sendungen bieten wir Luftfrachtlösungen in alle Welt. Schnelle Abwicklung, lückenlose Dokumentation und sichere Verpackung inklusive." },
      { icon: "🚢", title: "Seefracht",          desc: "Kosteneffiziente Überseetransporte für große Warenmengen. Wir organisieren FCL- und LCL-Sendungen und kümmern uns um die gesamte Zollabwicklung." },
      { icon: "📦", title: "Ladungssicherung",   desc: "Jede Sendung wird professionell gesichert und verpackt. Unsere geschulten Fahrer und Logistiker garantieren, dass Ihre Fracht sicher ans Ziel kommt." },
      { icon: "🗺️", title: "Deutschlandnetz",    desc: "Von Wörth am Rhein aus bedienen wir ein dichtes Streckennetz in alle 16 Bundesländer. Feste Abfahrtszeiten, planbare Laufzeiten und transparente Sendungsverfolgung." },
    ],
    filter_title: "Fotos filtern nach Kategorie",
    photo_count:  (n) => `${n} Fotos`,
    cta_title: "Neugierig geworden?",
    cta_desc:  "Kontaktieren Sie uns für ein persönliches Gespräch oder fordern Sie direkt ein unverbindliches Angebot an.",
    cta_btn1:  "Angebot anfordern",
    cta_btn2:  "Kontakt aufnehmen",
  },
  en: {
    ph: { title: "Gallery", desc: "A look at our vehicles and daily operations" },
    intro_eyebrow: "Our world in pictures",
    intro_title:   "Modern Fleet. Professional Operations.",
    intro_desc:    "Since our founding in 2025, Allesway Express has built on a powerful, modern vehicle fleet. Here you get an authentic look at our daily work — from pickup to on-time delivery, from our truck drivers to our logistics centres.",
    stats: [
      { num: "500+",  label: "Vehicles in fleet" },
      { num: "16",    label: "Federal states covered" },
      { num: "200+",  label: "Cities served" },
      { num: "99.7%", label: "On-time rate" },
    ],
    cats: [
      { icon: "🚛", title: "Truck Fleet",         desc: "Our heavy trucks are the backbone of our company. From 7.5-tonne vans to 40-tonne Actros — the right vehicle for every load, GPS-monitored and fully insured." },
      { icon: "🚐", title: "Sprinter Service",    desc: "Agile vans for urban and regional transport. Our Mercedes Sprinters deliver up to 1.5 tonnes same-day — reliably, quickly and directly to the recipient." },
      { icon: "✈️", title: "Air Freight",         desc: "For urgent international shipments we offer air freight solutions worldwide. Fast processing, complete documentation and safe packaging included." },
      { icon: "🚢", title: "Sea Freight",         desc: "Cost-effective overseas transport for large volumes. We organise FCL and LCL shipments and handle all customs clearance." },
      { icon: "📦", title: "Cargo Securing",      desc: "Every shipment is professionally secured and packed. Our trained drivers and logistics staff guarantee your cargo arrives safely." },
      { icon: "🗺️", title: "Germany Network",     desc: "From Wörth am Rhein we serve a dense route network across all 16 federal states. Fixed departure times, plannable transit times and transparent tracking." },
    ],
    filter_title: "Filter photos by category",
    photo_count:  (n) => `${n} photos`,
    cta_title: "Curious to learn more?",
    cta_desc:  "Contact us for a personal consultation or request a no-obligation quote directly.",
    cta_btn1:  "Request a quote",
    cta_btn2:  "Get in touch",
  },
};

function GalleryPage({ setPage, lang = "de" }) {
  const [active, setActive]     = useState(0);
  const [lightbox, setLightbox] = useState(null);

  const isDE    = lang !== "en";
  const filters = isDE ? FILTERS_DE : FILTERS_EN;
  const t       = CONTENT[lang] || CONTENT.de;

  const filtered = active === 0
    ? PHOTOS
    : PHOTOS.filter(p => {
        const label = isDE ? p.label : (LABEL_MAP[p.label] || p.label);
        return label === filters[active];
      });

  return (
    <>
      <PageHeader title={t.ph.title} desc={t.ph.desc} setPage={setPage} lang={lang} page="gallery" />

      <div className="gallery-page-bg">
        <div className="gallery-orb gallery-orb-1" />
        <div className="gallery-orb gallery-orb-2" />
        <div className="gallery-orb gallery-orb-3" />
        <div className="gallery-grid-bg" />
        <div className="gallery-scan-line" />
      </div>
      <Particles />

      {/* ── INTRO ── */}
      <section className="section gallery-intro-section">
        <div className="section-inner">
          <div className="gallery-intro-wrap">
            <div className="gallery-intro-text">
              <div className="section-eyebrow">{t.intro_eyebrow}</div>
              <h2 className="gallery-intro-title">{t.intro_title}</h2>
              <p className="gallery-intro-desc">{t.intro_desc}</p>
            </div>
            <div className="gallery-intro-stats">
              {t.stats.map((s, i) => (
                <div className="gallery-stat" key={i}>
                  <span className="gallery-stat-num">{s.num}</span>
                  <span className="gallery-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORY INFO CARDS ── */}
      <section className="section section-dark gallery-cats-section">
        <div className="section-inner">
          <div className="gallery-cats-grid">
            {t.cats.map((c, i) => (
              <div className="gallery-cat-card" key={i}>
                <div className="gallery-cat-icon">{c.icon}</div>
                <h4 className="gallery-cat-title">{c.title}</h4>
                <p className="gallery-cat-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTOS ── */}
      <section className="section gallery-section">
        <div className="section-inner">

          <div className="gallery-filter-header">
            <span className="gallery-filter-title">{t.filter_title}</span>
            <span className="gallery-photo-count">{t.photo_count(filtered.length)}</span>
          </div>

          <div className="gallery-filters">
            {filters.map((f, i) => (
              <button
                key={i}
                className={`gallery-filter-btn${active === i ? " active" : ""}`}
                onClick={() => setActive(i)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filtered.map((p, i) => (
              <div className="gallery-item" key={i} onClick={() => setLightbox(p.src)}>
                <img src={p.src} alt={p.label} className="gallery-img" />
                <div className="gallery-overlay">
                  <span className="gallery-zoom">&#x2B;</span>
                </div>
                <div className="gallery-label">{isDE ? p.label : (LABEL_MAP[p.label] || p.label)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2>{t.cta_title}</h2>
          <p>{t.cta_desc}</p>
          <div className="hero-buttons" style={{ justifyContent: "center" }}>
            <button className="btn-primary" onClick={() => { setPage("contact"); window.scrollTo(0, 0); }}>
              {t.cta_btn1}
            </button>
            <button className="btn-secondary" onClick={() => { setPage("contact"); window.scrollTo(0, 0); }}>
              {t.cta_btn2}
            </button>
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div className="gallery-lightbox" onClick={() => setLightbox(null)}>
          <button className="gallery-lb-close" onClick={() => setLightbox(null)}>✕</button>
          <img src={lightbox} alt="" className="gallery-lb-img" onClick={e => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}

export default GalleryPage;
