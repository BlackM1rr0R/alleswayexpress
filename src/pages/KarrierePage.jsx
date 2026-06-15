import { useReveal, Particles } from "../utils/animations";
import PageHeader from "../components/PageHeader";
import "../styles/Karriere.css";

const CONTENT = {
  de: {
    ph: {
      title: "Karriere",
      desc: "Werde Teil des Allesway Express Teams und starte deine Karriere in der Transportbranche.",
    },
    hero: {
      eyebrow: "Werde Teil unseres Teams",
      title: "Fahre mit uns in die Zukunft",
      desc: "Allesway Express wächst und sucht engagierte Fachkräfte. Faire Bezahlung, moderne Fahrzeuge, ein familiäres Team und langfristige Perspektiven warten auf dich.",
      pills: ["Faire Bezahlung", "Moderne Fahrzeuge", "Teamspirit", "Weiterbildung"],
    },
    benefits: {
      eyebrow: "Warum Allesway?",
      title: "Was wir bieten",
      cards: [
        { icon: "💰", title: "Attraktives Gehalt",     desc: "Übertarifliche Bezahlung plus Spesen, Urlaubs- und Weihnachtsgeld sowie leistungsorientierte Boni." },
        { icon: "🚛", title: "Moderne Flotte",          desc: "Neueste Mercedes-Actros und Sprinter-Fahrzeuge mit modernster Technik, Klimaanlage und Komfort-Extras." },
        { icon: "📅", title: "Planbare Arbeitszeiten",  desc: "Feste Touren, geregelte Schichtpläne und faire Urlaubsregelung — Familie und Beruf unter einen Hut." },
        { icon: "🎓", title: "Weiterbildung",           desc: "Kostenübernahme für ADR-Schein, Führerscheinerweiterung und interne Schulungsprogramme." },
        { icon: "🏠", title: "Wörth am Rhein",          desc: "Modernes Logistikzentrum in Wörth am Rhein — gute Verkehrsanbindung, Kantine und kostenlose Parkplätze." },
        { icon: "🤝", title: "Teamkultur",              desc: "Flache Hierarchien, regelmäßige Teamevents und ein offenes Ohr für Verbesserungsvorschläge." },
      ],
    },
    jobs: {
      eyebrow: "Offene Stellen",
      title: "Jetzt bewerben",
      btn: "Jetzt bewerben",
      salary_label: "Gehalt",
      req_label: "Anforderungen",
      cards: [
        {
          icon: "🚛", title: "LKW-Fahrer (m/w/d)", type: "Vollzeit", location: "Wörth am Rhein",
          requirements: ["Führerschein Klasse CE", "Fahrerkarte", "Erfahrung im Fernverkehr"],
          salary: "3.200–4.000 € / Monat",
        },
        {
          icon: "🚐", title: "Sprinter-Fahrer (m/w/d)", type: "Vollzeit/Teilzeit", location: "Regional",
          requirements: ["Führerschein Klasse B", "Gute Ortskenntnisse", "Kundenfreundlich"],
          salary: "2.400–3.000 € / Monat",
        },
        {
          icon: "📋", title: "Disponent (m/w/d)", type: "Vollzeit", location: "Wörth am Rhein",
          requirements: ["Erfahrung in der Spedition", "Gute EDV-Kenntnisse", "Organisationstalent"],
          salary: "3.000–3.800 € / Monat",
        },
        {
          icon: "📦", title: "Lagerarbeiter (m/w/d)", type: "Vollzeit", location: "Wörth am Rhein",
          requirements: ["Staplerschein von Vorteil", "Körperliche Belastbarkeit", "Teamfähigkeit"],
          salary: "2.200–2.800 € / Monat",
        },
        {
          icon: "💻", title: "Kundenberater (m/w/d)", type: "Vollzeit", location: "Wörth am Rhein",
          requirements: ["Kaufmännische Ausbildung", "Kommunikationsstärke", "Erfahrung im Kundenservice"],
          salary: "2.800–3.400 € / Monat",
        },
        {
          icon: "🔧", title: "KFZ-Mechatroniker (m/w/d)", type: "Vollzeit", location: "Wörth am Rhein",
          requirements: ["Ausbildung als KFZ-Mechatroniker", "LKW-Erfahrung von Vorteil"],
          salary: "3.000–3.600 € / Monat",
        },
      ],
    },
    process: {
      eyebrow: "Bewerbungsprozess",
      title: "In 4 Schritten zum neuen Job",
      steps: [
        { num: "01", title: "Bewerbung einreichen",   desc: "Sende uns deine Unterlagen per E-Mail oder über unser Kontaktformular." },
        { num: "02", title: "Erstkontakt",             desc: "Wir melden uns innerhalb von 48 Stunden telefonisch oder per E-Mail bei dir." },
        { num: "03", title: "Vorstellungsgespräch",    desc: "Persönliches Gespräch in unserem Büro in Wörth am Rhein — lerne das Team kennen." },
        { num: "04", title: "Willkommen im Team",      desc: "Vertragsunterzeichnung und strukturierter Onboarding-Plan für deinen Start." },
      ],
    },
    cta: {
      title: "Kein passendes Angebot?",
      desc: "Schicke uns eine Initiativbewerbung — wir sind immer auf der Suche nach Talenten.",
      btn: "Initiativbewerbung senden",
    },
  },
  en: {
    ph: {
      title: "Careers",
      desc: "Join the Allesway Express team and start your career in the transport industry.",
    },
    hero: {
      eyebrow: "Join our team",
      title: "Drive with us into the future",
      desc: "Allesway Express is growing and looking for dedicated professionals. Fair pay, modern vehicles, a family-oriented team and long-term prospects await you.",
      pills: ["Fair Pay", "Modern Vehicles", "Team Spirit", "Training"],
    },
    benefits: {
      eyebrow: "Why Allesway?",
      title: "What we offer",
      cards: [
        { icon: "💰", title: "Attractive Salary",      desc: "Above-average pay plus allowances, holiday and Christmas bonuses, and performance-based incentives." },
        { icon: "🚛", title: "Modern Fleet",            desc: "Latest Mercedes-Actros and Sprinter vehicles with cutting-edge technology, air conditioning and comfort extras." },
        { icon: "📅", title: "Predictable Hours",       desc: "Fixed routes, regulated shift schedules and fair holiday policy — balance family and career." },
        { icon: "🎓", title: "Training & Development",  desc: "Coverage of costs for ADR certificate, licence extensions and internal training programmes." },
        { icon: "🏠", title: "Wörth am Rhein",          desc: "Modern logistics centre in Wörth am Rhein — good transport links, canteen and free parking." },
        { icon: "🤝", title: "Team Culture",            desc: "Flat hierarchies, regular team events and an open ear for suggestions for improvement." },
      ],
    },
    jobs: {
      eyebrow: "Open Positions",
      title: "Apply now",
      btn: "Apply now",
      salary_label: "Salary",
      req_label: "Requirements",
      cards: [
        {
          icon: "🚛", title: "HGV Driver (m/f/d)", type: "Full-time", location: "Wörth am Rhein",
          requirements: ["Class CE driving licence", "Driver card", "Long-haul experience"],
          salary: "€3,200–4,000 / month",
        },
        {
          icon: "🚐", title: "Sprinter Driver (m/f/d)", type: "Full-time / Part-time", location: "Regional",
          requirements: ["Class B driving licence", "Good local knowledge", "Customer-friendly"],
          salary: "€2,400–3,000 / month",
        },
        {
          icon: "📋", title: "Dispatcher (m/f/d)", type: "Full-time", location: "Wörth am Rhein",
          requirements: ["Experience in freight forwarding", "Good IT skills", "Organisational talent"],
          salary: "€3,000–3,800 / month",
        },
        {
          icon: "📦", title: "Warehouse Worker (m/f/d)", type: "Full-time", location: "Wörth am Rhein",
          requirements: ["Forklift licence advantageous", "Physical fitness", "Team player"],
          salary: "€2,200–2,800 / month",
        },
        {
          icon: "💻", title: "Customer Advisor (m/f/d)", type: "Full-time", location: "Wörth am Rhein",
          requirements: ["Commercial training", "Strong communication skills", "Customer service experience"],
          salary: "€2,800–3,400 / month",
        },
        {
          icon: "🔧", title: "Automotive Mechatronics Technician (m/f/d)", type: "Full-time", location: "Wörth am Rhein",
          requirements: ["Qualification as automotive mechatronics technician", "HGV experience advantageous"],
          salary: "€3,000–3,600 / month",
        },
      ],
    },
    process: {
      eyebrow: "Application Process",
      title: "Your new job in 4 steps",
      steps: [
        { num: "01", title: "Submit application",  desc: "Send us your documents by email or via our contact form." },
        { num: "02", title: "First contact",        desc: "We will get back to you within 48 hours by phone or email." },
        { num: "03", title: "Interview",            desc: "Personal meeting at our office in Wörth am Rhein — meet the team." },
        { num: "04", title: "Welcome to the team", desc: "Contract signing and a structured onboarding plan for your start." },
      ],
    },
    cta: {
      title: "No matching position?",
      desc: "Send us an unsolicited application — we are always looking for talent.",
      btn: "Send unsolicited application",
    },
  },
};

