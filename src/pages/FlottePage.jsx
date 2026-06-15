import PageHeader from "../components/PageHeader";
import { Particles, CountUp, useReveal } from "../utils/animations";
import "../styles/Flotte.css";

import lkw1 from "../assets/lkw1.jpeg";
import lkw2 from "../assets/lkw2.jpeg";
import lkw3 from "../assets/lkw3.jpeg";
import lkw4 from "../assets/lkw4.jpeg";
import lkw5 from "../assets/lkw5.jpeg";
import lkw6 from "../assets/lkw6.jpeg";

const CONTENT = {
  de: {
    ph: { title: "Unsere Flotte", desc: "Modernste Fahrzeuge für jeden Transportauftrag" },
    eyebrow: "Modernste Fahrzeuge",
    title: "500+ Fahrzeuge. Immer einsatzbereit.",
    desc: "Unsere Flotte umfasst LKW, Sprinter und Spezialfahrzeuge für jeden Einsatz — GPS-überwacht, vollversichert und regelmäßig gewartet.",
    stats: [
      { num: "500+", label: "Fahrzeuge" },
      { num: "24/7", label: "Einsatzbereit" },
      { num: "99,7%", label: "Pünktlichkeit" },
      { num: "0", label: "Kompromisse" },
    ],
    vehicles_title: "Fahrzeugtypen",
    vehicles: [
      { img: lkw2, icon: "🚐", name: "Mercedes Sprinter", price: "ab 1,90 €/km", nutzlast: "1,5 t", laderaum: "10 m³", coverage: "Lokal & Regional", features: ["Same-Day Zustellung", "Bis 1.500 kg Nutzlast", "Hebebühne auf Anfrage", "GPS-Tracking in Echtzeit"] },
      { img: lkw1, icon: "🚛", name: "LKW 7,5 t", price: "ab 2,80 €/km", nutzlast: "5 t", laderaum: "35 m³", coverage: "Regional & DE", features: ["24h Lieferzeit deutschlandweit", "Koffer- & Planenaufbau", "Bis 5.000 kg Nutzlast", "Vollversichert"] },
      { img: lkw3, icon: "🚚", name: "Actros 40 t", price: "ab 3,90 €/km", nutzlast: "24 t", laderaum: "90 m³", coverage: "Deutschlandweit", features: ["Schwertransport bis 24t", "Wechselbrückensystem", "GPS Echtzeit-Tracking", "48h Lieferzeit DE"] },
      { img: lkw5, icon: "🚢", name: "Seefracht", price: "ab 140 €/m³", nutzlast: "Unbegrenzt", laderaum: "FCL + LCL", coverage: "Weltweit", features: ["FCL & LCL Sendungen", "Zollabwicklung inklusive", "Hafen Hamburg & Bremen", "Laufzeit 10–30 Tage"] },
      { img: lkw4, icon: "✈️", name: "Luftfracht", price: "ab 7,00 €/kg", nutzlast: "Unbegrenzt", laderaum: "kg-Basis", coverage: "International", features: ["Express weltweit", "Tür-zu-Tür-Service", "Laufzeit 1–5 Tage", "Vollversicherung inkl."] },
      { img: lkw6, icon: "🚂", name: "Schienentransport", price: "ab 0,50 €/kg", nutzlast: "Unbegrenzt", laderaum: "kg-Basis", coverage: "Europa & DE", features: ["75% weniger CO₂", "Europa-weit verfügbar", "Hohe Kapazitäten", "Klimafreundlich"] },
    ],
    tech_eyebrow: "Technologie & Ausstattung",
    tech_title: "Jedes Fahrzeug — digital vernetzt",
    tech_items: [
      { icon: "📡", title: "GPS Echtzeit-Tracking", desc: "Jede Sendung live verfolgen — sekundengenau, 24/7 verfügbar." },
      { icon: "🌡️", title: "Temperaturkontrolle", desc: "Kühlfahrzeuge mit ±1 °C Genauigkeit für sensible Güter." },
      { icon: "📱", title: "Digital-Logbuch", desc: "Papierlose Dokumentation — Lieferschein, Fotos, Unterschrift digital." },
      { icon: "🔒", title: "Alarmanlage & Schloss", desc: "Elektronische Sicherungssysteme in jedem Fahrzeug serienmäßig." },
      { icon: "⛽", title: "Kraftstoffoptimierung", desc: "Telematik reduziert Kraftstoffverbrauch um bis zu 15%." },
      { icon: "🛰️", title: "Satelliten-Navigation", desc: "Live-Stauumgehung und optimierte Routen für pünktliche Zustellung." },
    ],
    why_eyebrow: "Warum Allesway Flotte?",
    why_title: "Unsere Stärken auf einen Blick",
    why_items: [
      { num: "500+", label: "Fahrzeuge", desc: "Eines der größten privaten Fuhrparks in Deutschland." },
      { num: "6", label: "Fahrzeugklassen", desc: "Von Sprinter bis Luftfracht — alles aus einer Hand." },
      { num: "48h", label: "Max. Lieferzeit", desc: "Deutschlandweite Zustellung innerhalb von 48 Stunden." },
      { num: "100%", label: "Vollversichert", desc: "Jede Sendung ist vollständig haftpflichtversichert." },
    ],
    locations_eyebrow: "Standorte & Abdeckung",
    locations_title: "Unsere Depots in Deutschland",
    locations: [
      { city: "Wörth am Rhein", role: "Hauptdepot", info: "Zentrale Logistikbasis — LKW, Sprinter, Schwertransport" },
      { city: "Hamburg", role: "Norddepot", info: "Seefracht-Hub — direkter Hafenzugang HH & Bremen" },
      { city: "München", role: "Süddepot", info: "Süddeutschland & Österreich / Schweiz" },
      { city: "Frankfurt", role: "Luftfracht-Hub", info: "Direktanbindung Flughafen FRA — Express weltweit" },
      { city: "Berlin", role: "Ostdepot", info: "Berlin, Brandenburg & Ostdeutschland" },
      { city: "Düsseldorf", role: "Westdepot", info: "NRW & Benelux — Grenznaher Transport" },
    ],
    table_title: "Fahrzeugvergleich",
    table_headers: ["Fahrzeug", "Nutzlast", "Preis", "Laufzeit", "Reichweite", "Ideal für"],
    table_rows: [
      ["🚐 Mercedes Sprinter", "1,5 t", "ab 1,90 €/km", "Same-Day", "Lokal & Regional", "Stadtlieferungen"],
      ["🚛 LKW 7,5 t", "5 t", "ab 2,80 €/km", "24 h", "Regional & DE", "Paletten & Möbel"],
      ["🚚 Actros 40 t", "24 t", "ab 3,90 €/km", "48 h", "Deutschlandweit", "Schwertransporte"],
      ["🚢 Seefracht", "Unbegrenzt", "ab 140 €/m³", "10–30 Tage", "Weltweit", "Überseecontainer"],
      ["✈️ Luftfracht", "Unbegrenzt", "ab 7,00 €/kg", "1–5 Tage", "International", "Expresssendungen"],
      ["🚂 Schiene", "Unbegrenzt", "ab 0,50 €/kg", "2–5 Tage", "Europa & DE", "Massenware & Eco"],
    ],
    maint_eyebrow: "Wartung & Qualität",
    maint_cards: [
      { icon: "🔧", title: "Regelmäßige Wartung", desc: "Alle Fahrzeuge werden alle 10.000 km gewartet und geprüft — maximale Zuverlässigkeit." },
      { icon: "📡", title: "GPS-Überwachung", desc: "24/7 Echtzeit-Tracking aller Fahrzeuge — Sie sehen Ihre Sendung jederzeit live." },
      { icon: "🛡️", title: "Vollversicherung", desc: "Jedes Fahrzeug und jede Sendung ist vollständig versichert — ohne Ausnahme." },
    ],
    cta_title: "Fahrzeug anfragen",
    cta_desc: "Wählen Sie das richtige Fahrzeug und fordern Sie ein unverbindliches Angebot an.",
    cta_btn: "Jetzt anfragen",
    anfragen: "Jetzt anfragen",
    nutzlast_label: "Nutzlast",
    laderaum_label: "Laderaum",
  },
  en: {
    ph: { title: "Our Fleet", desc: "State-of-the-art vehicles for every transport assignment" },
    eyebrow: "State-of-the-art vehicles",
    title: "500+ vehicles. Always ready.",
    desc: "Our fleet includes trucks, Sprinters and specialist vehicles for every assignment — GPS-monitored, fully insured and regularly maintained.",
    stats: [
      { num: "500+", label: "Vehicles" },
      { num: "24/7", label: "Ready to go" },
      { num: "99.7%", label: "On-time rate" },
      { num: "0", label: "Compromises" },
    ],
    vehicles_title: "Vehicle types",
    vehicles: [
      { img: lkw2, icon: "🚐", name: "Mercedes Sprinter", price: "from €1.90/km", nutzlast: "1.5 t", laderaum: "10 m³", coverage: "Local & Regional", features: ["Same-day delivery", "Up to 1,500 kg payload", "Tail lift on request", "GPS tracking in real time"] },
      { img: lkw1, icon: "🚛", name: "Truck 7.5 t", price: "from €2.80/km", nutzlast: "5 t", laderaum: "35 m³", coverage: "Regional & DE", features: ["24 h delivery nationwide", "Box & curtain body", "Up to 5,000 kg payload", "Fully insured"] },
      { img: lkw3, icon: "🚚", name: "Actros 40 t", price: "from €3.90/km", nutzlast: "24 t", laderaum: "90 m³", coverage: "Nationwide", features: ["Heavy transport up to 24t", "Swap-body system", "GPS real-time tracking", "48 h delivery DE"] },
      { img: lkw5, icon: "🚢", name: "Sea Freight", price: "from €140/m³", nutzlast: "Unlimited", laderaum: "FCL + LCL", coverage: "Worldwide", features: ["FCL & LCL shipments", "Customs clearance included", "Ports Hamburg & Bremen", "Transit 10–30 days"] },
      { img: lkw4, icon: "✈️", name: "Air Freight", price: "from €7.00/kg", nutzlast: "Unlimited", laderaum: "kg-basis", coverage: "International", features: ["Express worldwide", "Door-to-door service", "Transit 1–5 days", "Full insurance incl."] },
      { img: lkw6, icon: "🚂", name: "Rail Transport", price: "from €0.50/kg", nutzlast: "Unlimited", laderaum: "kg-basis", coverage: "Europe & DE", features: ["75% less CO₂", "Available across Europe", "High capacity", "Climate-friendly"] },
    ],
    tech_eyebrow: "Technology & Equipment",
    tech_title: "Every vehicle — digitally connected",
    tech_items: [
      { icon: "📡", title: "GPS Real-time Tracking", desc: "Track every shipment live — second-precise, available 24/7." },
      { icon: "🌡️", title: "Temperature Control", desc: "Refrigerated vehicles with ±1 °C accuracy for sensitive goods." },
      { icon: "📱", title: "Digital Logbook", desc: "Paperless documentation — delivery notes, photos, signature digital." },
      { icon: "🔒", title: "Alarm & Lock System", desc: "Electronic security systems in every vehicle as standard." },
      { icon: "⛽", title: "Fuel Optimisation", desc: "Telematics reduces fuel consumption by up to 15%." },
      { icon: "🛰️", title: "Satellite Navigation", desc: "Live traffic avoidance and optimised routes for on-time delivery." },
    ],
    why_eyebrow: "Why Allesway Fleet?",
    why_title: "Our strengths at a glance",
    why_items: [
      { num: "500+", label: "Vehicles", desc: "One of the largest private fleets in Germany." },
      { num: "6", label: "Vehicle classes", desc: "From Sprinter to air freight — everything from one source." },
      { num: "48h", label: "Max. delivery", desc: "Nationwide delivery within 48 hours." },
      { num: "100%", label: "Fully insured", desc: "Every shipment is fully liability insured." },
    ],
    locations_eyebrow: "Locations & Coverage",
    locations_title: "Our depots in Germany",
    locations: [
      { city: "Wörth am Rhein", role: "Main depot", info: "Central logistics base — trucks, Sprinters, heavy transport" },
      { city: "Hamburg", role: "North depot", info: "Sea freight hub — direct port access HH & Bremen" },
      { city: "Munich", role: "South depot", info: "Southern Germany & Austria / Switzerland" },
      { city: "Frankfurt", role: "Air freight hub", info: "Direct connection FRA airport — express worldwide" },
      { city: "Berlin", role: "East depot", info: "Berlin, Brandenburg & eastern Germany" },
      { city: "Düsseldorf", role: "West depot", info: "NRW & Benelux — cross-border transport" },
    ],
    table_title: "Vehicle comparison",
    table_headers: ["Vehicle", "Payload", "Price", "Transit", "Coverage", "Ideal for"],
    table_rows: [
      ["🚐 Mercedes Sprinter", "1.5 t", "from €1.90/km", "Same-day", "Local & Regional", "City deliveries"],
      ["🚛 Truck 7.5 t", "5 t", "from €2.80/km", "24 h", "Regional & DE", "Pallets & furniture"],
      ["🚚 Actros 40 t", "24 t", "from €3.90/km", "48 h", "Nationwide", "Heavy transport"],
      ["🚢 Sea Freight", "Unlimited", "from €140/m³", "10–30 days", "Worldwide", "Overseas containers"],
      ["✈️ Air Freight", "Unlimited", "from €7.00/kg", "1–5 days", "International", "Express shipments"],
      ["🚂 Rail", "Unlimited", "from €0.50/kg", "2–5 days", "Europe & DE", "Bulk goods & eco"],
    ],
    maint_eyebrow: "Maintenance & Quality",
    maint_cards: [
      { icon: "🔧", title: "Regular Maintenance", desc: "All vehicles are serviced and inspected every 10,000 km — maximum reliability." },
      { icon: "📡", title: "GPS Monitoring", desc: "24/7 real-time tracking of all vehicles — see your shipment live at any time." },
      { icon: "🛡️", title: "Full Insurance", desc: "Every vehicle and every shipment is fully insured — no exceptions." },
    ],
    cta_title: "Request a vehicle",
    cta_desc: "Choose the right vehicle and request a no-obligation quote.",
    cta_btn: "Request now",
    anfragen: "Request now",
    nutzlast_label: "Payload",
    laderaum_label: "Cargo space",
  },
};

