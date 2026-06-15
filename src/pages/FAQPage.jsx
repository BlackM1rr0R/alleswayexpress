import { useState } from "react";
import { useReveal, Particles } from "../utils/animations";
import PageHeader from "../components/PageHeader";
import "../styles/FAQ.css";

const CONTENT = {
  de: {
    ph: {
      title: "FAQ",
      desc: "Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Transportdienstleistungen.",
    },
    searchPlaceholder: "Fragen durchsuchen…",
    allCategories: "Alle Kategorien",
    ctaTitle: "Noch Fragen?",
    ctaDesc: "Unser Team steht Ihnen gerne zur Verfügung. Kontaktieren Sie uns jetzt.",
    ctaBtn: "Kontakt aufnehmen",
    categories: [
      {
        id: "preise",
        label: "Preise & Angebote",
        questions: [
          { q: "Wie berechnen sich die Transportkosten?", a: "Die Kosten richten sich nach Entfernung, Fahrzeugtyp und Gewicht. Sprinter ab 1,90 €/km, LKW 7,5t ab 2,80 €/km, Actros 40t ab 3,90 €/km. Für Seefracht berechnen wir ab 140 €/m³, Luftfracht ab 7,00 €/kg und Schienentransport ab 0,50 €/kg." },
          { q: "Gibt es Mengenrabatte?", a: "Ja, ab 10 Sendungen pro Monat gewähren wir gestaffelte Rabatte von bis zu 20%. Für Firmenkunden mit Rahmenverträgen gelten individuelle Konditionen." },
          { q: "Wie schnell erhalte ich ein Angebot?", a: "In der Regel innerhalb von 2 Stunden. Bei komplexen Anfragen spätestens am nächsten Werktag." },
          { q: "Gibt es versteckte Kosten?", a: "Nein. Unsere Preise sind transparent und inkludieren Maut, Kraftstoff und Grundversicherung. Eventuelle Zusatzleistungen wie Hebebühne oder Expressaufschlag werden vorab kommuniziert." },
        ],
      },
      {
        id: "lieferung",
        label: "Lieferung & Laufzeiten",
        questions: [
          { q: "Wie schnell wird meine Sendung geliefert?", a: "Same-Day Zustellung im Nahbereich (bis 100 km), 24h deutschlandweit per LKW, 48h für Schwertransporte. Luft- und Seefracht je nach Route." },
          { q: "Liefern Sie auch am Wochenende?", a: "Ja, auf Anfrage und gegen Aufpreis liefern wir auch samstags. Sonntagszustellung ist für Expressaufträge möglich." },
          { q: "Was passiert bei einer Lieferverzögerung?", a: "Wir informieren Sie proaktiv per SMS und E-Mail. Bei verschuldeten Verzögerungen erstatten wir einen Teil der Transportkosten." },
          { q: "Kann ich eine Wunschlieferzeit angeben?", a: "Ja, Zeitfenster-Zustellung ist gegen Aufpreis möglich. Bitte bei der Auftragserfassung angeben." },
        ],
      },
      {
        id: "versicherung",
        label: "Versicherung & Sicherheit",
        questions: [
          { q: "Ist meine Sendung versichert?", a: "Alle Transporte sind standardmäßig bis 25.000 € versichert. Höhere Deckungssummen sind auf Anfrage möglich." },
          { q: "Was passiert bei Beschädigung?", a: "Schaden bitte innerhalb von 24 Stunden melden. Nach Prüfung erstatten wir den Warenwert gemäß Versicherungsbedingungen." },
          { q: "Transportieren Sie Gefahrgut?", a: "Ja, wir sind ADR-zertifiziert und transportieren Gefahrgut der Klassen 1–9. Bitte vorab mit uns absprechen." },
        ],
      },
      {
        id: "fahrzeuge",
        label: "Fahrzeuge & Kapazitäten",
        questions: [
          { q: "Welches Fahrzeug ist das richtige für mich?", a: "Bis 1,5t → Sprinter. Bis 5t → LKW 7,5t. Bis 24t → Actros 40t. Für Übersee → Seefracht oder Luftfracht. Unser Team berät Sie kostenlos." },
          { q: "Haben Sie Kühlfahrzeuge?", a: "Ja, wir verfügen über temperaturgeführte Fahrzeuge für Pharma, Lebensmittel und Chemie." },
          { q: "Kann ich ein Fahrzeug für längere Zeit mieten?", a: "Ja, dedizierte Fahrzeuge mit Fahrer sind für Firmenkunden im Rahmenvertrag buchbar." },
        ],
      },
      {
        id: "auftragsabwicklung",
        label: "Auftragsabwicklung",
        questions: [
          { q: "Wie gebe ich einen Auftrag auf?", a: "Online über unser Kontaktformular, per Telefon unter +49 174 180 99 99 oder per E-Mail an info@allesway-express.de." },
          { q: "Kann ich einen Auftrag stornieren?", a: "Ja, bis 2 Stunden vor Abholung kostenlos. Danach fällt eine Stornogebühr an." },
          { q: "Bekomme ich eine Auftragsbestätigung?", a: "Ja, sofort nach Auftragserteilung per E-Mail mit Sendungsnummer und voraussichtlicher Lieferzeit." },
        ],
      },
      {
        id: "international",
        label: "International & Spedition",
        questions: [
          { q: "Liefern Sie auch ins Ausland?", a: "Ja, wir bieten europaweite Transporte, Seefracht weltweit und Luftfracht in alle Länder." },
          { q: "Übernehmen Sie die Zollabwicklung?", a: "Ja, für See- und Luftfracht inklusive. Für EU-Transporte ist kein Zoll erforderlich." },
          { q: "Was ist der Unterschied zwischen FCL und LCL?", a: "FCL (Full Container Load) = kompletter Container für eine Sendung. LCL (Less than Container Load) = Teilladung, die mit anderen Sendungen zusammengeführt wird. LCL ist günstiger bei kleinen Mengen." },
        ],
      },
    ],
  },
  en: {
    ph: {
      title: "FAQ",
      desc: "Find answers to the most frequently asked questions about our transport services.",
    },
    searchPlaceholder: "Search questions…",
    allCategories: "All Categories",
    ctaTitle: "Still have questions?",
    ctaDesc: "Our team is happy to help. Get in touch with us now.",
    ctaBtn: "Contact us",
    categories: [
      {
        id: "prices",
        label: "Prices & Quotes",
        questions: [
          { q: "How are transport costs calculated?", a: "Costs depend on distance, vehicle type and weight. Sprinter from €1.90/km, 7.5t truck from €2.80/km, Actros 40t from €3.90/km. Sea freight from €140/m³, air freight from €7.00/kg, rail transport from €0.50/kg." },
          { q: "Are volume discounts available?", a: "Yes, from 10 shipments per month we offer tiered discounts of up to 20%. Corporate customers with framework contracts receive individual rates." },
          { q: "How quickly will I receive a quote?", a: "Usually within 2 hours. For complex requests, by the next business day at the latest." },
          { q: "Are there any hidden costs?", a: "No. Our prices are transparent and include tolls, fuel, and basic insurance. Any additional services such as tail lifts or express surcharges are communicated in advance." },
        ],
      },
      {
        id: "delivery",
        label: "Delivery & Lead Times",
        questions: [
          { q: "How quickly will my shipment be delivered?", a: "Same-day delivery in the local area (up to 100 km), 24h nationwide by truck, 48h for heavy transport. Air and sea freight depends on the route." },
          { q: "Do you deliver on weekends?", a: "Yes, Saturday delivery is available on request at an additional charge. Sunday delivery is possible for express orders." },
          { q: "What happens if there is a delivery delay?", a: "We will proactively notify you by SMS and email. In the event of delays caused by us, we will refund part of the transport costs." },
          { q: "Can I specify a preferred delivery time?", a: "Yes, time-window delivery is available for an additional charge. Please specify when placing your order." },
        ],
      },
      {
        id: "insurance",
        label: "Insurance & Safety",
        questions: [
          { q: "Is my shipment insured?", a: "All transports are insured as standard up to €25,000. Higher coverage amounts are available on request." },
          { q: "What happens if goods are damaged?", a: "Please report damage within 24 hours. After review, we will reimburse the value of the goods in accordance with the insurance terms." },
          { q: "Do you transport hazardous goods?", a: "Yes, we are ADR-certified and transport hazardous goods of classes 1–9. Please coordinate with us in advance." },
        ],
      },
      {
        id: "vehicles",
        label: "Vehicles & Capacities",
        questions: [
          { q: "Which vehicle is right for me?", a: "Up to 1.5t → Sprinter. Up to 5t → 7.5t truck. Up to 24t → Actros 40t. For overseas → sea or air freight. Our team will advise you free of charge." },
          { q: "Do you have refrigerated vehicles?", a: "Yes, we have temperature-controlled vehicles for pharmaceuticals, food and chemicals." },
          { q: "Can I hire a vehicle for a longer period?", a: "Yes, dedicated vehicles with drivers can be booked for corporate customers under a framework contract." },
        ],
      },
      {
        id: "orders",
        label: "Order Processing",
        questions: [
          { q: "How do I place an order?", a: "Online via our contact form, by phone at +49 174 180 99 99, or by email at info@allesway-express.de." },
          { q: "Can I cancel an order?", a: "Yes, free of charge up to 2 hours before pickup. After that, a cancellation fee applies." },
          { q: "Will I receive an order confirmation?", a: "Yes, immediately after placing the order by email with a tracking number and estimated delivery time." },
        ],
      },
      {
        id: "international",
        label: "International & Freight",
        questions: [
          { q: "Do you deliver abroad?", a: "Yes, we offer Europe-wide transport, sea freight worldwide, and air freight to all countries." },
          { q: "Do you handle customs clearance?", a: "Yes, included for sea and air freight. No customs required for EU transports." },
          { q: "What is the difference between FCL and LCL?", a: "FCL (Full Container Load) = a complete container for one shipment. LCL (Less than Container Load) = partial load consolidated with other shipments. LCL is cheaper for small quantities." },
        ],
      },
    ],
  },
};