function KarrierePage({ setPage, lang = "de" }) {
  const t = CONTENT[lang] || CONTENT.de;

  const refHero     = useReveal();
  const refBenefits = useReveal();
  const refJobs     = useReveal();
  const refProcess  = useReveal();

  return (
    <>
      <PageHeader title={t.ph.title} desc={t.ph.desc} setPage={setPage} lang={lang} page="karriere" />

      <div className="karriere-page-bg">
        <div className="karriere-orb-1" />
        <div className="karriere-orb-2" />
        <div className="karriere-orb-3" />
        <div className="karriere-grid-bg" />
        <div className="karriere-scan-line" />
      </div>
      <Particles />

      {/* ── HERO ── */}
      <section className="section karriere-hero-section reveal-section" ref={refHero}>
        <div className="section-inner">
          <div className="karriere-hero-content">
            <div className="section-eyebrow">{t.hero.eyebrow}</div>
            <h1 className="karriere-hero-title">{t.hero.title}</h1>
            <p className="karriere-hero-desc">{t.hero.desc}</p>
            <div className="karriere-pills">
              {t.hero.pills.map((pill, i) => (
                <span className="karriere-pill" key={i}>{pill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="section section-dark reveal-section" ref={refBenefits}>
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">{t.benefits.eyebrow}</div>
            <h2 className="section-title">{t.benefits.title}</h2>
          </div>
          <div className="karriere-benefits-grid">
            {t.benefits.cards.map((card, i) => (
              <div className="karriere-benefit-card" key={i}>
                <div className="karriere-benefit-icon">{card.icon}</div>
                <h3 className="karriere-benefit-title">{card.title}</h3>
                <p className="karriere-benefit-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOB LISTINGS ── */}
      <section className="section reveal-section" ref={refJobs}>
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">{t.jobs.eyebrow}</div>
            <h2 className="section-title">{t.jobs.title}</h2>
          </div>
          <div className="karriere-jobs-grid">
            {t.jobs.cards.map((job, i) => (
              <div className="karriere-job-card" key={i}>
                <div className="karriere-job-header">
                  <span className="karriere-job-icon">{job.icon}</span>
                  <div className="karriere-job-meta">
                    <h3 className="karriere-job-title">{job.title}</h3>
                    <div className="karriere-job-badges">
                      <span className="karriere-job-type">{job.type}</span>
                      <span className="karriere-job-location">📍 {job.location}</span>
                    </div>
                  </div>
                </div>
                <div className="karriere-job-reqs">
                  <div className="karriere-job-req-label">{t.jobs.req_label}</div>
                  <ul>
                    {job.requirements.map((req, ri) => (
                      <li key={ri}><span className="karriere-req-check">✓</span> {req}</li>
                    ))}
                  </ul>
                </div>
                <div className="karriere-job-footer">
                  <div className="karriere-job-salary">
                    <span className="karriere-salary-label">{t.jobs.salary_label}</span>
                    <span className="karriere-salary-val">{job.salary}</span>
                  </div>
                  <button className="karriere-apply-btn" onClick={() => setPage("contact")}>
                    {t.jobs.btn}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLICATION PROCESS ── */}
      <section className="section section-dark reveal-section" ref={refProcess}>
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">{t.process.eyebrow}</div>
            <h2 className="section-title">{t.process.title}</h2>
          </div>
          <div className="karriere-steps-grid">
            {t.process.steps.map((step, i) => (
              <div className="karriere-step-card" key={i}>
                <div className="karriere-step-num">{step.num}</div>
                <h4 className="karriere-step-title">{step.title}</h4>
                <p className="karriere-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section karriere-cta">
        <div className="cta-inner">
          <h2>{t.cta.title}</h2>
          <p>{t.cta.desc}</p>
          <button className="btn-primary" onClick={() => setPage("contact")}>
            {t.cta.btn}
          </button>
        </div>
      </section>
    </>
  );
}

export default KarrierePage;
