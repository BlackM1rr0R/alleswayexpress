import I from "../components/Icons";
import PageHeader from "../components/PageHeader";
import StatsBar from "../components/StatsBar";
import "../styles/About.css";

function AboutPage({ setPage }) {
  return (
    <>
      <PageHeader
        title="Über uns"
        desc="Erfahren Sie mehr über Allesway Express"
        setPage={setPage}
      />

      {/* ─── ABOUT INTRO ─── */}
      <section className="section">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-image">
              <I.Truck s={90} c="white" />
            </div>
            <div className="about-content">
              <h2>
                Seit 2018 Ihr Partner für zuverlässige Transporte in ganz
                Deutschland
              </h2>
              <p>
                Allesway Express wurde in Wörth am Rhein gegründet und hat sich
                schnell zu einem der führenden regionalen Transportunternehmen in
                der Pfalz und darüber hinaus entwickelt. Mit über 85 Fahrzeugen
                — darunter moderne LKW und Sprinter — bedienen wir Kunden in
                allen 16 Bundesländern.
              </p>
              <p>
                Unser Erfolgsrezept ist einfach: Zuverlässigkeit, Transparenz
                und ein persönlicher Ansprechpartner für jeden Kunden. Wir
                verstehen, dass hinter jeder Sendung ein wichtiger Auftrag steht
                — und behandeln ihn entsprechend.
              </p>
              <div className="about-features">
                {[
                  "8+ Jahre Erfahrung",
                  "85+ LKW & Sprinter",
                  "150+ Mitarbeiter",
                  "200+ Städte abgedeckt",
                  "ISO 9001 zertifiziert",
                  "24/7 Kundenservice",
                  "Standort Wörth am Rhein",
                  "Vollversicherung inklusive",
                ].map((f, i) => (
                  <div className="about-feature" key={i}>
                    <div className="about-feature-icon">
                      <I.Check s={12} />
                    </div>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <button
                className="btn-primary"
                onClick={() => {
                  setPage("contact");
                  window.scrollTo(0, 0);
                }}
              >
                Kontakt aufnehmen <I.ArrowRight s={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="section section-dark">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">Unsere Geschichte</div>
            <h2 className="section-title">
              Von Wörth am Rhein in ganz Deutschland
            </h2>
          </div>
          <div className="about-timeline">
            {[
              {
                year: "2018",
                title: "Gründung",
                desc: "Allesway Express wird in Wörth am Rhein mit 5 Sprinter-Fahrzeugen gegründet.",
              },
              {
                year: "2020",
                title: "Expansion",
                desc: "Erweiterung der Flotte auf 30 Fahrzeuge. Erste LKW im Einsatz für Schwertransporte.",
              },
              {
                year: "2022",
                title: "ISO-Zertifizierung",
                desc: "Zertifizierung nach ISO 9001. Eröffnung des neuen Logistikzentrums in Wörth.",
              },
              {
                year: "2025",
                title: "Marktführer",
                desc: "85+ Fahrzeuge, 150+ Mitarbeiter und Zustellungen in über 200 Städten deutschlandweit.",
              },
            ].map((t, i) => (
              <div className="timeline-card" key={i}>
                <div className="timeline-year">{t.year}</div>
                <h4>{t.title}</h4>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">Unsere Werte</div>
            <h2 className="section-title">Wofür wir stehen</h2>
          </div>
          <div className="features-grid">
            {[
              {
                icon: <I.Shield s={28} />,
                title: "Zuverlässigkeit",
                desc: "Jede Fracht ist uns wichtig — wir tragen volle Verantwortung für Ihre Sendung.",
              },
              {
                icon: <I.Zap s={28} />,
                title: "Geschwindigkeit",
                desc: "Schnellstmögliche Zustellung ist unsere oberste Priorität — immer und überall.",
              },
              {
                icon: <I.Users s={28} />,
                title: "Teamgeist",
                desc: "Unser erfahrenes und engagiertes Team steht Ihnen jederzeit zur Seite.",
              },
              {
                icon: <I.Star s={28} c="var(--accent)" />,
                title: "Qualität",
                desc: "Höchste Qualitätsstandards nach ISO-Normen in allen Geschäftsbereichen.",
              },
            ].map((v, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-icon-wrap">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <StatsBar />

      {/* ─── STANDORT / MAP ─── */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">Unser Standort</div>
            <h2 className="section-title">
              Zentral in der Pfalz — deutschlandweit aktiv
            </h2>
            <p className="section-subtitle">
              Von Wörth am Rhein aus erreichen wir alle großen
              Wirtschaftsräume schnell und effizient.
            </p>
          </div>
          <div className="map-wrap">
            <div className="map-inner">
              <I.MapPin s={36} c="var(--accent)" />
              <p>Schulplatz 2, 76744 Wörth am Rhein</p>
              <span>
                Direkt an der B9 — optimale Anbindung an A65 und A5
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2>Gemeinsam zum Erfolg</h2>
          <p>
            Werden Sie Teil unserer wachsenden Kundenfamilie. Kontaktieren Sie
            uns für ein individuelles Angebot.
          </p>
          <div className="hero-buttons" style={{ justifyContent: "center" }}>
            <button
              className="btn-primary"
              onClick={() => {
                setPage("contact");
                window.scrollTo(0, 0);
              }}
            >
              <I.Phone s={18} /> Jetzt anfragen
            </button>
            <button
              className="btn-secondary"
              onClick={() => {
                setPage("services");
                window.scrollTo(0, 0);
              }}
            >
              <I.Package s={18} /> Leistungen ansehen
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;