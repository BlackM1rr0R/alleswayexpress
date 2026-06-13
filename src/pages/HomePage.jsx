import { useState } from "react";
import I from "../components/Icons";
import T from "../i18n";
import StatsBar from "../components/StatsBar";
import bgHero from "../assets/kamyon.jpeg";
import kamyon5 from "../assets/kamyon5.jpeg";
import kamyon7 from "../assets/kamyon7.jpeg";
import kamyon6 from "../assets/kamyon6.jpeg";
import kamyon3 from "../assets/kamyon3.jpeg";
import kamyon2 from "../assets/kamyon2.jpeg";
import kamyon4 from "../assets/kamyon4.jpeg";
import kamyon9 from "../assets/kamyon9.jpeg";
import kamyon1 from "../assets/kamyon1.jpeg";
import "../styles/HomePage.css";

const VEHICLES = [
  { name: "Sprinter", base: 49,  rate: 0.75, icon: "🚐" },
  { name: "LKW 7,5t", base: 89,  rate: 1.35, icon: "🚛" },
  { name: "LKW 40t",  base: 149, rate: 2.1,  icon: "🚚" },
];

const SVC_ICONS = [
  <I.Zap s={26} />, <I.Truck s={26} />, <I.Package s={26} />,
  <I.Shield s={26} />, <I.Globe s={26} />, <I.Clock s={26} />,
];
const WHY_ICONS = [
  <I.Truck s={28} />, <I.Shield s={28} />, <I.Clock s={28} />, <I.Users s={28} />,
];
const PROCESS_ICONS = [<I.Phone s={30} />, <I.Truck s={30} />, <I.Check s={30} />];
const PROCESS_COLORS = ["gold", "blue", "green"];

