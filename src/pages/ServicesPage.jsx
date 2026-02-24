import I from "../components/Icons";
import PageHeader from "../components/PageHeader";
import "../styles/Services.css";

function ServicesPage({ setPage }) {
  const services = [
    {
      icon: <I.Zap s={26} />,
      title: "Express-Zustellung",
      desc: "Dringende Sendungen erfordern schnelles Handeln. Unser Express-Service garantiert die Zustellung innerhalb von 3 Stunden im Umkreis von 100 km und am selben Tag deutschlandweit.",
      features: [
        "3-Stunden-Garantie im Nahbereich",
        "Echtzeit-Tracking per App & SMS",
        "Prioritätsbehandlung im Lager",
        "Persönliche Zustellbestätigung",
      ],
    },
    {
      icon: <I.Truck s={26} />,
      title: "LKW-Fernverkehr",
      desc: "Unsere modernen 7,5t bis 40t LKW transportieren Ihre schweren und großvolumigen Güter quer durch Deutschland — von Flensburg bis Garmisch.",
      features: [
        "Bis 24 Tonnen Nutzlast",
        "Temperaturgeführte Transporte",
        "Wechselbrücken & Container",
        "Erfahrene Berufskraftfahrer",
      ],
    },
    {
      icon: <I.Package s={26} />,
      title: "Sprinter-Kurierdienst",
      desc: "Für Ladungen bis 1,5 Tonnen setzen wir unsere wendigen Sprinter-Fahrzeuge ein — ideal für Stückgut, Pakete und eilige Teilladungen.",
      features: [
        "Bis 1,5t Zuladung",
        "Hebebühne verfügbar",
        "Same-Day & Next-Day Optionen",
        "Flexible Abhol- & Lieferzeiten",
      ],
    },
    {
      icon: <I.Shield s={26} />,
      title: "Versicherter Transport",
      desc: "Jede Sendung ist bei uns automatisch vollversichert. Wir übernehmen die volle Haftung und bieten auf Wunsch erweiterte Absicherung.",
      features: [
        "Grundversicherung inklusive",
        "Erweiterte Allgefahren-Police",
        "Schnelle Schadensregulierung",
        "Transportbegleitung auf Wunsch",
      ],
    },
    {
      icon: <I.Globe s={26} />,
      title: "Deutschlandweite Logistik",
      desc: "Unser Liniennetz verbindet über 200 Städte in allen 16 Bundesländern mit regelmäßigen Fahrten und festen Abfahrtszeiten.",
      features: [
        "Alle 16 Bundesländer abgedeckt",
        "Feste Linienpläne & Fahrpläne",
        "Mengenrabatte ab 10 Sendungen",
        "Umschlagspunkte & Depots",
      ],
    },
    {
      icon: <I.Clock s={26} />,
      title: "Firmenlösungen",
      desc: "Maßgeschneiderte Logistikkonzepte für Unternehmen. Langfristige Verträge, dedizierte Fahrzeuge und persönlicher Ansprechpartner.",
      features: [
        "Individuelle Vertragsbedingungen",
        "Festes Fahrzeugkontingent",
        "Monatliche Auswertungen & Berichte",
        "Key-Account-Management",
      ],
    },
  ];

  return (
    <>
      <PageHeader
        title="Unsere Leistungen"
        desc="Professionelle Transportlösungen für jeden Bedarf"
        setPage={setPage}
      />

      <section className="section">
        <div className="section-inner">
          <div className="services-page-grid">
            {services.map((s, i) => (
              <div className="service-card-detailed" key={i}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="service-features">
                  {s.features.map((f, fi) => (
                    <div className="sf-item" key={fi}>
                      <div className="sf-icon">
                        <I.Check s={12} />
                      </div>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-inner">
          <h2>Besondere Anforderungen?</h2>
          <p>
            Rufen Sie uns an oder schreiben Sie uns — wir finden gemeinsam die
            beste Lösung für Ihren Transport.
          </p>
          <button
            className="btn-primary"
            onClick={() => {
              setPage("contact");
              window.scrollTo(0, 0);
            }}
          >
            <I.Phone s={18} /> Jetzt anfragen
          </button>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;