import { useState } from "react";
import I from "../components/Icons";
import T from "../i18n";
import PageHeader from "../components/PageHeader";
import kamyon5 from "../assets/kamyon5.jpeg";
import kamyon3 from "../assets/kamyon3.jpeg";
import kamyon6 from "../assets/kamyon6.jpeg";
import kamyon4 from "../assets/kamyon4.jpeg";
import kamyon9 from "../assets/kamyon9.jpeg";
import kamyon1 from "../assets/kamyon1.jpeg";
import full2 from "../assets/full2.jpeg";
import full3 from "../assets/full3.jpeg";
import full4 from "../assets/full4.jpeg";
import full7 from "../assets/full7.jpeg";
import "../styles/Services.css";

const STATIC = [
  { img: kamyon5, icon: <I.Zap s={22} />     },
  { img: kamyon3, icon: <I.Truck s={22} />   },
  { img: kamyon6, icon: <I.Package s={22} /> },
  { img: kamyon4, icon: <I.Shield s={22} />  },
  { img: kamyon9, icon: <I.Globe s={22} />   },
  { img: kamyon1, icon: <I.Users s={22} />   },
];

const QUICK_ICONS = [
  <I.Zap s={22} />, <I.Truck s={22} />, <I.Package s={22} />,
  <I.Shield s={22} />, <I.Globe s={22} />, <I.Users s={22} />,
];

