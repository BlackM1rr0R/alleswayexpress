import PageHeader from "../components/PageHeader";
import { Particles, CountUp, useReveal } from "../utils/animations";
import "../styles/Nachhaltigkeit.css";

const CONTENT = {
  de: {
    ph: { title: "Nachhaltigkeit", desc: "Verantwortungsvolle Logistik für eine lebenswerte Zukunft" },
    eyebrow: "Logistik mit Verantwortung",
    title: "Grüner Transport — unsere Verpflichtung",
    desc: "Allesway Express übernimmt Verantwortung für die Umwelt. Wir investieren aktiv in nachhaltige Technologien, optimieren Routen und kompensieren unsere CO₂-Emissionen — für eine lebenswerte Zukunft.",
    stats: [
      { num: "30%",  label: "Emissionsreduktion bis 2027" },
      { num: "100%", label: "CO₂-kompensiert seit 2025" },
      { num: "500+", label: "Gepflanzte Bäume" },
      { num: "20%",  label: "Weniger Leerfahrten durch KI" },
    ],
    measures_title: "Unsere Maßnahmen",
    measures: [
      { icon: "🌱", title: "CO₂-Kompensation",      desc: "Jede Sendung wird CO₂-kompensiert. Wir investieren in zertifizierte Aufforstungsprojekte in Deutschland und Europa." },
      { icon: "⚡", title: "Elektro-Flotte",         desc: "Bis 2027 stellen wir 30% unserer Sprinter-Flotte auf Elektroantrieb um. Erste E-Sprinter bereits im Einsatz." },
      { icon: "🧠", title: "KI-Routenoptimierung",   desc: "Unsere KI-basierte Software reduziert Leerfahrten um bis zu 20% und spart jährlich tausende Liter Kraftstoff." },
      { icon: "♻️", title: "Papierloses Büro",       desc: "Vollständig digitale Dokumentation, digitale Lieferscheine und elektronische Rechnungen — kein Papier mehr." },
      { icon: "🚂", title: "Schienentransport",      desc: "Wir fördern den Schienentransport als klimafreundliche Alternative zum LKW — 75% weniger CO₂ pro Tonne-km." },
      { icon: "🔋", title: "Erneuerbare Energie",    desc: "Unser Logistikzentrum in Wörth wird zu 100% mit Ökostrom betrieben — Photovoltaik auf dem Dach." },
    ],
    goals_title: "Unsere Klimaziele bis 2030",
    goals: [
      { year: "2025", label: "CO₂-neutral",          done: true },
      { year: "2026", label: "50 E-Fahrzeuge",        done: false },
      { year: "2027", label: "30% Elektroflotte",     done: false },
      { year: "2028", label: "ISO 14001 Zertifikat",  done: false },
      { year: "2030", label: "Net Zero",               done: false },
    ],
    certs_title: "Zertifikate & Qualität",
    certs: [
      { title: "ISO 9001",                  desc: "Qualitätsmanagement" },
      { title: "ADR",                        desc: "Gefahrguttransport" },
      { title: "DSGVO",                      desc: "Datenschutz" },
      { title: "CO₂-neutral zertifiziert",  desc: "seit 2025" },
    ],
    cta_title: "Gemeinsam nachhaltiger werden",
    cta_desc:  "Sprechen Sie uns an — wir beraten Sie gerne zu unseren nachhaltigen Transportlösungen.",
    cta_btn:   "Kontakt aufnehmen",
  },
  en: {
    ph: { title: "Sustainability", desc: "Responsible logistics for a liveable future" },
    eyebrow: "Logistics with responsibility",
    title: "Green transport — our commitment",
    desc: "Allesway Express takes responsibility for the environment. We actively invest in sustainable technologies, optimise routes and offset our CO₂ emissions — for a liveable future.",
    stats: [
      { num: "30%",  label: "Emission reduction by 2027" },
      { num: "100%", label: "CO₂-offset since 2025" },
      { num: "500+", label: "Trees planted" },
      { num: "20%",  label: "Fewer empty runs via AI" },
    ],
    measures_title: "Our measures",
    measures: [
      { icon: "🌱", title: "CO₂ Offsetting",          desc: "Every shipment is CO₂-offset. We invest in certified reforestation projects in Germany and Europe." },
      { icon: "⚡", title: "Electric Fleet",           desc: "By 2027 we will convert 30% of our Sprinter fleet to electric drives. First e-Sprinters already in use." },
      { icon: "🧠", title: "AI Route Optimisation",   desc: "Our AI-based software reduces empty runs by up to 20% and saves thousands of litres of fuel annually." },
      { icon: "♻️", title: "Paperless Office",         desc: "Fully digital documentation, digital delivery notes and electronic invoices — no more paper." },
      { icon: "🚂", title: "Rail Transport",           desc: "We promote rail transport as a climate-friendly alternative to road — 75% less CO₂ per tonne-km." },
      { icon: "🔋", title: "Renewable Energy",         desc: "Our logistics centre in Wörth runs on 100% green electricity — photovoltaics on the roof." },
    ],
    goals_title: "Our climate goals by 2030",
    goals: [
      { year: "2025", label: "CO₂-neutral",           done: true },
      { year: "2026", label: "50 electric vehicles",  done: false },
      { year: "2027", label: "30% electric fleet",    done: false },
      { year: "2028", label: "ISO 14001 certificate", done: false },
      { year: "2030", label: "Net Zero",               done: false },
    ],
    certs_title: "Certificates & Quality",
    certs: [
      { title: "ISO 9001",                  desc: "Quality management" },
      { title: "ADR",                        desc: "Hazardous goods transport" },
      { title: "GDPR",                       desc: "Data protection" },
      { title: "CO₂-neutral certified",     desc: "since 2025" },
    ],
    cta_title: "Become more sustainable together",
    cta_desc:  "Get in touch — we are happy to advise you on our sustainable transport solutions.",
    cta_btn:   "Contact us",
  },
};