function HomePage({ setPage, lang = "de" }) {
  const t = (T[lang] || T.de).home;
  const [calcVehicle, setCalcVehicle] = useState(0);
  const [calcKm, setCalcKm] = useState(150);

  const v = VEHICLES[calcVehicle];
  const price = Math.round(v.base + calcKm * v.rate);

  return (
    <>
      {/* ══════════════ HERO ══════════════ */}
      <section className="hero">
        <div className="hero-bg">
          <img src={bgHero} alt="" className="hero-bg-img" />
          <div className="hero-bg-overlay" />
          <div className="hero-grid" />
        </div>

        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <div className="hero-badge-dot" />
              {t.badge}
            </div>
            <h1 className="hero-title">
              {t.title1}<span className="hl">{t.title_hl}</span>{t.title2}
            </h1>
            <p className="hero-desc">{t.desc}</p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => { setPage("contact"); window.scrollTo(0, 0); }}>
                {t.btn_quote} <I.ArrowRight s={18} />
              </button>
              <button className="btn-secondary" onClick={() => { setPage("cargo"); window.scrollTo(0, 0); }}>
                <I.Search s={18} /> {t.btn_track}
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <div className="calc-header">
                <div className="calc-header-icon"><I.Package s={18} /></div>
                <span>{t.calc_title}</span>
                <div className="calc-header-badge">{t.calc_free}</div>
              </div>

              <div className="calc-vehicle-select">
                {VEHICLES.map((veh, i) => (
                  <button
                    key={i}
                    className={`calc-vehicle-btn${calcVehicle === i ? " active" : ""}`}
                    onClick={() => setCalcVehicle(i)}
                  >
                    <span className="calc-veh-icon">{veh.icon}</span>
                    {veh.name}
                  </button>
                ))}
              </div>

              <div className="calc-km-wrap">
                <div className="calc-km-header">
                  <label>{t.calc_distance}</label>
                  <span className="calc-km-val">{calcKm} km</span>
                </div>
                <input
                  type="range" min={10} max={1000} step={10}
                  value={calcKm}
                  onChange={e => setCalcKm(Number(e.target.value))}
                  className="calc-slider"
                />
                <div className="calc-km-labels"><span>10 km</span><span>1.000 km</span></div>
              </div>

              <div className="calc-result">
                <div className="calc-result-left">
                  <div className="calc-result-label">{t.calc_est}</div>
                  <div className="calc-result-price">ab {price.toLocaleString("de-DE")} €</div>
                  <div className="calc-result-note">{t.calc_note}</div>
                </div>
                <div className="calc-result-badge">
                  <I.Shield s={20} />
                  <span>{t.calc_insured}</span>
                </div>
              </div>

              <button className="calc-cta-btn" onClick={() => { setPage("contact"); window.scrollTo(0, 0); }}>
                {t.calc_cta} <I.ArrowRight s={16} />
              </button>
            </div>

            <div className="hero-float float-1">
              <div className="float-icon green"><I.Check s={18} /></div>
              <div className="float-text">
                <h4>4.280 Sendungen</h4>
                <p>{lang === "en" ? "Delivered this month" : "Diesen Monat zugestellt"}</p>
              </div>
            </div>
            <div className="hero-float float-2">
              <div className="float-icon blue"><I.Zap s={18} /></div>
              <div className="float-text">
                <h4>3,2 Stunden</h4>
                <p>{lang === "en" ? "Avg. regional delivery" : "Ø Lieferzeit regional"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ STATS ══════════════ */}
      <StatsBar lang={lang} />

      {/* ══════════════ HOW IT WORKS ══════════════ */}
      <section className="section process-section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">{t.process_eyebrow}</div>
            <h2 className="section-title">{t.process_title}</h2>
            <p className="section-subtitle">{t.process_subtitle}</p>
          </div>
          <div className="process-grid">
            {t.process_steps.map((p, i) => (
              <div className="process-card" key={i}>
                {i < 2 && <div className="process-connector" />}
                <div className={`process-num process-num--${PROCESS_COLORS[i]}`}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className={`process-icon-wrap process-icon-wrap--${PROCESS_COLORS[i]}`}>
                  {PROCESS_ICONS[i]}
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ FLEET GALLERY ══════════════ */}
      <section className="section fleet-section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">{t.fleet_eyebrow}</div>
            <h2 className="section-title">{t.fleet_title}</h2>
            <p className="section-subtitle">{t.fleet_subtitle}</p>
          </div>
          <div className="fleet-grid">
            <div className="fleet-card fleet-large">
              <img src={kamyon7} alt="Mercedes Atego LKW" />
              <div className="fleet-card-label"><span>{t.fleet_labels[0]}</span></div>
            </div>
            <div className="fleet-side">
              <div className="fleet-card">
                <img src={kamyon6} alt="Mercedes Sprinter" />
                <div className="fleet-card-label"><span>{t.fleet_labels[1]}</span></div>
              </div>
              <div className="fleet-card">
                <img src={kamyon3} alt="Mercedes Actros" />
                <div className="fleet-card-label"><span>{t.fleet_labels[2]}</span></div>
              </div>
            </div>
          </div>
          <div className="fleet-row2">
            <div className="fleet-card">
              <img src={kamyon2} alt="Sprinter Fuhrpark" />
              <div className="fleet-card-label"><span>{t.fleet_labels[3]}</span></div>
            </div>
            <div className="fleet-card">
              <img src={kamyon4} alt="Atego Fuhrpark" />
              <div className="fleet-card-label"><span>{t.fleet_labels[4]}</span></div>
            </div>
            <div className="fleet-card">
              <img src={kamyon1} alt="Fernverkehr" />
              <div className="fleet-card-label"><span>{t.fleet_labels[5]}</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ SERVICES ══════════════ */}
      <section className="section section-dark">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">{t.svc_eyebrow}</div>
            <h2 className="section-title">{t.svc_title}</h2>
            <p className="section-subtitle">{t.svc_subtitle}</p>
          </div>
          <div className="services-grid">
            {t.services.map((s, i) => (
              <div className="service-card" key={i}>
                <div className="service-icon">{SVC_ICONS[i]}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <button className="service-link" onClick={() => { setPage("services"); window.scrollTo(0, 0); }}>
                  {t.svc_more} <I.ArrowRight s={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ WHY US ══════════════ */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">{t.why_eyebrow}</div>
            <h2 className="section-title">{t.why_title}</h2>
            <p className="section-subtitle">{t.why_subtitle}</p>
          </div>
          <div className="features-grid">
            {t.why_cards.map((f, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-icon-wrap">{WHY_ICONS[i]}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ COVERAGE ══════════════ */}
      <section className="worldmap-section">
        <img src={kamyon9} alt="" className="worldmap-bg" />
        <div className="worldmap-overlay" />
        <div className="worldmap-content">
          <div className="section-eyebrow" style={{ color: "var(--accent)" }}>{t.map_eyebrow}</div>
          <h2 className="worldmap-title">{t.map_title}</h2>
          <p className="worldmap-desc">{t.map_desc}</p>
          <div className="worldmap-stats">
            {t.map_stats.map((s, i) => (
              <div className="worldmap-stat" key={i}>
                <span className="worldmap-stat-num">{s.num}</span>
                <span className="worldmap-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ PARTNERS ══════════════ */}
      <section className="section partners-section">
        <div className="section-inner">
          <p className="partners-label">{t.partners_label}</p>
          <div className="partners-track">
            {["Bauhaus AG", "RheinCargo GmbH", "Metro Logistik", "BASF SE", "Daimler Truck", "Lidl Stiftung", "DB Schenker", "Rhenus Group"].map((p, i) => (
              <div className="partner-item" key={i}>{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ TESTIMONIALS ══════════════ */}
      <section className="section section-dark">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">{t.testi_eyebrow}</div>
            <h2 className="section-title">{t.testi_title}</h2>
            <p className="section-subtitle">{t.testi_subtitle}</p>
          </div>
          <div className="testimonials-grid">
            {t.testimonials.map((tm, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, si) => <I.Star key={si} s={16} c="var(--accent)" />)}
                </div>
                <p className="testimonial-text">„{tm.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{tm.initials}</div>
                  <div>
                    <div className="testimonial-name">{tm.name}</div>
                    <div className="testimonial-role">{tm.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ INDUSTRIES ══════════════ */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">{t.industries_eyebrow}</div>
            <h2 className="section-title">{t.industries_title}</h2>
            <p className="section-subtitle">{t.industries_subtitle}</p>
          </div>
          <div className="industries-grid">
            {t.industries.map((ind, i) => (
              <div className="industry-card" key={i}>
                <div className="industry-icon">{ind.icon}</div>
                <h3>{ind.title}</h3>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ FAQ ══════════════ */}
      <section className="section section-dark home-faq-section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">{t.home_faq_eyebrow}</div>
            <h2 className="section-title">{t.home_faq_title}</h2>
            <p className="section-subtitle">{t.home_faq_subtitle}</p>
          </div>
          <div className="home-faq-grid">
            {t.home_faqs.map((f, i) => (
              <div className="home-faq-card" key={i}>
                <div className="home-faq-q">
                  <div className="home-faq-num">{String(i + 1).padStart(2, "0")}</div>
                  <h4>{f.q}</h4>
                </div>
                <p className="home-faq-a">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ PRICING ══════════════ */}
      <section className="section pricing-section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">{t.pricing_eyebrow}</div>
            <h2 className="section-title">{t.pricing_title}</h2>
            <p className="section-subtitle">{t.pricing_subtitle}</p>
          </div>
          <div className="pricing-grid">
            {t.pricing_cards.map((card, i) => (
              <div className={`pricing-card${card.badge ? " pricing-card--popular" : ""}`} key={i}>
                {card.badge && <div className="pricing-badge">{card.badge}</div>}
                <div className="pricing-icon">{card.icon}</div>
                <h3 className="pricing-name">{card.name}</h3>
                <div className="pricing-price">
                  <span className="pricing-from">{t.pricing_from}</span>
                  <span className="pricing-num">{card.price}</span>
                  <span className="pricing-unit">{card.unit}</span>
                </div>
                <p className="pricing-note">{card.note}</p>
                <ul className="pricing-features">
                  {card.features.map((f, fi) => (
                    <li key={fi}><I.Check s={14} c="var(--accent)" /> {f}</li>
                  ))}
                </ul>
                <button className="pricing-cta" onClick={() => { setPage("contact"); window.scrollTo(0, 0); }}>
                  {t.pricing_cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ NETWORK ══════════════ */}
      <section className="section section-dark network-section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">{t.network_eyebrow}</div>
            <h2 className="section-title">{t.network_title}</h2>
            <p className="section-subtitle">{t.network_subtitle}</p>
          </div>
          <div className="network-stats-row">
            {t.network_stats.map((s, i) => (
              <div className="network-stat" key={i}>
                <div className="network-stat-num">{s.num}</div>
                <div className="network-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="network-cities">
            {t.network_cities.map((city, i) => (
              <span className="network-city" key={i}>{city}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2>{t.cta_title}</h2>
          <p>{t.cta_desc}</p>
          <div className="hero-buttons" style={{ justifyContent: "center" }}>
            <button className="btn-primary" onClick={() => { setPage("contact"); window.scrollTo(0, 0); }}>
              <I.Phone s={18} /> {t.cta_btn1}
            </button>
            <button className="btn-secondary" onClick={() => { setPage("cargo"); window.scrollTo(0, 0); }}>
              <I.Package s={18} /> {t.cta_btn2}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