function ServicesPage({ setPage, lang = "de" }) {
  const t  = (T[lang] || T.de).services;
  const ph = (T[lang] || T.de).ph.services;
  const [active, setActive] = useState(0);

  const svcs   = t.tabs_services;
  const s      = svcs[active];
  const stat   = STATIC[active];
  const isEven = active % 2 === 0;

  return (
    <>
      <PageHeader title={ph.title} desc={ph.desc} setPage={setPage} lang={lang} page="services" />

      {/* ══ TAB NAVIGATION ══ */}
      <div className="services-tabs-outer">
        <div className="services-tabs-inner">
          {svcs.map((svc, i) => (
            <button
              key={i}
              className={`svc-tab${active === i ? " active" : ""}`}
              onClick={() => setActive(i)}
            >
              <span className="svc-tab-icon">{STATIC[i].icon}</span>
              <span className="svc-tab-label">{svc.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ══ SERVICE DETAIL ══ */}
      <section className="section service-detail-section">
        <div className="section-inner">
          <div className={`service-detail${isEven ? "" : " service-detail--reverse"}`} key={active}>
            <div className="service-detail-img-wrap">
              <img src={stat.img} alt={s.title} className="service-detail-img" />
              <div className="service-detail-img-overlay" />
              <div className="service-detail-highlight">
                <span className="sdh-num">{s.hl.num}</span>
                <span className="sdh-label">{s.hl.label}</span>
              </div>
            </div>

            <div className="service-detail-content">
              <div className="sdc-icon">{stat.icon}</div>
              <div className="sdc-tagline">{s.tagline}</div>
              <h2 className="sdc-title">{s.title}</h2>
              <p className="sdc-desc">{s.desc}</p>

              <div className="sdc-features">
                {s.features.map((f, fi) => (
                  <div className="sdc-feature" key={fi}>
                    <div className="sdc-feature-check"><I.Check s={13} /></div>
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="sdc-actions">
                <button className="btn-primary" onClick={() => { setPage("contact"); window.scrollTo(0, 0); }}>
                  {t.btn_quote} <I.ArrowRight s={18} />
                </button>
                <a href="tel:+491741809999" className="sdc-phone-btn">
                  <I.Phone s={18} /> {t.btn_phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ALL SERVICES QUICK NAV ══ */}
      <section className="section section-dark">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">{t.overview_eyebrow}</div>
            <h2 className="section-title">{t.overview_title}</h2>
          </div>
          <div className="svc-quick-grid">
            {svcs.map((svc, i) => (
              <div
                key={i}
                className={`svc-quick-card${active === i ? " active" : ""}`}
                onClick={() => { setActive(i); window.scrollTo({ top: 320, behavior: "smooth" }); }}
              >
                <div className="svc-quick-icon">{QUICK_ICONS[i]}</div>
                <h4>{svc.title}</h4>
                <p>{svc.tagline}</p>
                <div className="svc-quick-arr"><I.ArrowRight s={16} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FLEET SPECS ══ */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">{t.fleet_eyebrow}</div>
            <h2 className="section-title">{t.fleet_title}</h2>
            <p className="section-subtitle">{t.fleet_subtitle}</p>
          </div>
          <div className="fleet-specs-grid">
            {t.fleet_cards.map((fc, i) => (
              <div className={`fleet-spec-card fleet-spec-card--${fc.color}`} key={i}>
                <div className="fsc-header">
                  <span className="fsc-icon">{fc.icon}</span>
                  <div>
                    <div className="fsc-name">{fc.name}</div>
                    <div className="fsc-range">{fc.range}</div>
                  </div>
                </div>
                <div className="fsc-stats">
                  <div className="fsc-stat">
                    <span className="fsc-stat-val">{fc.cap}</span>
                    <span className="fsc-stat-label">{lang === "en" ? "Payload" : "Nutzlast"}</span>
                  </div>
                  <div className="fsc-stat-divider" />
                  <div className="fsc-stat">
                    <span className="fsc-stat-val">{fc.vol}</span>
                    <span className="fsc-stat-label">{lang === "en" ? "Cargo space" : "Laderaum"}</span>
                  </div>
                </div>
                <ul className="fsc-specs">
                  {fc.specs.map((s, si) => (
                    <li key={si}>
                      <I.Check s={13} /> {s}
                    </li>
                  ))}
                </ul>
                <button className="fsc-btn" onClick={() => { setPage("contact"); window.scrollTo(0, 0); }}>
                  {t.btn_quote} <I.ArrowRight s={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="full-banner"><img src={full7} alt="" className="full-banner-img" /><div className="full-banner-fade" /></div>

      {/* ══ HOW IT WORKS ══ */}
      <section className="section section-dark svc-process-section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">{t.process_eyebrow}</div>
            <h2 className="section-title">{t.process_title}</h2>
          </div>
          <div className="svc-process-grid">
            {t.process_steps_svc.map((step, i) => (
              <div className="svc-process-step" key={i}>
                <div className="svc-process-num">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
                {i < t.process_steps_svc.length - 1 && <div className="svc-process-arrow"><I.ArrowRight s={20} /></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ VEHICLE COMPARISON TABLE ══ */}
      <section className="section svc-compare-section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">{t.compare_eyebrow}</div>
            <h2 className="section-title">{t.compare_title}</h2>
          </div>
          <div className="svc-compare-wrap">
            <table className="svc-compare-table">
              <thead>
                <tr>
                  {t.compare_heads.map((h, i) => (
                    <th key={i} className={i === 0 ? "" : `svc-th-v${i}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.compare_rows.map((row, ri) => (
                  <tr key={ri}>
                    <td className="svc-td-label">{row.label}</td>
                    {row.vals.map((v, vi) => (
                      <td key={vi} className={`svc-td-val${vi === 1 ? " svc-td-popular" : ""}`}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="full-banner"><img src={full2} alt="" className="full-banner-img" /><div className="full-banner-fade" /></div>

      {/* ══ COVERAGE ZONES ══ */}
      <section className="section section-dark svc-zones-section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">{t.zones_eyebrow}</div>
            <h2 className="section-title">{t.zones_title}</h2>
            <p className="section-subtitle">{t.zones_subtitle}</p>
          </div>
          <div className="svc-zones-grid">
            {t.zones.map((z, i) => (
              <div className="svc-zone-card" key={i}>
                <div className="svc-zone-icon">{z.icon}</div>
                <h4 className="svc-zone-region">{z.region}</h4>
                <p className="svc-zone-cities">{z.cities}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="full-banner"><img src={full3} alt="" className="full-banner-img" /><div className="full-banner-fade" /></div>

      {/* ══ SERVICE TESTIMONIALS ══ */}
      <section className="section svc-testi-section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">{t.svc_testi_eyebrow}</div>
            <h2 className="section-title">{t.svc_testi_title}</h2>
          </div>
          <div className="svc-testi-grid">
            {t.svc_testis.map((tm, i) => (
              <div className="svc-testi-card" key={i}>
                <div className="svc-testi-stars">
                  {[...Array(5)].map((_, si) => <I.Star key={si} s={15} c="var(--accent)" />)}
                </div>
                <p className="svc-testi-text">„{tm.text}"</p>
                <div className="svc-testi-author">
                  <div className="svc-testi-avatar">{tm.initials}</div>
                  <div>
                    <div className="svc-testi-name">{tm.name}</div>
                    <div className="svc-testi-role">{tm.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="full-banner"><img src={full4} alt="" className="full-banner-img" /><div className="full-banner-fade" /></div>

      {/* ══ CTA ══ */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2>{t.cta_title}</h2>
          <p>{t.cta_desc}</p>
          <div className="hero-buttons" style={{ justifyContent: "center" }}>
            <button className="btn-primary" onClick={() => { setPage("contact"); window.scrollTo(0, 0); }}>
              <I.Phone s={18} /> {t.btn_quote}
            </button>
            <button className="btn-secondary" onClick={() => { setPage("cargo"); window.scrollTo(0, 0); }}>
              <I.Search s={18} /> {t.cta_btn2}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
