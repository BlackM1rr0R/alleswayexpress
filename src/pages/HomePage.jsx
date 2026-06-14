import { useState, useEffect, useRef } from "react";
import I from "../components/Icons";
import T from "../i18n";
import StatsBar from "../components/StatsBar";
import bgHero from "../assets/kamyon.jpeg";
import kamyon5 from "../assets/kamyon5.jpeg";
import kamyon7 from "../assets/kamyon7.jpeg";
import back4 from "../assets/back4.jpeg";
import kamyon6 from "../assets/kamyon6.jpeg";
import kamyon3 from "../assets/kamyon3.jpeg";
import kamyon2 from "../assets/kamyon2.jpeg";
import kamyon4 from "../assets/kamyon4.jpeg";
import kamyon9 from "../assets/kamyon9.jpeg";
import kamyon1 from "../assets/kamyon1.jpeg";
import foto1 from "../assets/kamyon5.jpeg";
import foto2 from "../assets/aaaaaaaaaa1.jpg";
import foto3 from "../assets/aaaaaaaaaa2.jpg";
import lkw1 from "../assets/lkw1.jpeg";
import lkw2 from "../assets/lkw2.jpeg";
import lkw3 from "../assets/lkw3.jpeg";
import lkw4 from "../assets/lkw4.jpeg";
import lkw5 from "../assets/lkw5.jpeg";
import lkw6 from "../assets/lkw6.jpeg";
import "../styles/HomePage.css";

const PROCESS_PHOTOS = [foto1, foto2, foto3];

const VEHICLES = [
  { name: "Sprinter",  base: 50,  rate: 1.2,  img: lkw1, mode: "road" },
  { name: "LKW 7,5t",  base: 50,  rate: 2.0,  img: lkw2, mode: "road" },
  { name: "LKW 40t",   base: 100, rate: 2.4,  img: lkw3, mode: "road" },
  { name: "Schiff",    base: 0,   rate: 140,   img: lkw4, mode: "sea",  unit: "m³" },
  { name: "Flugzeug",  base: 0,   rate: 7,     img: lkw5, mode: "air",  unit: "kg" },
  { name: "Zug",       base: 0,   rate: 0.50,  img: lkw6, mode: "train", unit: "kg" },
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

function parseNum(str) {
  const m = String(str).match(/[\d,.]+/);
  return m ? parseFloat(m[0].replace(/\./g, "").replace(",", ".")) : null;
}
function formatNum(val, orig) {
  const s = String(orig);
  const rounded = Math.round(val).toLocaleString("de-DE");
  return s.replace(/[\d.,]+/, rounded);
}
function CountUp({ val }) {
  const [display, setDisplay] = useState(val);
  const rafRef = useRef(null);
  const ref = useRef(null);
  useEffect(() => {
    const target = parseNum(val);
    if (target === null) return;
    const obs = new IntersectionObserver(([e]) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (e.isIntersecting) {
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / 1600, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setDisplay(formatNum(target * ease, val));
          if (p < 1) rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
      } else { setDisplay(formatNum(0, val)); }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => { obs.disconnect(); if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [val]);
  return <span ref={ref}>{display}</span>;
}

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("revealed"); },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 11) % 100}%`,
  top: `${(i * 53 + 7) % 100}%`,
  size: (i % 3 === 0) ? 3 : (i % 3 === 1) ? 2 : 1.5,
  dur: 6 + (i % 5) * 2,
  delay: -(i * 1.1),
  opacity: 0.15 + (i % 4) * 0.08,
}));

function Particles() {
  return (
    <div className="hero-particles" aria-hidden>
      {PARTICLES.map(p => (
        <div key={p.id} className="hero-particle" style={{
          left: p.left, top: p.top,
          width: p.size, height: p.size,
          animationDuration: `${p.dur}s`,
          animationDelay: `${p.delay}s`,
          opacity: p.opacity,
        }} />
      ))}
    </div>
  );
}

function useTilt(intensity = 10) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(800px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) scale(1.02)`;
    };
    const onLeave = () => { el.style.transform = ""; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, [intensity]);
  return ref;
}