function FlottePage({ setPage, lang = "de" }) {
  const t = CONTENT[lang] || CONTENT.de;

  const refStats     = useReveal();
  const refVehicles  = useReveal();
  const refTech      = useReveal();
  const refWhy       = useReveal();
  const refLocations = useReveal();
  const refTable     = useReveal();
  const refMaint     = useReveal();
  const refCta       = useReveal();

  return (
    <>
      <PageHeader title={t.ph.title} desc={t.ph.desc} setPage={setPage} lang={lang} page="flotte" />

      <div className="flotte-page-bg">
        <div className="flotte-orb-1" />
        <div className="flotte-orb-2" />
        <div className="flotte-orb-3" />
        <div className="flotte-grid-bg" />
        <div className="flotte-scan-line" />
        <Particles />
      </div>

      {/* ── Intro stats ── */}
      <section className="flotte-section reveal-section" ref={refStats}>
        <div className="section-inner">
          <p className="flotte-eyebrow">{t.eyebrow}</p>
          <h2 className="flotte-hero-title">{t.title}</h2>
          <p className="flotte-hero-desc">{t.desc}</p>
          <div className="flotte-stats-grid">
            {t.stats.map((s, i) => (
              <div className="flotte-stat-card" key={i}>
                <span className="flotte-stat-num"><CountUp val={s.num} /></span>
                <span className="flotte-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vehicle cards ── */}
      <section className="section-dark flotte-section reveal-section" ref={refVehicles}>
        <div className="section-inner">
          <h2 className="flotte-section-title">{t.vehicles_title}</h2>
          <div className="flotte-vehicles-grid">
            {t.vehicles.map((v, i) => (
              <div className="flotte-vehicle-card" key={i}>
                <div className="flotte-vehicle-img-wrap">
                  <img src={v.img} alt={v.name} className="flotte-vehicle-img" />
                  <span className="flotte-vehicle-coverage">{v.coverage}</span>
                </div>
                <div className="flotte-vehicle-body">
                  <div className="flotte-vehicle-header">
                    <span className="flotte-vehicle-icon">{v.icon}</span>
                    <h3 className="flotte-vehicle-name">{v.name}</h3>
                    <span className="flotte-price-badge">{v.price}</span>
                  </div>
                  <div className="flotte-capacity-row">
                    <span className="flotte-cap-item"><strong>{t.nutzlast_label}:</strong> {v.nutzlast}</span>
                    <span className="flotte-cap-item"><strong>{t.laderaum_label}:</strong> {v.laderaum}</span>
                  </div>
                  <ul className="flotte-features">
                    {v.features.map((f, j) => (
                      <li key={j}><span className="flotte-feat-dot">✓</span>{f}</li>
                    ))}
                  </ul>
                  <button className="flotte-anfragen-btn" onClick={() => setPage("contact")}>
                    {t.anfragen}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technology ── */}
      <section className="flotte-section reveal-section" ref={refTech}>
        <div className="section-inner">
          <p className="flotte-eyebrow" style={{ textAlign: "center" }}>{t.tech_eyebrow}</p>
          <h2 className="flotte-section-title">{t.tech_title}</h2>
          <div className="flotte-tech-grid">
            {t.tech_items.map((item, i) => (
              <div className="flotte-tech-card" key={i}>
                <span className="flotte-tech-icon">{item.icon}</span>
                <h4 className="flotte-tech-title">{item.title}</h4>
                <p className="flotte-tech-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Allesway ── */}
      <section className="section-dark flotte-section reveal-section" ref={refWhy}>
        <div className="section-inner">
          <p className="flotte-eyebrow" style={{ textAlign: "center" }}>{t.why_eyebrow}</p>
          <h2 className="flotte-section-title">{t.why_title}</h2>
          <div className="flotte-why-grid">
            {t.why_items.map((w, i) => (
              <div className="flotte-why-card" key={i}>
                <span className="flotte-why-num"><CountUp val={w.num} /></span>
                <span className="flotte-why-label">{w.label}</span>
                <p className="flotte-why-desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Locations ── */}
      <section className="flotte-section reveal-section" ref={refLocations}>
        <div className="section-inner">
          <p className="flotte-eyebrow" style={{ textAlign: "center" }}>{t.locations_eyebrow}</p>
          <h2 className="flotte-section-title">{t.locations_title}</h2>
          <div className="flotte-locations-grid">
            {t.locations.map((loc, i) => (
              <div className="flotte-location-card" key={i}>
                <div className="flotte-location-pin">📍</div>
                <div className="flotte-location-body">
                  <div className="flotte-location-city">{loc.city}</div>
                  <div className="flotte-location-role">{loc.role}</div>
                  <div className="flotte-location-info">{loc.info}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison table ── */}
      <section className="section-dark flotte-section reveal-section" ref={refTable}>
        <div className="section-inner">
          <h2 className="flotte-section-title">{t.table_title}</h2>
          <div className="flotte-table-wrap">
            <table className="flotte-table">
              <thead>
                <tr>{t.table_headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {t.table_rows.map((row, i) => (
                  <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Maintenance ── */}
      <section className="flotte-section reveal-section" ref={refMaint}>
        <div className="section-inner">
          <p className="flotte-eyebrow" style={{ textAlign: "center" }}>{t.maint_eyebrow}</p>
          <div className="flotte-maint-grid">
            {t.maint_cards.map((c, i) => (
              <div className="flotte-maint-card" key={i}>
                <span className="flotte-maint-icon">{c.icon}</span>
                <h3 className="flotte-maint-title">{c.title}</h3>
                <p className="flotte-maint-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="flotte-section flotte-cta-section reveal-section" ref={refCta}>
        <div className="section-inner flotte-cta-inner">
          <h2 className="flotte-cta-title">{t.cta_title}</h2>
          <p className="flotte-cta-desc">{t.cta_desc}</p>
          <button className="flotte-cta-btn" onClick={() => setPage("contact")}>
            {t.cta_btn}
          </button>
        </div>
      </section>
    </>
  );
}

export default FlottePage;