function NachhaltigkeitPage({ setPage, lang = "de" }) {
  const t = CONTENT[lang] || CONTENT.de;

  const refHero    = useReveal();
  const refMeasures = useReveal();
  const refGoals   = useReveal();
  const refCerts   = useReveal();
  const refCta     = useReveal();

  return (
    <>
      <PageHeader title={t.ph.title} desc={t.ph.desc} setPage={setPage} lang={lang} page="nachhaltigkeit" />

      {/* Animated background */}
      <div className="nachh-page-bg">
        <div className="nachh-orb-1" />
        <div className="nachh-orb-2" />
        <div className="nachh-orb-3" />
        <div className="nachh-grid-bg" />
        <div className="nachh-scan-line" />
        <Particles />
      </div>

      {/* ── Hero intro ── */}
      <section className="nachh-section reveal-section" ref={refHero}>
        <div className="section-inner">
          <p className="nachh-eyebrow">{t.eyebrow}</p>
          <h2 className="nachh-hero-title">{t.title}</h2>
          <p className="nachh-hero-desc">{t.desc}</p>

          <div className="nachh-stats-grid">
            {t.stats.map((s, i) => (
              <div className="nachh-stat-card" key={i}>
                <span className="nachh-stat-num"><CountUp val={s.num} /></span>
                <span className="nachh-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Maßnahmen ── */}
      <section className="section-dark nachh-section reveal-section" ref={refMeasures}>
        <div className="section-inner">
          <h2 className="nachh-section-title">{t.measures_title}</h2>
          <div className="nachh-measures-grid">
            {t.measures.map((m, i) => (
              <div className="nachh-measure-card" key={i}>
                <span className="nachh-measure-icon">{m.icon}</span>
                <h3 className="nachh-measure-title">{m.title}</h3>
                <p className="nachh-measure-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Klimaziele ── */}
      <section className="nachh-section reveal-section" ref={refGoals}>
        <div className="section-inner">
          <h2 className="nachh-section-title">{t.goals_title}</h2>
          <div className="nachh-timeline">
            {t.goals.map((g, i) => (
              <div className={`nachh-timeline-item${g.done ? " done" : ""}`} key={i}>
                <div className="nachh-timeline-dot" />
                <div className="nachh-timeline-content">
                  <span className="nachh-timeline-year">{g.year}</span>
                  <span className="nachh-timeline-label">{g.label}</span>
                  {g.done && <span className="nachh-done-badge">✓</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Zertifikate ── */}
      <section className="section-dark nachh-section reveal-section" ref={refCerts}>
        <div className="section-inner">
          <h2 className="nachh-section-title">{t.certs_title}</h2>
          <div className="nachh-certs-grid">
            {t.certs.map((c, i) => (
              <div className="nachh-cert-card" key={i}>
                <span className="nachh-cert-check">✓</span>
                <h3 className="nachh-cert-title">{c.title}</h3>
                <p className="nachh-cert-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="nachh-section nachh-cta-section reveal-section" ref={refCta}>
        <div className="section-inner nachh-cta-inner">
          <h2 className="nachh-cta-title">{t.cta_title}</h2>
          <p className="nachh-cta-desc">{t.cta_desc}</p>
          <button className="nachh-cta-btn" onClick={() => setPage("contact")}>
            {t.cta_btn}
          </button>
        </div>
      </section>
    </>
  );
}

export default NachhaltigkeitPage;