const AIR_REGIONS = [
  { label: "Europa",              ratePerKg: 7   },
  { label: "Türkei / Naher Osten", ratePerKg: 9  },
  { label: "Russland / GUS",     ratePerKg: 10  },
  { label: "Asien (Fern)",       ratePerKg: 12  },
  { label: "USA / Kanada",        ratePerKg: 11  },
  { label: "Lateinamerika",       ratePerKg: 13  },
  { label: "Afrika",              ratePerKg: 12  },
  { label: "Australien",          ratePerKg: 15  },
];

const SEA_REGIONS = [
  { label: "Nordeuropa / Ostsee",  ratePerM3: 140 },
  { label: "Mittelmeer",           ratePerM3: 180 },
  { label: "Türkei / Schwarzes Meer", ratePerM3: 200 },
  { label: "Westafrika",           ratePerM3: 290 },
  { label: "Ostafrika",            ratePerM3: 310 },
  { label: "USA / Kanada (Ost)",   ratePerM3: 280 },
  { label: "USA (West) / Mexiko",  ratePerM3: 320 },
  { label: "Naher Osten / Golfo",  ratePerM3: 260 },
  { label: "Südasien (Indien)",    ratePerM3: 300 },
  { label: "Ostasien (China/JP)",  ratePerM3: 340 },
  { label: "Südostasien",          ratePerM3: 330 },
  { label: "Australien / NZ",      ratePerM3: 390 },
  { label: "Lateinamerika",        ratePerM3: 360 },
];

