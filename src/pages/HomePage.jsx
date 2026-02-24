import I from "../components/Icons";
import StatsBar from "../components/StatsBar";
import "../styles/HomePage.css";

function HomePage({ setPage }) {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-bg-grad" />
          <div className="hero-bg-grad2" />
          <div className="hero-grid" />
        </div>
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <div className="hero-badge-dot" />
              Ihr zuverlässiger Transportpartner in Deutschland
            </div>
            <h1 className="hero-title">
              Ihre Fracht in{" "}
              <span className="hl">sicheren</span>{" "}
              Händen
            </h1>
            <p className="hero-desc">
              Mit unserer modernen Flotte aus LKW und Sprinter-Fahrzeugen
              bieten wir schnelle, sichere und preiswerte Transportlösungen
              — deutschlandweit innerhalb von 24 Stunden.
            </p>
            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={() => {
                  setPage("services");
                  window.scrollTo(0, 0);
                }}
              >
                Unsere Leistungen <I.ArrowRight s={18} />
              </button>
              <button
                className="btn-secondary"
                onClick={() => {
                  setPage("cargo");
                  window.scrollTo(0, 0);
                }}
              >
                <I.Search s={18} /> Sendung verfolgen
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <div className="tracking-label">Sendungsverfolgung</div>
              <div className="tracking-input-wrap">
                <input
                  className="tracking-input"
                  placeholder="Sendungsnummer eingeben..."
                />
                <button className="tracking-btn">
                  <I.Search s={20} />
                </button>
              </div>
              <div className="tracking-status">
                {[
                  {
                    status: "completed",
                    title: "Auftrag bestätigt",
                    time: "15.02.2026 — 09:30",
                  },
                  {
                    status: "completed",
                    title: "Im Lager verpackt",
                    time: "15.02.2026 — 11:45",
                  },
                  {
                    status: "active",
                    title: "Unterwegs — LKW #07",
                    time: "16.02.2026 — 08:15",
                  },
                  {
                    status: "pending",
                    title: "Zustellung erwartet",
                    time: "Heute — ca. 14:00",
                  },
                ].map((step, i) => (
                  <div className="tracking-step" key={i}>
                    <div className={`tracking-dot ${step.status}`} />
                    <div className="tracking-step-info">
                      <h4>{step.title}</h4>
                      <p>{step.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-float float-1">
              <div className="float-icon green">
                <I.Check s={20} />
              </div>
              <div className="float-text">
                <h4>4.280 Sendungen</h4>
                <p>Diesen Monat zugestellt</p>
              </div>
            </div>
            <div className="hero-float float-2">
              <div className="float-icon blue">
                <I.Zap s={20} />
              </div>
              <div className="float-text">
                <h4>3,2 Stunden</h4>
                <p>Ø Lieferzeit regional</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <StatsBar />

      {/* ─── SERVICES ─── */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">Unsere Leistungen</div>
            <h2 className="section-title">
              Für jeden Transportbedarf die richtige Lösung
            </h2>
            <p className="section-subtitle">
              Von der Expresslieferung bis zum Schwertransport — wir bewegen
              Ihre Fracht schnell, sicher und zuverlässig durch ganz
              Deutschland.
            </p>
          </div>
          <div className="services-grid">
            {[
              {
                icon: <I.Zap s={26} />,
                title: "Express-Zustellung",
                desc: "Taggleiche Lieferung im Nahbereich. Für dringende Aufträge garantieren wir eine Zustellung innerhalb von 3 Stunden.",
              },
              {
                icon: <I.Truck s={26} />,
                title: "LKW-Transport",
                desc: "Mit unseren 40-Tonnern bewegen wir auch große Ladungen. Ideal für Industrie, Bau und Großhandel.",
              },
              {
                icon: <I.Package s={26} />,
                title: "Sprinter-Service",
                desc: "Flexible Zustellung mit unseren Sprinter-Fahrzeugen — bis zu 1,5 Tonnen, schnell und direkt.",
              },
              {
                icon: <I.Shield s={26} />,
                title: "Versicherter Transport",
                desc: "Jede Sendung ist vollversichert. Im Schadensfall erhalten Sie eine komplette Erstattung.",
              },
              {
                icon: <I.Globe s={26} />,
                title: "Deutschlandweite Lieferung",
                desc: "Regelmäßige Fahrten in alle 16 Bundesländer — von der Nordsee bis zu den Alpen.",
              },
              {
                icon: <I.Clock s={26} />,
                title: "24/7 Kundenservice",
                desc: "Unser Service-Team ist rund um die Uhr für Sie erreichbar — per Telefon, E-Mail und Live-Chat.",
              },
            ].map((s, i) => (
              <div className="service-card" key={i}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <button
                  className="service-link"
                  onClick={() => {
                    setPage("services");
                    window.scrollTo(0, 0);
                  }}
                >
                  Mehr erfahren <I.ArrowRight s={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="section section-dark">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">Warum wir?</div>
            <h2 className="section-title">
              Allesway Express — der Unterschied
            </h2>
            <p className="section-subtitle">
              Langjährige Erfahrung, professionelles Team und modernste
              Technik für Ihre Logistik.
            </p>
          </div>
          <div className="features-grid">
            {[
              {
                icon: <I.Truck s={28} />,
                title: "85+ Fahrzeuge",
                desc: "Unser Fuhrpark umfasst LKW, Sprinter und Spezialfahrzeuge für jeden Einsatz.",
              },
              {
                icon: <I.Shield s={28} />,
                title: "Vollversicherung",
                desc: "Alle Transporte sind vollständig versichert — für Ihre absolute Sicherheit.",
              },
              {
                icon: <I.Clock s={28} />,
                title: "Pünktlichkeit",
                desc: "99,7% pünktliche Zustellrate — Zuverlässigkeit, auf die Sie zählen können.",
              },
              {
                icon: <I.Users s={28} />,
                title: "Erfahrenes Team",
                desc: "Geschulte Fahrer und Logistikexperten mit über 15 Jahren Branchenerfahrung.",
              },
            ].map((f, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-icon-wrap">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">Kundenstimmen</div>
            <h2 className="section-title">Was unsere Kunden sagen</h2>
            <p className="section-subtitle">
              Tausende zufriedene Kunden vertrauen täglich auf Allesway
              Express.
            </p>
          </div>
          <div className="testimonials-grid">
            {[
              {
                text: "Allesway Express liefert immer pünktlich und zuverlässig. Die Preise sind fair und der Service erstklassig. Absolut empfehlenswert für Geschäftskunden!",
                name: "Thomas Berger",
                role: "Geschäftsführer, Berger Möbelhaus",
                initials: "TB",
              },
              {
                text: "Der Express-Service ist hervorragend. Meine dringende Lieferung war in unter 3 Stunden da. So einen zuverlässigen Partner findet man selten.",
                name: "Sabine Keller",
                role: "Inhaberin, Keller Online-Shop",
                initials: "SK",
              },
              {
                text: "Seit 5 Jahren arbeiten wir mit Allesway zusammen. Professionelles Team, versicherte Transporte und immer erreichbar. Die beste Wahl in der Pfalz!",
                name: "Markus Hoffmann",
                role: "Betriebsleiter, Hoffmann AG",
                initials: "MH",
              },
            ].map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, si) => (
                    <I.Star key={si} s={16} />
                  ))}
                </div>
                <p className="testimonial-text">„{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initials}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2>Bereit zum Versenden?</h2>
          <p>
            Kontaktieren Sie uns jetzt und lassen Sie Ihre Fracht schnell und
            sicher liefern. 15% Rabatt auf Ihren ersten Auftrag!
          </p>
          <div className="hero-buttons" style={{ justifyContent: "center" }}>
            <button
              className="btn-primary"
              onClick={() => {
                setPage("contact");
                window.scrollTo(0, 0);
              }}
            >
              <I.Phone s={18} /> Kontakt aufnehmen
            </button>
            <button
              className="btn-secondary"
              onClick={() => {
                setPage("cargo");
                window.scrollTo(0, 0);
              }}
            >
              <I.Package s={18} /> Sendungen ansehen
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;