function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className={`faq-accordion-item${isOpen ? " faq-accordion-item--open" : ""}`}>
      <button className="faq-accordion-question" onClick={onToggle} aria-expanded={isOpen}>
        <span className="faq-accordion-question-text">{question}</span>
        <span className="faq-accordion-chevron">{isOpen ? "▲" : "▼"}</span>
      </button>
      <div className="faq-accordion-answer-wrap" style={{ maxHeight: isOpen ? "600px" : "0" }}>
        <div className="faq-accordion-answer">{answer}</div>
      </div>
    </div>
  );
}

function CategoryBlock({ category, filtered }) {
  const [openIndex, setOpenIndex] = useState(null);
  const items = filtered !== null ? filtered : category.questions;
  if (items.length === 0) return null;
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);
  return (
    <div className="faq-category-block">
      <div className="faq-category-eyebrow">{category.label}</div>
      <div className="faq-accordion">
        {items.map((item, i) => (
          <AccordionItem key={i} question={item.q} answer={item.a} isOpen={openIndex === i} onToggle={() => toggle(i)} />
        ))}
      </div>
    </div>
  );
}

function FAQPage({ setPage, lang = "de" }) {
  const t = CONTENT[lang] || CONTENT.de;
  const categories = t.categories;
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const refFilter  = useReveal();
  const refContent = useReveal();
  const refCta     = useReveal();

  const searchLower = search.trim().toLowerCase();
  const getFiltered = (cat) => {
    let items = cat.questions;
    if (activeCategory !== "all" && cat.id !== activeCategory) return [];
    if (searchLower) items = items.filter(item => item.q.toLowerCase().includes(searchLower) || item.a.toLowerCase().includes(searchLower));
    return items;
  };
  const hasAnyResults = categories.some(cat => getFiltered(cat).length > 0);

  return (
    <>
      <PageHeader title={t.ph.title} desc={t.ph.desc} setPage={setPage} lang={lang} page="faq" />

      <div className="faq-page-bg">
        <div className="faq-orb-1" />
        <div className="faq-orb-2" />
        <div className="faq-orb-3" />
        <div className="faq-grid-bg" />
        <div className="faq-scan-line" />
      </div>
      <Particles />

      {/* ── Search & Filter ── */}
      <section className="faq-filter-section reveal-section" ref={refFilter}>
        <div className="faq-filter-inner">
          <div className="faq-search-wrap">
            <span className="faq-search-icon">🔍</span>
            <input
              className="faq-search-input"
              type="text"
              placeholder={t.searchPlaceholder}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button className="faq-search-clear" onClick={() => setSearch("")} aria-label="Clear">✕</button>
            )}
          </div>
          <div className="faq-category-pills">
            <button className={`faq-pill${activeCategory === "all" ? " faq-pill--active" : ""}`} onClick={() => setActiveCategory("all")}>
              {t.allCategories}
            </button>
            {categories.map(cat => (
              <button key={cat.id} className={`faq-pill${activeCategory === cat.id ? " faq-pill--active" : ""}`} onClick={() => setActiveCategory(cat.id)}>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Content ── */}
      <section className="faq-content-section reveal-section" ref={refContent}>
        <div className="faq-content-inner">
          {hasAnyResults ? (
            categories.map(cat => {
              const filtered = getFiltered(cat);
              return (
                <CategoryBlock
                  key={cat.id}
                  category={cat}
                  filtered={filtered.length < cat.questions.length || searchLower || activeCategory !== "all" ? filtered : null}
                />
              );
            })
          ) : (
            <div className="faq-no-results">
              <span className="faq-no-results-icon">🔍</span>
              <p>{lang === "de" ? "Keine Ergebnisse gefunden. Bitte ändern Sie Ihre Suche." : "No results found. Please adjust your search."}</p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="faq-cta-section reveal-section" ref={refCta}>
        <div className="faq-cta-inner">
          <h2 className="faq-cta-title">{t.ctaTitle}</h2>
          <p className="faq-cta-desc">{t.ctaDesc}</p>
          <button className="faq-cta-btn" onClick={() => setPage("contact")}>{t.ctaBtn}</button>
        </div>
      </section>
    </>
  );
}

export default FAQPage;