function HomePage({ setPage, lang = "de" }) {
  const t = (T[lang] || T.de).home;
  const [calcVehicle, setCalcVehicle] = useState(0);
  const [calcKm, setCalcKm] = useState(150);
  const [calcKg, setCalcKg] = useState(100);
  const [calcM3, setCalcM3] = useState(10);
  const [calcAirRegion, setCalcAirRegion] = useState(0);
  const [calcSeaRegion, setCalcSeaRegion] = useState(0);

  const refServices  = useReveal();
  const refProcess   = useReveal();
  const refWhy       = useReveal();
  const refCalc      = useReveal();
  const refValues    = useReveal();
  const tiltCard     = useTilt(8);
  const testiRef     = useRef(null);
  const testiBgRef   = useRef(null);
  const whyRef       = useRef(null);
  const whyBgRef     = useRef(null);
  const svcRef       = useRef(null);
  const svcBgRef     = useRef(null);
  const coverageRef  = useRef(null);
  const coverageBgRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const section = testiRef.current;
      const bg = testiBgRef.current;
      if (!section || !bg) return;
      const isMobile = window.innerWidth < 768;
      [[testiRef, testiBgRef], [whyRef, whyBgRef]].forEach(([sRef, bRef]) => {
        const sec = sRef.current;
        const b = bRef.current;
        if (!sec || !b) return;
        const rect = sec.getBoundingClientRect();
        const vh = window.innerHeight;
        const progress = (vh - rect.top) / (vh + rect.height);
        const offset = (progress - 0.5) * (isMobile ? 60 : 120);
        b.style.transform = `translateY(${offset}px)`;
      });
      const svcSec = svcRef.current;
      const svcBg = svcBgRef.current;
      if (svcSec && svcBg) {
        const rect = svcSec.getBoundingClientRect();
        const vh = window.innerHeight;
        const progress = (vh - rect.top) / (vh + rect.height);
        const offset = (progress - 0.5) * (isMobile ? 60 : 120);
        svcBg.style.transform = `translate(-50%, calc(-50% + ${offset}px))`;
      }
      // Coverage img parallax
      const covSec = coverageRef.current;
      const covBg = coverageBgRef.current;
      if (covSec && covBg) {
        const rect = covSec.getBoundingClientRect();
        const vh = window.innerHeight;
        const progress = (vh - rect.top) / (vh + rect.height);
        const offset = (progress - 0.5) * (isMobile ? 40 : 100);
        covBg.style.transform = `translateX(-50%) translateY(calc(-50% + ${offset}px))`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const v = VEHICLES[calcVehicle];
  const price = v.mode === "air"
    ? Math.round(calcKg * AIR_REGIONS[calcAirRegion].ratePerKg)
    : v.mode === "sea"
    ? Math.round(calcM3 * SEA_REGIONS[calcSeaRegion].ratePerM3)
    : v.mode === "train"
    ? Math.round(calcKg * v.rate)
    : Math.round(v.base + calcKm * v.rate);

  return (
    <>
      {/* ══════════════ HERO ══════════════ */}
      <section className="hero">
        <div className="hero-bg">
          <img src={bgHero} alt="" className="hero-bg-img" />
          <div className="hero-bg-overlay" />
          <div className="hero-grid" />
        </div>
        <Particles />

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
            <div className="hero-card" ref={tiltCard}>
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
                    <img src={veh.img} alt={veh.name} className="calc-veh-img" />
                    {veh.name}
                  </button>
                ))}
              </div>

              {v.mode === "road" && (
                <div className="calc-km-wrap">
                  <div className="calc-km-header">
                    <label>{t.calc_distance}</label>
                    <span className="calc-km-val">{calcKm} km</span>
                  </div>
                  <input type="range" min={10} max={1000} step={10}
                    value={calcKm} onChange={e => setCalcKm(Number(e.target.value))}
                    className="calc-slider" />
                  <div className="calc-km-labels"><span>10 km</span><span>1.000 km</span></div>
                </div>
              )}

              {v.mode === "air" && (
                <div className="calc-km-wrap">
                  <div className="calc-address-wrap">
                    <label className="calc-address-label">Zielregion (ab Wörth am Rhein)</label>
                    <select className="calc-address-input calc-select"
                      value={calcAirRegion} onChange={e => setCalcAirRegion(Number(e.target.value))}>
                      {AIR_REGIONS.map((r, i) => (
                        <option key={i} value={i}>{r.label} — {r.ratePerKg} €/kg</option>
                      ))}
                    </select>
                  </div>
                  <div className="calc-km-header" style={{ marginTop: 16 }}>
                    <label>Gewicht</label>
                    <span className="calc-km-val">{calcKg} kg</span>
                  </div>
                  <input type="range" min={1} max={5000} step={1}
                    value={calcKg} onChange={e => setCalcKg(Number(e.target.value))}
                    className="calc-slider" />
                  <div className="calc-km-labels"><span>1 kg</span><span>5.000 kg</span></div>
                </div>
              )}

              {v.mode === "sea" && (
                <div className="calc-km-wrap">
                  <div className="calc-address-wrap">
                    <label className="calc-address-label">Zielregion (ab Wörth am Rhein)</label>
                    <select className="calc-address-input calc-select"
                      value={calcSeaRegion} onChange={e => setCalcSeaRegion(Number(e.target.value))}>
                      {SEA_REGIONS.map((r, i) => (
                        <option key={i} value={i}>{r.label} — {r.ratePerM3} €/m³</option>
                      ))}
                    </select>
                  </div>
                  <div className="calc-km-header" style={{ marginTop: 16 }}>
                    <label>Volumen</label>
                    <span className="calc-km-val">{calcM3} m³</span>
                  </div>
                  <input type="range" min={1} max={500} step={1}
                    value={calcM3} onChange={e => setCalcM3(Number(e.target.value))}
                    className="calc-slider" />
                  <div className="calc-km-labels"><span>1 m³</span><span>500 m³</span></div>
                </div>
              )}

              {v.mode === "train" && (
                <div className="calc-km-wrap">
                  <div className="calc-km-header">
                    <label>Gewicht</label>
                    <span className="calc-km-val">{calcKg} kg</span>
                  </div>
                  <input type="range" min={1} max={10000} step={10}
                    value={calcKg} onChange={e => setCalcKg(Number(e.target.value))}
                    className="calc-slider" />
                  <div className="calc-km-labels"><span>1 kg</span><span>10.000 kg</span></div>
                </div>
              )}

              <div className="calc-result">
                <div className="calc-result-left">
                  <div className="calc-result-label">{t.calc_est}</div>
                  <div className="calc-result-price">
                    ab {price.toLocaleString("de-DE")} €
                    {v.mode === "air"   && <span className="calc-unit-note"> ({AIR_REGIONS[calcAirRegion].ratePerKg} €/kg)</span>}
                    {v.mode === "sea"   && <span className="calc-unit-note"> ({SEA_REGIONS[calcSeaRegion].ratePerM3} €/m³)</span>}
                    {v.mode === "train" && <span className="calc-unit-note"> (0,50 €/kg)</span>}
                  </div>
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
      <section className="section process-section reveal-section" ref={refProcess}>
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
                {PROCESS_PHOTOS[i] && (
                  <div className="process-photo-wrap" style={{ backgroundImage: `url(${PROCESS_PHOTOS[i]})` }}>
                    <img src={PROCESS_PHOTOS[i]} alt={p.title} className="process-photo" />
                  </div>
                )}
                <div className="process-body">
                  <div className={`process-icon-wrap process-icon-wrap--${PROCESS_COLORS[i]}`}>
                    {PROCESS_ICONS[i]}
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ SERVICES ══════════════ */}
      <section className="section section-dark reveal-section why-parallax-section" ref={el => { refServices.current = el; svcRef.current = el; }}>
        <div className="svc-parallax-bg" ref={svcBgRef} style={{ backgroundImage: `url(${back4})` }} />
        <div className="section-bg-overlay" />
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
      <section className="section reveal-section why-parallax-section" ref={el => { refWhy.current = el; whyRef.current = el; }}>
        <div className="testi-parallax-bg why-parallax-bg" ref={whyBgRef} style={{ backgroundColor: "#060709" }}>
          <div className="why-bg-side why-bg-side--left"  style={{ backgroundImage: `url(${kamyon3})` }} />
          <div className="why-bg-center"                  style={{ backgroundImage: `url(${kamyon3})` }} />
          <div className="why-bg-side why-bg-side--right" style={{ backgroundImage: `url(${kamyon3})` }} />
        </div>
        <div className="section-bg-overlay" />
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
      <section className="worldmap-section" ref={coverageRef}>
        <img src={kamyon9} alt="" className="worldmap-bg" ref={coverageBgRef} />
        <div className="worldmap-overlay" />
        <div className="worldmap-content">
          <div className="section-eyebrow" style={{ color: "var(--accent)" }}>{t.map_eyebrow}</div>
          <h2 className="worldmap-title">{t.map_title}</h2>
          <p className="worldmap-desc">{t.map_desc}</p>
          <div className="worldmap-stats">
            {t.map_stats.map((s, i) => (
              <div className="worldmap-stat" key={i}>
                <span className="worldmap-stat-num"><CountUp val={s.num} /></span>
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
            {[...Array(2)].map((_, ri) => (
              <div className="partners-track-inner" key={ri} aria-hidden={ri > 0}>
                {["Bauhaus AG", "RheinCargo GmbH", "Metro Logistik", "BASF SE", "Daimler Truck", "Lidl Stiftung", "DB Schenker", "Rhenus Group"].map((p, i) => (
                  <div className="partner-item" key={i}>{p}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ TESTIMONIALS ══════════════ */}
      <section className="section section-dark reveal-section testi-parallax-section" ref={el => { refCalc.current = el; testiRef.current = el; }}>
        <div className="testi-parallax-bg" ref={testiBgRef}>
          <div className="why-bg-side testi-half testi-half--left"  style={{ backgroundImage: `url(${kamyon4})`, filter: "none", WebkitMaskImage: "linear-gradient(to right, black 0%, black 40%, transparent 100%)", maskImage: "linear-gradient(to right, black 0%, black 40%, transparent 100%)" }} />
          <div className="why-bg-side testi-half testi-half--right" style={{ backgroundImage: `url(${kamyon3})`, filter: "none", WebkitMaskImage: "linear-gradient(to left, black 0%, black 40%, transparent 100%)", maskImage: "linear-gradient(to left, black 0%, black 40%, transparent 100%)" }} />
        </div>
        <div className="section-bg-overlay" />
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
      <section className="section reveal-section" ref={refValues}>
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
      <section className="section pricing-section" style={{ backgroundImage: `url(${kamyon1})`, backgroundSize: "100% auto", backgroundPosition: "center", backgroundAttachment: "fixed", position: "relative" }}>
        <div className="section-bg-overlay" />
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



