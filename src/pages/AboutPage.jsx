import I from "../components/Icons";
import T from "../i18n";
import PageHeader from "../components/PageHeader";
import StatsBar from "../components/StatsBar";
import aboutImg from "../assets/kamyon5.jpeg";
import mercedesImg from "../assets/mercedes.jpeg";
import dhlImg from "../assets/dhl.jpeg";
import ihkImg from "../assets/ihk.jpeg";
import "../styles/About.css";

const BIZ_IMAGES = {
  "Mercedes-Benz": mercedesImg,
  "DHL": dhlImg,
  "IHK Karlsruhe": ihkImg,
};

const VALUE_ICONS = [
  <I.Shield s={28} />, <I.Zap s={28} />, <I.Users s={28} />,
  <I.Star s={28} c="var(--accent)" />,
];

function AboutPage({ setPage, lang = "de" }) {
  const ta = (T[lang] || T.de).about;
  const ph = (T[lang] || T.de).ph.about;

  return (
    <>
      <PageHeader title={ph.title} desc={ph.desc} setPage={setPage} lang={lang} page="about" />

      {/* ══ ABOUT INTRO ══ */}
      <section className="section">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-image">
              <img src={aboutImg} alt="Allesway Express Fuhrpark" />
            </div>
            <div className="about-content">
              <h2>{ta.intro_h2}</h2>
              <p>{ta.intro_p1}</p>
              <p>{ta.intro_p2}</p>
              <div className="about-features">
                {ta.features.map((f, i) => (
                  <div className="about-feature" key={i}>
                    <div className="about-feature-icon"><I.Check s={12} /></div>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <button className="btn-primary" onClick={() => { setPage("contact"); window.scrollTo(0, 0); }}>
                {ta.contact_btn} <I.ArrowRight s={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <StatsBar lang={lang} />

      {/* ══ TIMELINE ══ */}
      <section className="section section-dark">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">{ta.timeline_eyebrow}</div>
            <h2 className="section-title">{ta.timeline_title}</h2>
          </div>
          <div className="about-timeline">
            {ta.timeline.map((t, i) => (
              <div className="timeline-card" key={i}>
                <div className="timeline-year">{t.year}</div>
                <h4>{t.title}</h4>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TEAM ══ */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">{ta.team_eyebrow}</div>
            <h2 className="section-title">{ta.team_title}</h2>
            <p className="section-subtitle">{ta.team_subtitle}</p>
          </div>
          <div className="team-grid">
            {ta.team.map((m, i) => (
              <div className="team-card" key={i}>
                <div className={`team-avatar team-avatar--${m.color}`}>{m.initials}</div>
                <h4 className="team-name">{m.name}</h4>
                <div className="team-role">{m.role}</div>
                <p className="team-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CERTIFICATES ══ */}
      <section className="section section-dark">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">{ta.cert_eyebrow}</div>
            <h2 className="section-title">{ta.cert_title}</h2>
          </div>
          <div className="certs-grid">
            {ta.certs.map((c, i) => (
              <div className="cert-card" key={i}>
                <div className="cert-icon"><I.Shield s={28} /></div>
                <div className="cert-label">{c.label}</div>
                <div className="cert-sub">{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ VALUES ══ */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">{ta.values_eyebrow}</div>
            <h2 className="section-title">{ta.values_title}</h2>
          </div>
          <div className="features-grid">
            {ta.values.map((v, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-icon-wrap">{VALUE_ICONS[i]}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MAP ══ */}
      <section className="section section-dark">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">{ta.map_eyebrow}</div>
            <h2 className="section-title">{ta.map_title}</h2>
            <p className="section-subtitle">{ta.map_subtitle}</p>
          </div>
          <div className="map-wrap">
            <iframe
              title="Allesway Express Standort"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.5!2d8.2577!3d49.0487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797cc3e3ddd1c1d%3A0x7c3e3ddd1c1d!2sSchulplatz+2%2C+76744+W%C3%B6rth+am+Rhein!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
              width="100%" height="100%"
              style={{ border: 0, borderRadius: "20px" }}
              allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ══ MISSION & VISION ══ */}
      <section className="section mv-section">
        <div className="section-inner">
          <div className="section-eyebrow" style={{ textAlign: "center", marginBottom: 24 }}>{ta.mv_eyebrow}</div>
          <div className="mv-grid">
            <div className="mv-card mv-card--mission">
              <div className="mv-label">{ta.mv_mission_label}</div>
              <p className="mv-text">{ta.mv_mission}</p>
            </div>
            <div className="mv-card mv-card--vision">
              <div className="mv-label">{ta.mv_vision_label}</div>
              <p className="mv-text">{ta.mv_vision}</p>
            </div>
          </div>
          <div className="mv-pillars">
            {ta.mv_pillars.map((p, i) => (
              <div className="mv-pillar" key={i}>
                <span className="mv-pillar-num">{p.num}</span>
                <span className="mv-pillar-label">{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ AWARDS ══ */}
      <section className="section section-dark">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">{ta.awards_eyebrow}</div>
            <h2 className="section-title">{ta.awards_title}</h2>
            <p className="section-subtitle">{ta.awards_subtitle}</p>
          </div>
          <div className="awards-grid">
            {ta.awards.map((aw, i) => (
              <div className="award-card" key={i}>
                <div className="award-year">{aw.year}</div>
                <I.Star s={24} c="var(--accent)" />
                <h4 className="award-title">{aw.title}</h4>
                <div className="award-org">{aw.org}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SUSTAINABILITY ══ */}
      <section className="section sustain-section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">{ta.sustain_eyebrow}</div>
            <h2 className="section-title">{ta.sustain_title}</h2>
            <p className="section-subtitle">{ta.sustain_subtitle}</p>
          </div>
          <div className="sustain-grid">
            {ta.sustain_cards.map((card, i) => (
              <div className="sustain-card" key={i}>
                <div className="sustain-icon">{card.icon}</div>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ NUMBERS / FACTS ══ */}
      <section className="section section-dark numbers-section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">{ta.numbers_eyebrow}</div>
            <h2 className="section-title">{ta.numbers_title}</h2>
          </div>
          <div className="numbers-grid">
            {ta.numbers.map((n, i) => (
              <div className="number-card" key={i}>
                <div className="number-num">{n.num}</div>
                <div className="number-label">{n.label}</div>
                <div className="number-desc">{n.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BUSINESS PARTNERS ══ */}
      <section className="section biz-section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">{ta.biz_eyebrow}</div>
            <h2 className="section-title">{ta.biz_title}</h2>
            <p className="section-subtitle">{ta.biz_subtitle}</p>
          </div>
          <div className="biz-grid">
            {ta.biz_partners.map((p, i) => (
              <div className="biz-card" key={i}>
                <div className="biz-icon">
                  {BIZ_IMAGES[p.name]
                    ? <img src={BIZ_IMAGES[p.name]} alt={p.name} className="biz-partner-img" />
                    : <span>{p.icon}</span>}
                </div>
                <div className="biz-name">{p.name}</div>
                <div className="biz-role">{p.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2>{ta.cta_title}</h2>
          <p>{ta.cta_desc}</p>
          <div className="hero-buttons" style={{ justifyContent: "center" }}>
            <button className="btn-primary" onClick={() => { setPage("contact"); window.scrollTo(0, 0); }}>
              <I.Phone s={18} /> {ta.cta_btn1}
            </button>
            <button className="btn-secondary" onClick={() => { setPage("services"); window.scrollTo(0, 0); }}>
              <I.Package s={18} /> {ta.cta_btn2}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
