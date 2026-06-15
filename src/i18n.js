const T = {
  de: {
    /* ── StatsBar ── */
    stats: [
      { num: "500+",   label: "Fahrzeuge aktiv" },
      { num: "200+",  label: "Städte abgedeckt" },
      { num: "24h",   label: "Lieferzeit DE-weit" },
      { num: "99,7%", label: "Pünktlichkeitsrate" },
    ],

    /* ── PageHeader breadcrumb ── */
    home_label: "Startseite",

    /* ── PageHeaders ── */
    ph: {
      services: { title: "Unsere Leistungen",  desc: "Professionelle Transportlösungen für jeden Bedarf" },
      cargo:    { title: "Sendungen",           desc: "Verfolgen Sie alle Sendungen in Echtzeit" },
      about:    { title: "Über uns",            desc: "Erfahren Sie mehr über Allesway Express" },
      contact:  { title: "Kontakt",             desc: "Nehmen Sie Kontakt mit uns auf — wir helfen Ihnen gerne" },
    },

    /* ── Footer ── */
    footer: {
      tagline: "Ihr zuverlässiger Partner für Transporte und Logistik in ganz Deutschland. Schnell, sicher und professionell — seit 2025.",
      nav_title: "Navigation",
      svc_title: "Leistungen",
      cnt_title: "Kontakt",
      address: "Schulplatz 2, 76744 Wörth",
      copyright: "© 2026 Allesway Express. Alle Rechte vorbehalten.",
      tagline2: "Mit Leidenschaft aus Wörth am Rhein",
      send_msg: "Nachricht senden",
      svc_links: ["Express-Zustellung", "LKW-Transport", "Sprinter-Service", "Firmenlösungen", "Versicherter Transport"],
    },

    /* ── HomePage ── */
    home: {
      badge:     "Ihr zuverlässiger Transportpartner in Deutschland",
      title1:    "Ihre Fracht in ",
      title_hl:  "sicheren",
      title2:    " Händen",
      desc:      "Mit unserer modernen Flotte aus LKW und Sprinter-Fahrzeugen bieten wir schnelle, sichere Transportlösungen — deutschlandweit innerhalb von 24 Stunden.",
      btn_quote: "Angebot anfragen",
      btn_track: "Sendung verfolgen",

      calc_title:    "Preisrechner",
      calc_free:     "Kostenlos",
      calc_distance: "Entfernung",
      calc_est:      "Geschätzte Kosten",
      calc_note:     "inkl. MwSt. · unverbindlich",
      calc_insured:  "Vollversichert",
      calc_cta:      "Verbindliches Angebot",

      process_eyebrow:   "Ablauf",
      process_title:     "In 3 Schritten zum Transport",
      process_subtitle:  "Einfach, schnell und transparent — so läuft ein Auftrag bei Allesway Express ab.",
      process_steps: [
        { title: "Anfrage stellen",          desc: "Online, per Telefon oder E-Mail — wir nehmen Ihren Auftrag schnell und unkompliziert entgegen und erstellen ein persönliches Angebot." },
        { title: "Fahrzeug wird geschickt",  desc: "Das passende Fahrzeug — Sprinter oder LKW — kommt pünktlich zum angegebenen Abholort. Unsere Fahrer sind zuverlässig und erfahren." },
        { title: "Pünktliche Lieferung",     desc: "Wir liefern sicher und termingerecht ans Ziel. Sie erhalten eine Zustellbestätigung und können die Sendung in Echtzeit verfolgen." },
      ],

      fleet_eyebrow:   "Unsere Flotte",
      fleet_title:     "Modernste Fahrzeuge für jeden Einsatz",
      fleet_subtitle:  "Von wendigen Sprinter-Vans bis zu schweren 40-Tonnern — unsere 500+ Fahrzeuge sind immer einsatzbereit.",
      fleet_labels: ["LKW — Mercedes Atego", "Sprinter-Service", "Schwertransport — Actros", "Sprinter-Flotte", "Atego-Fuhrpark", "Fernverkehr & Spedition"],

      svc_eyebrow:   "Unsere Leistungen",
      svc_title:     "Für jeden Transportbedarf die richtige Lösung",
      svc_subtitle:  "Von der Expresslieferung bis zum Schwertransport — wir bewegen Ihre Fracht schnell, sicher und zuverlässig.",
      svc_more:      "Mehr erfahren",
      services: [
        { title: "Express-Zustellung",        desc: "Taggleiche Lieferung im Nahbereich. Für dringende Aufträge garantieren wir Zustellung innerhalb von 3 Stunden." },
        { title: "LKW-Transport",             desc: "Mit unseren 40-Tonnern bewegen wir auch große Ladungen. Ideal für Industrie, Bau und Großhandel." },
        { title: "Sprinter-Service",           desc: "Flexible Zustellung bis zu 1,5 Tonnen — schnell, direkt und zuverlässig zu Ihrem Empfänger." },
        { title: "Versicherter Transport",     desc: "Jede Sendung ist vollversichert. Im Schadensfall erhalten Sie eine vollständige Erstattung." },
        { title: "Deutschlandweite Lieferung", desc: "Regelmäßige Fahrten in alle 16 Bundesländer — von der Nordsee bis zu den Alpen." },
        { title: "24/7 Kundenservice",         desc: "Unser Service-Team ist rund um die Uhr für Sie erreichbar — per Telefon, E-Mail und Chat." },
      ],

      why_eyebrow:   "Warum wir?",
      why_title:     "Allesway Express — der Unterschied",
      why_subtitle:  "Langjährige Erfahrung, professionelles Team und modernste Technik für Ihre Logistik.",
      why_cards: [
        { title: "500+ Fahrzeuge",    desc: "Unser Fuhrpark umfasst LKW, Sprinter und Spezialfahrzeuge für jeden Einsatz." },
        { title: "Vollversicherung", desc: "Alle Transporte sind vollständig versichert — für Ihre absolute Sicherheit." },
        { title: "Pünktlichkeit",    desc: "99,7% pünktliche Zustellrate — Zuverlässigkeit, auf die Sie zählen können." },
        { title: "Erfahrenes Team",  desc: "Geschulte Fahrer und Logistikexperten mit über 15 Jahren Branchenerfahrung." },
      ],

      map_eyebrow: "Reichweite",
      map_title:   "Überall in Deutschland — und darüber hinaus",
      map_desc:    "Von Wörth am Rhein aus verbinden wir über 200 Städte in ganz Deutschland mit regelmäßigen Fahrten, festen Abfahrtszeiten und pünktlicher Zustellung.",
      map_stats: [
        { num: "200+", label: "Städte abgedeckt" },
        { num: "16",   label: "Bundesländer" },
        { num: "24h",  label: "Deutschlandweit" },
        { num: "500+",  label: "Fahrzeuge aktiv" },
      ],

      partners_label: "Vertrauen von führenden Unternehmen in Deutschland",

      testi_eyebrow:  "Kundenstimmen",
      testi_title:    "Was unsere Kunden sagen",
      testi_subtitle: "Tausende zufriedene Kunden vertrauen täglich auf Allesway Express.",
      testimonials: [
        { text: "Allesway Express liefert immer pünktlich und zuverlässig. Die Preise sind fair und der Service erstklassig. Absolut empfehlenswert für Geschäftskunden!", name: "Thomas Berger",   role: "Geschäftsführer, Berger Möbelhaus",  initials: "TB" },
        { text: "Der Express-Service ist hervorragend. Meine dringende Lieferung war in unter 3 Stunden da. So einen zuverlässigen Partner findet man selten.",              name: "Sabine Keller",   role: "Inhaberin, Keller Online-Shop",     initials: "SK" },
        { text: "Seit 5 Jahren arbeiten wir mit Allesway zusammen. Professionelles Team, versicherte Transporte und immer erreichbar. Die beste Entscheidung für uns!",      name: "Markus Hoffmann", role: "Betriebsleiter, Hoffmann AG",       initials: "MH" },
      ],

      cta_title:  "Bereit zum Versenden?",
      cta_desc:   "Kontaktieren Sie uns jetzt und lassen Sie Ihre Fracht schnell und sicher liefern. 15% Rabatt auf Ihren ersten Auftrag!",
      cta_btn1:   "Kontakt aufnehmen",
      cta_btn2:   "Sendungen ansehen",

      industries_eyebrow:   "Branchen",
      industries_title:     "Wir beliefern jede Branche",
      industries_subtitle:  "Von der Baustelle bis zum Onlineshop — Allesway Express ist der richtige Partner für alle Wirtschaftszweige.",
      industries: [
        { icon: "🏗️", title: "Bau & Handwerk",            desc: "Baustoffe, Maschinen und Werkzeuge — terminkritisch auf jede Baustelle." },
        { icon: "🛒", title: "Handel & Retail",            desc: "Warenlieferungen für Einzel- und Großhandel, Filial- und Palettentransporte." },
        { icon: "💊", title: "Pharma & Medizin",           desc: "Temperaturgeführte Transporte für Arzneimittel und Medizinprodukte." },
        { icon: "🍕", title: "Lebensmittel & Gastronomie", desc: "Frische- und Kühlkettentransporte mit lückenlosem Protokoll." },
        { icon: "🚗", title: "Automotive",                 desc: "Ersatzteile, Zubehör und Baugruppen für die Automobilindustrie." },
        { icon: "📦", title: "E-Commerce & Fulfillment",   desc: "Schnelle Paketzustellung und Retourenabwicklung für Online-Shops." },
      ],

      home_faq_eyebrow:  "FAQ",
      home_faq_title:    "Häufig gestellte Fragen",
      home_faq_subtitle: "Alles, was Sie über Transporte mit Allesway Express wissen möchten.",
      home_faqs: [
        { q: "Wie schnell kann eine Express-Lieferung zugestellt werden?", a: "Im Nahbereich bis 100 km garantieren wir Zustellung innerhalb von 3 Stunden. Deutschlandweit in der Regel 24 Stunden." },
        { q: "Wie erhalte ich ein Angebot?",                              a: "Online, per Telefon oder E-Mail — innerhalb von 30 Minuten erstellen wir Ihnen ein persönliches Angebot." },
        { q: "Sind meine Waren versichert?",                              a: "Ja, jede Sendung ist automatisch vollversichert. Auf Wunsch bieten wir eine erweiterte Police für wertvolle Güter." },
        { q: "Welche Fahrzeuge stehen zur Verfügung?",                    a: "Von Sprinter-Vans (1,5 t) bis 40-Tonnen-Sattelzügen — wir haben für jeden Auftrag das passende Fahrzeug." },
        { q: "Kann ich meine Sendung in Echtzeit verfolgen?",             a: "Ja, nach Auftragsbestätigung erhalten Sie eine Sendungsnummer für die Echtzeit-Verfolgung auf unserer Website." },
        { q: "Bieten Sie auch Firmenkonditionen an?",                     a: "Ja, für Geschäftskunden bieten wir maßgeschneiderte Verträge, feste Fahrzeugkontingente und monatliche Reportings." },
      ],

      pricing_eyebrow:  "Preisübersicht",
      pricing_title:    "Faire Preise — kein versteckter Aufschlag",
      pricing_subtitle: "Transparente Festpreise für jeden Transport. Das endgültige Angebot erhalten Sie kostenlos und unverbindlich.",
      pricing_from:     "ab",
      pricing_cta:      "Angebot anfordern",
      pricing_popular:  "Beliebt",
      pricing_cards: [
        { icon: "🚐", name: "Sprinter",         price: "1,90", unit: "€/km", note: "Bis 1,5 t · Lokal & Regional",  features: ["Same-Day Lieferung", "Nahbereich bis 100 km", "Flexible Abholzeiten", "Vollversichert"] },
        { icon: "🚛", name: "LKW 7,5 t",        price: "2,80", unit: "€/km", note: "Bis 5 t · Regional & DE",       features: ["24h Lieferzeit DE", "Koffer- & Planaufbau", "GPS Echtzeit-Tracking", "Versicherung inkl."], badge: "Beliebt" },
        { icon: "🚚", name: "Actros 40 t",       price: "3,90", unit: "€/km", note: "Bis 24 t · Deutschlandweit",   features: ["Schwertransport bis 24 t", "Wechselbrückensystem", "48h Lieferzeit", "Vollkaskoversicherung"] },
        { icon: "🚢", name: "Seefracht",          price: "140",  unit: "€/m³", note: "FCL & LCL · Weltweit",         features: ["FCL & LCL Sendungen", "Zollabwicklung inkl.", "Hafen HH / Bremen", "Laufzeit 10–30 Tage"] },
        { icon: "✈️", name: "Luftfracht",         price: "7,00", unit: "€/kg", note: "Express · International",      features: ["Express-Luftfracht weltweit", "Tür-zu-Tür-Service", "Laufzeit 1–5 Tage", "Vollversicherung inkl."] },
        { icon: "🚂", name: "Schienentransport",  price: "0,50", unit: "€/kg", note: "Klimafreundlich · Europa",      features: ["Klimafreundliche Alternative", "Europa-weit verfügbar", "Hohe Kapazitäten", "Zuverlässige Laufzeiten"] },
      ],

      network_eyebrow:  "Netzwerk",
      network_title:    "200+ Städte in allen 16 Bundesländern",
      network_subtitle: "Von der Nordsee bis zu den Alpen — ein dichtes Liniennetz mit täglichen Abfahrten.",
      network_cities:   ["Berlin","Hamburg","München","Köln","Frankfurt","Stuttgart","Düsseldorf","Dortmund","Essen","Leipzig","Bremen","Dresden","Hannover","Nürnberg","Karlsruhe","Wiesbaden","Freiburg","Mannheim","Augsburg","Bonn","Wuppertal","Bielefeld","Bochum","Münster","Kiel"],
      network_stats: [
        { num: "200+", label: "Städte aktiv" },
        { num: "16",   label: "Bundesländer" },
        { num: "500+",  label: "Fahrzeuge" },
        { num: "24/7", label: "Kundenservice" },
      ],
    },

    /* ── ServicesPage ── */
    services: {
      tabs_services: [
        { tagline: "3-Stunden-Garantie im Nahbereich",     title: "Express-Zustellung",      desc: "Dringende Sendungen erfordern schnelles Handeln. Unser Express-Service garantiert die Zustellung innerhalb von 3 Stunden im Umkreis von 100 km und am selben Tag deutschlandweit — wann immer Sie es brauchen.", features: ["3-Stunden-Garantie im Nahbereich","Echtzeit-Tracking per SMS & App","Prioritätsbehandlung im Lager","Persönliche Zustellbestätigung","7 Tage die Woche verfügbar"], hl: { num: "3h", label: "Zustellgarantie" } },
        { tagline: "Bis 24 Tonnen Nutzlast, deutschlandweit", title: "LKW-Fernverkehr",       desc: "Unsere modernen 7,5t bis 40t LKW transportieren Ihre schweren und großvolumigen Güter quer durch Deutschland — von Flensburg bis Garmisch, zuverlässig und pünktlich.", features: ["7,5t bis 40t Nutzlast","Temperaturgeführte Transporte","Wechselbrücken & Container","Erfahrene Berufskraftfahrer","GPS-Tracking in Echtzeit"], hl: { num: "40t", label: "Max. Nutzlast" } },
        { tagline: "Wendige Lösung bis 1,5 Tonnen",         title: "Sprinter-Kurierdienst",  desc: "Für Ladungen bis 1,5 Tonnen setzen wir unsere wendigen Sprinter-Fahrzeuge ein — ideal für Stückgut, Pakete und eilige Teilladungen. Flexibel, schnell und direkt zu Ihrem Empfänger.", features: ["Bis 1,5t Zuladung","Hebebühne auf Wunsch","Same-Day & Next-Day Optionen","Flexible Abhol- & Lieferzeiten","Avisierung vor Zustellung"], hl: { num: "1,5t", label: "Max. Zuladung" } },
        { tagline: "Vollversicherung für jede Sendung",     title: "Versicherter Transport", desc: "Jede Sendung ist bei uns automatisch vollversichert. Wir übernehmen die volle Haftung und bieten auf Wunsch eine erweiterte Allgefahren-Police für besonders wertvolle oder empfindliche Güter.", features: ["Grundversicherung inklusive","Erweiterte Allgefahren-Police","Schnelle Schadensregulierung","Transportbegleitung auf Wunsch","Lückenloser Versicherungsschutz"], hl: { num: "100%", label: "Versichert" } },
        { tagline: "200+ Städte, alle 16 Bundesländer",     title: "Deutschlandweite Logistik", desc: "Unser Liniennetz verbindet über 200 Städte in allen 16 Bundesländern mit regelmäßigen Fahrten und festen Abfahrtszeiten. Von der Küste bis in die Berge — wir sind überall.", features: ["Alle 16 Bundesländer abgedeckt","Feste Linienpläne & Fahrpläne","Mengenrabatte ab 10 Sendungen","Umschlagspunkte & Depots","Sammel- & Einzelladungen"], hl: { num: "200+", label: "Städte" } },
        { tagline: "Maßgeschneiderte Logistikkonzepte",     title: "Firmenlösungen",         desc: "Maßgeschneiderte Logistikkonzepte für Unternehmen jeder Größe. Langfristige Verträge, dedizierte Fahrzeuge, Key-Account-Management und individuelle Reporting-Lösungen.", features: ["Individuelle Vertragsbedingungen","Festes Fahrzeugkontingent","Monatliche Auswertungen","Persönlicher Key-Account-Manager","API-Integration für ERP-Systeme"], hl: { num: "B2B", label: "Speziallösung" } },
      ],
      btn_quote:   "Jetzt anfragen",
      btn_phone:   "+49 174 180 99 99",
      overview_eyebrow: "Alle Leistungen",
      overview_title:   "Was wir anbieten",
      cta_title:   "Besondere Anforderungen?",
      cta_desc:    "Rufen Sie uns an oder schreiben Sie uns — wir finden gemeinsam die beste Lösung für Ihren Transport.",
      cta_btn2:    "Sendung verfolgen",

      fleet_eyebrow:  "Unser Fuhrpark",
      fleet_title:    "Das richtige Fahrzeug für jeden Auftrag",
      fleet_subtitle: "500+ moderne, GPS-überwachte Fahrzeuge — vollversichert und immer einsatzbereit.",
      fleet_cards: [
        { icon: "🚐", name: "Mercedes Sprinter", cap: "1,5 t",   vol: "10 m³",  range: "Lokal & Regional",   color: "gold",    price: "ab 1,90 €/km",   specs: ["Bis 1.500 kg Nutzlast", "10 m³ Laderaum", "Hebebühne auf Anfrage", "Same-Day Zustellung"] },
        { icon: "🚛", name: "LKW 7,5 t",         cap: "5 t",     vol: "35 m³",  range: "Regional & DE",      color: "blue",    price: "ab 2,80 €/km",   specs: ["Bis 5.000 kg Nutzlast", "35 m³ Laderaum", "Koffer- & Planenaufbau", "24h Lieferzeit DE"] },
        { icon: "🚚", name: "Actros 40 t",        cap: "24 t",    vol: "90 m³",  range: "Deutschlandweit",    color: "green",   price: "ab 3,90 €/km",   specs: ["Bis 24.000 kg Nutzlast", "90 m³ Laderaum", "Wechselbrückensystem", "GPS Echtzeit-Tracking"] },
        { icon: "🚢", name: "Seefracht",           cap: "unlim.", vol: "FCL/LCL", range: "Weltweit",           color: "purple",  price: "ab 140 €/m³",    specs: ["FCL & LCL Sendungen", "Zollabwicklung inklusive", "Hafen Hamburg / Bremen", "Laufzeit 10–30 Tage"] },
        { icon: "✈️", name: "Luftfracht",          cap: "unlim.", vol: "kg-Basis", range: "International",     color: "teal",    price: "ab 7,00 €/kg",   specs: ["Express-Luftfracht weltweit", "Tür-zu-Tür-Service", "Laufzeit 1–5 Tage", "Vollversicherung inkl."] },
        { icon: "🚂", name: "Schienentransport",   cap: "unlim.", vol: "kg-Basis", range: "Europa & DE",       color: "orange",  price: "ab 0,50 €/kg",   specs: ["Klimafreundliche Alternative", "Europa-weit verfügbar", "Hohe Kapazitäten", "Zuverlässige Laufzeiten"] },
      ],

      process_eyebrow: "Ablauf",
      process_title:   "So einfach funktioniert es",
      process_steps_svc: [
        { num: "01", title: "Anfrage stellen",     desc: "Online-Formular, Telefon oder E-Mail — einfach und kostenlos." },
        { num: "02", title: "Angebot erhalten",    desc: "In 30 Minuten ein individuelles Angebot mit Festpreis." },
        { num: "03", title: "Abholung beauftragen",desc: "Wir schicken das passende Fahrzeug pünktlich zu Ihnen." },
        { num: "04", title: "Sendung verfolgen",   desc: "Echtzeit-Tracking bis zur erfolgreichen Zustellung." },
      ],

      compare_eyebrow: "Vergleich",
      compare_title:   "Welches Fahrzeug passt zu Ihnen?",
      compare_heads:   ["Merkmal", "Sprinter", "LKW 7,5 t", "Actros 40 t"],
      compare_rows: [
        { label: "Nutzlast",    vals: ["bis 1,5 t",     "bis 5 t",       "bis 24 t"] },
        { label: "Laderaum",    vals: ["10 m³",          "35 m³",         "90 m³"] },
        { label: "Lieferzeit",  vals: ["Same-Day",       "24 h",          "48 h"] },
        { label: "Einsatz",     vals: ["Lokal/Regional", "Regional/DE",   "Deutschlandweit"] },
        { label: "Hebebühne",   vals: ["Auf Anfrage",    "Inklusive",     "Inklusive"] },
        { label: "GPS Tracking",vals: ["✓",              "✓",             "✓"] },
        { label: "Versicherung",vals: ["✓",              "✓",             "✓"] },
      ],

      zones_eyebrow: "Einsatzgebiete",
      zones_title:   "Wo wir täglich unterwegs sind",
      zones_subtitle:"Von unserem Standort in Wörth am Rhein beliefern wir ganz Deutschland.",
      zones: [
        { region: "Norddeutschland",  cities: "Hamburg · Bremen · Hannover · Kiel · Rostock",          icon: "🌊" },
        { region: "Westdeutschland",  cities: "Köln · Düsseldorf · Dortmund · Essen · Münster",         icon: "🏭" },
        { region: "Mitteldeutschland",cities: "Frankfurt · Wiesbaden · Mainz · Heidelberg · Mannheim",   icon: "🌆" },
        { region: "Süddeutschland",   cities: "München · Stuttgart · Nürnberg · Augsburg · Freiburg",    icon: "⛰️" },
        { region: "Ostdeutschland",   cities: "Berlin · Leipzig · Dresden · Magdeburg · Erfurt",         icon: "🏛️" },
        { region: "Südwest (HQ)",     cities: "Wörth am Rhein · Karlsruhe · Landau · Germersheim",       icon: "🏠" },
      ],

      svc_testi_eyebrow: "Kundenstimmen",
      svc_testi_title:   "Was Geschäftskunden sagen",
      svc_testis: [
        { text: "Der Express-Service ist unschlagbar. Meine dringende Lieferung kam in genau 2,5 Stunden an. Nie wieder ein anderer Anbieter!", name: "Klaus Fischer", role: "Inhaber, Elektro Fischer GmbH",     initials: "KF" },
        { text: "Für unsere Maschinentransporte setzen wir seit Jahren auf Allesway. Die LKW-Flotte ist top, die Fahrer absolut professionell.",  name: "Petra Wolf",   role: "Logistikleiterin, Wolf Industrie",  initials: "PW" },
        { text: "Dank der Firmenlösung haben wir feste Fahrzeuge reserviert. Spart enorm viel Zeit und die Konditionen sind super fair.",         name: "Daniel Braun", role: "COO, Braun Handel AG",              initials: "DB" },
      ],
    },

    /* ── CargoPage ── */
    cargo: {
      track_label:       "Sendungsverfolgung",
      track_title:       "Ihre Sendungsnummer eingeben",
      track_desc:        "Geben Sie die Sendungsnummer aus Ihrer Auftragsbestätigung ein, um den aktuellen Status zu sehen.",
      track_placeholder: "z.B. AW-10042, AW-10155 ...",
      track_btn:         "Verfolgen",
      track_notfound:    "Keine Sendung mit dieser Nummer gefunden. Bitte prüfen Sie die Eingabe.",
      track_stages:      ["Auftrag bestätigt", "Abgeholt", "Unterwegs", "Zugestellt"],
      progress_label:    "abgeschlossen",

      all_title:       "Alle Sendungen",
      search_placeholder: "Sendungsnummer, Stadt oder Empfänger suchen...",
      filters: ["Alle", "Unterwegs", "Zugestellt", "Wartend", "In Bearbeitung"],
      status: { unterwegs: "Unterwegs", zugestellt: "Zugestellt", wartend: "Wartend", verarbeitung: "In Bearbeitung" },
      card_from: "Von", card_to: "Nach", card_weight: "Gewicht", card_vehicle: "Fahrzeug", card_goods: "Ware", card_receiver: "Empfänger",
      empty_title: "Keine Sendungen gefunden",
      empty_desc:  "Versuchen Sie es mit einem anderen Suchbegriff oder ändern Sie den Filter.",
      result_count1: "Sendung",
      result_count2: "en",
      result_page:   "gefunden — Seite",
      result_of:     "von",
      track_meta: { receiver: "Empfänger", vehicle: "Fahrzeug", weight: "Gewicht", goods: "Ware" },

      live_eyebrow: "Live-Dashboard",
      live_title:   "Sendungsübersicht in Echtzeit",
      live_labels:  { total: "Sendungen gesamt", unterwegs: "Unterwegs", zugestellt: "Zugestellt", wartend: "Wartend/In Bearbeitung" },

      info_eyebrow: "Sendungsinfos",
      info_title:   "Alles über Ihre Sendung",
      info_cards: [
        { icon: "📍", title: "Echtzeit-Tracking", desc: "Verfolgen Sie jede Sendung live mit Ihrer Sendungsnummer — jederzeit und überall." },
        { icon: "🔔", title: "SMS-Benachrichtigung", desc: "Automatische SMS-Updates bei Statusänderungen — Abholung, unterwegs, Zustellung." },
        { icon: "📋", title: "Digitale Dokumentation", desc: "Alle Lieferscheine und Belege digital verfügbar. DSGVO-konform gespeichert." },
        { icon: "🛡️", title: "Vollversicherung",     desc: "Jede Sendung ist automatisch vollversichert — ohne Aufpreis." },
      ],

      how_eyebrow: "So funktioniert's",
      how_title:   "Tracking in 4 einfachen Schritten",
      how_steps: [
        { num: "01", icon: "📋", title: "Auftrag erteilen",        desc: "Sie erteilen uns Ihren Transportauftrag online, per Telefon oder E-Mail — schnell und unkompliziert." },
        { num: "02", icon: "📱", title: "Sendungsnummer erhalten",  desc: "Direkt nach Auftragsbestätigung erhalten Sie Ihre persönliche Sendungsnummer per E-Mail und SMS." },
        { num: "03", icon: "📍", title: "Live verfolgen",           desc: "Geben Sie die Nummer oben ein und sehen Sie den aktuellen Standort Ihrer Fracht in Echtzeit." },
        { num: "04", icon: "✅", title: "Zustellung bestätigt",     desc: "Sie erhalten automatisch eine Zustellbestätigung — inklusive Foto und Unterschrift des Empfängers." },
      ],

      types_eyebrow:  "Frachtarten",
      types_title:    "Was wir transportieren",
      types_subtitle: "Von Paketen bis Schwertransporten — wir haben das richtige Fahrzeug für jede Ware.",
      cargo_types: [
        { icon: "📦", title: "Pakete & Stückgut",    desc: "Einzelsendungen, Pakete und Stückgut bis 1.500 kg. Schnell, direkt, versichert." },
        { icon: "🪑", title: "Möbel & Einrichtung",  desc: "Professioneller Möbeltransport mit erfahrenen Trägern und Schutzdecken." },
        { icon: "⚙️", title: "Maschinen & Geräte",   desc: "Schwere Industriemaschinen mit Spezialhebebühnen und Sicherungssystemen." },
        { icon: "❄️", title: "Kühl- & Frischware",   desc: "Temperaturgeführte Transporte mit lückenloser Kühlkettendokumentation." },
        { icon: "🏗️", title: "Baustoffe & Material", desc: "Baumaterial, Kies, Stahlträger und Bauelemente in großen Mengen und Gewichten." },
        { icon: "🛡️", title: "Wertgüter & Kunst",   desc: "Hochwertige Waren und Kunstobjekte mit erweiterter Allgefahren-Versicherung." },
      ],
    },

    /* ── AboutPage ── */
    about: {
      intro_h2:   "Ihr Partner für zuverlässige Transporte in ganz Deutschland",
      intro_p1:   "Allesway Express wurde in Wörth am Rhein gegründet und hat sich schnell zu einem der führenden regionalen Transportunternehmen entwickelt. Mit über 500 Fahrzeugen — darunter moderne LKW und Sprinter — bedienen wir Kunden in allen 16 Bundesländern.",
      intro_p2:   "Unser Erfolgsrezept: Zuverlässigkeit, Transparenz und ein persönlicher Ansprechpartner für jeden Kunden. Wir verstehen, dass hinter jeder Sendung ein wichtiger Auftrag steht — und behandeln ihn entsprechend.",
      features:   ["Gegründet 2025","500+ LKW & Sprinter","1000+ Mitarbeiter","200+ Städte abgedeckt","ISO 9001 zertifiziert","24/7 Kundenservice","Standort Wörth am Rhein","Vollversicherung inklusive"],
      contact_btn: "Kontakt aufnehmen",

      timeline_eyebrow: "Unsere Geschichte",
      timeline_title:   "Von Wörth am Rhein in ganz Deutschland",
      timeline: [
        { year: "Jan. 2025", title: "Gründung",          desc: "Allesway Express wird in Wörth am Rhein mit einer modernen Flotte gegründet." },
        { year: "Apr. 2025", title: "Expansion",          desc: "Erweiterung der Flotte auf 30 Fahrzeuge. Erste LKW im Einsatz für Schwertransporte." },
        { year: "Aug. 2025", title: "ISO-Zertifizierung", desc: "Zertifizierung nach ISO 9001. Eröffnung des neuen Logistikzentrums in Wörth." },
        { year: "Dez. 2025", title: "Marktführer",        desc: "500+ Fahrzeuge, 1000+ Mitarbeiter und Zustellungen in über 200 Städten deutschlandweit." },
      ],

      team_eyebrow:  "Unser Team",
      team_title:    "Die Menschen hinter Allesway Express",
      team_subtitle: "Erfahrene Fachleute mit Leidenschaft für Logistik und Kundenservice.",
      team: [
        { initials: "SH", name: "Sanani H.", role: "Geschäftsführer & Gründer",   desc: "Gründer von Allesway Express. Über 15 Jahre Erfahrung in der Transportbranche.", color: "gold" },
        { initials: "RA", name: "Ruslan A.", role: "Flottenmanager",             desc: "Verantwortlich für unsere 500+ Fahrzeuge und die tägliche Einsatzplanung aller Fahrer.", color: "blue" },
        { initials: "IS", name: "Ilkin S.", role: "Logistikmanagerin",           desc: "Koordiniert deutschlandweite Routen, optimiert Lieferprozesse und ist Ansprechpartnerin für alle Großkunden.", color: "green" },
        { initials: "EA", name: "Elchin A.", role: "Kundenservice",                desc: "Ihr direkter Ansprechpartner für alle Fragen rund um Ihre Sendungen — schnell, freundlich und kompetent.", color: "purple" },
      ],

      cert_eyebrow: "Zertifizierungen",
      cert_title:   "Geprüfte Qualität auf höchstem Niveau",
      certs: [
        { label: "ISO 9001", sub: "Qualitätsmanagement" },
        { label: "ADR",      sub: "Gefahrguttransport" },
        { label: "DSGVO",    sub: "Datenschutz konform" },
        { label: "IHK zertifiz.", sub: "Industrie- u. Handelskammer" },
      ],

      values_eyebrow: "Unsere Werte",
      values_title:   "Wofür wir stehen",
      values: [
        { title: "Zuverlässigkeit", desc: "Jede Fracht ist uns wichtig — wir tragen volle Verantwortung für Ihre Sendung." },
        { title: "Geschwindigkeit",  desc: "Schnellstmögliche Zustellung ist unsere oberste Priorität — immer und überall." },
        { title: "Teamgeist",        desc: "Unser erfahrenes und engagiertes Team steht Ihnen jederzeit zur Seite." },
        { title: "Qualität",         desc: "Höchste Qualitätsstandards nach ISO-Normen in allen Geschäftsbereichen." },
      ],

      map_eyebrow:  "Unser Standort",
      map_title:    "Zentral in der Pfalz — deutschlandweit aktiv",
      map_subtitle: "Von Wörth am Rhein aus erreichen wir alle großen Wirtschaftsräume schnell und effizient.",

      cta_title: "Gemeinsam zum Erfolg",
      cta_desc:  "Werden Sie Teil unserer wachsenden Kundenfamilie. Kontaktieren Sie uns für ein individuelles Angebot.",
      cta_btn1:  "Jetzt anfragen",
      cta_btn2:  "Leistungen ansehen",

      mv_eyebrow:       "Mission & Vision",
      mv_mission_label: "Unsere Mission",
      mv_mission:       "Wir machen Logistik einfach — zuverlässig, schnell und persönlich. Für Unternehmen jeder Größe, überall in Deutschland.",
      mv_vision_label:  "Unsere Vision",
      mv_vision:        "Allesway Express wird Deutschlands führendes digitales Transportunternehmen — nachhaltig, innovativ und nah am Kunden.",
      mv_pillars: [
        { num: "2025",    label: "Gründungsjahr" },
        { num: "500+",   label: "Fahrzeuge aktiv" },
        { num: "99,7%", label: "Pünktlichkeit" },
        { num: "1000+",  label: "Mitarbeiter" },
      ],

      awards_eyebrow:  "Auszeichnungen",
      awards_title:    "Von der Branche anerkannt",
      awards_subtitle: "Unsere Leistungen wurden mehrfach ausgezeichnet und zertifiziert.",
      awards: [
        { year: "2025", title: "Bestes Logistikunternehmen",     org: "IHK Rhein-Neckar" },
        { year: "2025", title: "Gold Award Kundenzufriedenheit", org: "Logistik Verband DE" },
        { year: "2025", title: "Top Arbeitgeber Logistik",       org: "Focus Business" },
        { year: "2025", title: "Digitalisierungspreis",          org: "Bundesverband Spedition" },
      ],

      sustain_eyebrow:  "Nachhaltigkeit",
      sustain_title:    "Logistik mit Verantwortung",
      sustain_subtitle: "Wir investieren aktiv in eine grünere Zukunft — für unsere Kunden, die Umwelt und kommende Generationen.",
      sustain_cards: [
        { icon: "🌱", title: "CO₂-Kompensation",    desc: "Wir kompensieren unseren Ausstoß durch zertifizierte Aufforstungsprojekte in Deutschland und Europa." },
        { icon: "⚡", title: "Elektromobilität",     desc: "Bis 2027 planen wir, 30 % unserer Sprinter-Flotte auf Elektroantrieb umzustellen." },
        { icon: "🔄", title: "Routenoptimierung",   desc: "KI-basierte Planung reduziert Leerfahrten und senkt den Kraftstoffverbrauch um bis zu 20 %." },
        { icon: "♻️", title: "Ressourcenschonung",  desc: "Papierloses Büro, digitale Dokumentation und recycelbare Verpackungsmaterialien." },
      ],

      biz_eyebrow:  "Kooperationen",
      biz_title:    "Starke Partner an unserer Seite",
      biz_subtitle: "Wir arbeiten mit führenden Unternehmen und Verbänden zusammen, um Ihnen optimale Logistiklösungen zu bieten.",
      biz_partners: [
        { name: "Mercedes-Benz",  role: "Fahrzeugpartner",       icon: "🚗" },
        { name: "DHL",            role: "Netzwerkpartner",        icon: "📮" },
        { name: "Bosch",          role: "Technologiepartner",     icon: "⚙️" },
        { name: "IHK Karlsruhe",  role: "Zertifizierungspartner", icon: "🏛️" },
        { name: "DEKRA",          role: "Prüf- & TÜV-Partner",    icon: "✅" },
        { name: "HERE Maps",      role: "Routing-Partner",         icon: "🗺️" },
      ],

      numbers_eyebrow:  "Allesway in Zahlen",
      numbers_title:    "Fakten die überzeugen",
      numbers: [
        { num: "500+",    label: "Fahrzeuge",                  desc: "Sprinter, 7,5t & 40t Actros" },
        { num: "200+",   label: "Städte abgedeckt",           desc: "In allen 16 Bundesländern" },
        { num: "1000+",   label: "Mitarbeiter",                desc: "Fahrer, Disponenten & Team" },
        { num: "99,7%",  label: "Pünktlichkeitsrate",         desc: "Messbar und belegt" },
        { num: "100.000+",label: "Lieferungen pro Jahr",       desc: "Zuverlässig und termingerecht" },
        { num: "2025",     label: "Gründungsjahr",            desc: "Gegründet 2025" },
      ],
    },

    /* ── ContactPage ── */
    contact: {
      info_h2:   "Sprechen Sie mit uns",
      info_desc: "Haben Sie Fragen oder möchten Sie ein Angebot anfordern? Unser Team steht Ihnen jederzeit zur Verfügung.",
      items: [
        { title: "Telefon",        lines: ["+49 174 180 99 99", "Rund um die Uhr erreichbar"] },
        { title: "E-Mail",         lines: ["info@allesway-express.de", "Antwort innerhalb von 2 Stunden"] },
        { title: "Adresse",        lines: ["Schulplatz 2", "76744 Wörth am Rhein"] },
        { title: "Öffnungszeiten", lines: ["Mo – Fr: 06:00 – 20:00 Uhr", "Sa: 08:00 – 16:00 Uhr · So: Notdienst"] },
      ],
      whatsapp: "WhatsApp schreiben",

      step_labels: ["Art der Anfrage", "Ihre Sendung", "Kontaktdaten"],
      svc_label:  "Art der Sendung",
      urg_label:  "Dringlichkeit",
      service_types: ["Express-Lieferung","LKW-Transport","Sprinter-Service","Versicherter Transport","Deutschl. Logistik","Firmenlösung"],
      urgency:    ["Express heute","Standard 24h","Termin geplant"],

      step2_title: "Ihre Sendungsdetails",
      from_label:  "Abholort", from_ph: "z.B. Wörth am Rhein",
      to_label:    "Zielort",  to_ph:   "z.B. München",
      weight_label: "Gewicht / Menge", weight_ph: "Bitte wählen...",
      goods_label: "Gütertyp", goods_ph: "Bitte wählen...",
      weights: ["Bis 100 kg","100 – 500 kg","500 kg – 2 t","2 t – 10 t","Über 10 t"],
      goods:   ["Möbel & Einrichtung","Elektronik & Technik","Lebensmittel","Maschinen & Geräte","Baustoffe","Sonstiges"],

      step3_title:  "Ihre Kontaktdaten",
      name_label:   "Vor- und Nachname *",  name_ph:  "Max Mustermann",
      phone_label:  "Telefon",              phone_ph: "+49 174 ...",
      email_label:  "E-Mail *",             email_ph: "ihre@email.de",
      note_label:   "Zusätzliche Anmerkungen", note_ph: "Besondere Anforderungen, Anlieferungshinweise...",
      summary_svc:  "Leistung:", summary_route: "Route:", summary_weight: "Gewicht:",
      back_btn:     "← Zurück",
      next_btn:     "Weiter",
      submit_btn:   "Anfrage absenden",
      sending:      "Wird gesendet...",

      step1_title:  "Was benötigen Sie?",
      err_step1:    "Bitte wählen Sie Art der Sendung und Dringlichkeit aus.",
      err_step2:    "Bitte geben Sie Abholort und Zielort an.",
      err_step3:    "Bitte füllen Sie Name und E-Mail aus.",
      err_network:  "Netzwerkfehler. Bitte prüfen Sie Ihre Verbindung.",
      err_send:     "Fehler beim Senden. Bitte versuchen Sie es erneut.",

      success_title: "Nachricht gesendet!",
      success_desc:  "Vielen Dank für Ihre Anfrage. Wir melden uns schnellstmöglich — in der Regel innerhalb von 2 Stunden.",

      faq_eyebrow:  "FAQ",
      faq_title:    "Häufig gestellte Fragen",
      faq_subtitle: "Hier finden Sie Antworten auf die am häufigsten gestellten Fragen.",
      faqs: [
        { q: "Wie schnell kann meine Sendung geliefert werden?",    a: "Im Nahbereich (bis 100 km) bieten wir Express-Zustellungen innerhalb von 3 Stunden an. Deutschlandweit erfolgt die Lieferung in der Regel innerhalb von 24 Stunden." },
        { q: "Sind meine Sendungen versichert?",                    a: "Ja, jede Sendung ist automatisch vollversichert. Auf Wunsch bieten wir auch eine erweiterte Allgefahren-Police für besonders wertvolle Güter." },
        { q: "Wie kann ich meine Sendung verfolgen?",               a: "Über unsere Sendungsseite können Sie Ihre Sendung in Echtzeit verfolgen. Sie erhalten eine Sendungsnummer bei der Auftragsbestätigung." },
        { q: "Welche Zahlungsmethoden akzeptieren Sie?",            a: "Wir akzeptieren Überweisung, Lastschrift und für Geschäftskunden bieten wir flexible Zahlungsziele auf Rechnung." },
        { q: "Bieten Sie auch regelmäßige Touren an?",              a: "Ja, wir bieten feste Linienverbindungen in über 200 Städte. Für Geschäftskunden erstellen wir individuelle Tourenpläne." },
      ],

      cta_title: "Noch Fragen?",
      cta_desc:  "Rufen Sie uns direkt an — wir sind rund um die Uhr für Sie erreichbar.",
      cta_btn2:  "Sendungen verfolgen",

      quick_eyebrow: "Direktkontakt",
      quick_title:   "Sofort mit uns verbinden",
      quick_cards: [
        { title: "Telefon", sub: "24/7 erreichbar",     value: "+49 174 180 99 99",      action: "Jetzt anrufen",    type: "phone" },
        { title: "WhatsApp", sub: "Sofortige Antwort",  value: "Chat starten",           action: "WhatsApp öffnen",  type: "wa"    },
        { title: "E-Mail", sub: "Antwort in 2 Stunden", value: "info@allesway-express.de", action: "E-Mail senden",  type: "mail"  },
      ],

      guarantee_eyebrow: "Unsere Versprechen",
      guarantee_title:   "Warum Sie uns vertrauen können",
      guarantees: [
        { icon: "⚡", title: "30-Min. Antwortzeit",    desc: "Wir antworten auf jede Anfrage innerhalb von 30 Minuten — garantiert." },
        { icon: "🔒", title: "Vollversicherung",       desc: "Jede Sendung ist automatisch vollversichert. Kein Aufpreis, kein Risiko." },
        { icon: "📍", title: "Echtzeit-Tracking",      desc: "Verfolgen Sie Ihre Sendung live — vom Abholort bis zur Zustellung." },
        { icon: "🤝", title: "Persönlicher Kontakt",   desc: "Kein Callcenter — Sie sprechen direkt mit unserem erfahrenen Team." },
      ],

      hours_eyebrow:  "Erreichbarkeit",
      hours_title:    "Wann wir für Sie da sind",
      hours_subtitle: "Unser Team ist zu den folgenden Zeiten erreichbar — für Notfälle rund um die Uhr.",
      hours_table: [
        { day: "Montag – Freitag", time: "09:00 – 12:00 Uhr", type: "partial" },
        { day: "Montag – Freitag", time: "13:00 – 18:00 Uhr", type: "full" },
        { day: "Samstag",           time: "Geschlossen",        type: "emergency" },
        { day: "Sonntag",           time: "Geschlossen",        type: "emergency" },
      ],
      hours_note: "Für Express-Aufträge und Notfälle sind wir 24/7 unter +49 174 180 99 99 erreichbar.",
      hours_badge_full:      "Vollbetrieb",
      hours_badge_partial:   "Teilbetrieb",
      hours_badge_emergency: "Notdienst",

      response_eyebrow: "Antwortzeiten",
      response_title:   "Wir antworten schnell — immer",
      response_cards: [
        { icon: "📞", channel: "Telefon",  time: "Sofort",    note: "Direkt mit unserem Team sprechen" },
        { icon: "💬", channel: "WhatsApp", time: "< 5 Min.",  note: "Schnellste Antwortmöglichkeit" },
        { icon: "📧", channel: "E-Mail",   time: "< 2 Std.",  note: "Ausführliche Angebote & Infos" },
      ],

      social_eyebrow: "Social Media",
      social_title:   "Folgen Sie uns",
      social_desc:    "Bleiben Sie auf dem Laufenden — Neuigkeiten, Einblicke hinter die Kulissen und aktuelle Angebote direkt auf Instagram.",
      social_btn:     "Instagram folgen",
    },
  },

  /* ════════════════════════════════════════
     ENGLISH
  ════════════════════════════════════════ */
  en: {
    stats: [
      { num: "500+",   label: "Active vehicles" },
      { num: "200+",  label: "Cities covered" },
      { num: "24h",   label: "Delivery across DE" },
      { num: "99.7%", label: "On-time rate" },
    ],

    home_label: "Home",

    ph: {
      services: { title: "Our Services",    desc: "Professional transport solutions for every need" },
      cargo:    { title: "Shipments",       desc: "Track all your shipments in real time" },
      about:    { title: "About Us",        desc: "Learn more about Allesway Express" },
      contact:  { title: "Contact",         desc: "Get in touch with us — we're happy to help" },
    },

    footer: {
      tagline: "Your reliable partner for transport and logistics throughout Germany. Fast, secure and professional — since 2025.",
      nav_title: "Navigation",
      svc_title: "Services",
      cnt_title: "Contact",
      address: "Schulplatz 2, 76744 Wörth",
      copyright: "© 2026 Allesway Express. All rights reserved.",
      tagline2: "Made with passion from Wörth am Rhein",
      send_msg: "Send a message",
      svc_links: ["Express Delivery", "Truck Transport", "Sprinter Service", "Business Solutions", "Insured Transport"],
    },

    home: {
      badge:     "Your reliable transport partner in Germany",
      title1:    "Your cargo in ",
      title_hl:  "safe",
      title2:    " hands",
      desc:      "With our modern fleet of trucks and sprinter vans, we offer fast, secure transport solutions — nationwide within 24 hours.",
      btn_quote: "Request a quote",
      btn_track: "Track shipment",

      calc_title:    "Price Calculator",
      calc_free:     "Free",
      calc_distance: "Distance",
      calc_est:      "Estimated Cost",
      calc_note:     "incl. VAT · non-binding",
      calc_insured:  "Fully insured",
      calc_cta:      "Get binding quote",

      process_eyebrow:   "Process",
      process_title:     "3 steps to your transport",
      process_subtitle:  "Simple, fast and transparent — here's how an order with Allesway Express works.",
      process_steps: [
        { title: "Place your request",     desc: "Online, by phone or email — we accept your order quickly and easily and create a personal quote." },
        { title: "Vehicle is dispatched",  desc: "The right vehicle — Sprinter or truck — arrives on time at your specified pickup location. Our drivers are reliable and experienced." },
        { title: "Punctual delivery",      desc: "We deliver safely and on time to your destination. You receive a delivery confirmation and can track your shipment in real time." },
      ],

      fleet_eyebrow:   "Our Fleet",
      fleet_title:     "State-of-the-art vehicles for every need",
      fleet_subtitle:  "From agile Sprinter vans to heavy 40-tonners — our 500+ vehicles are always ready to go.",
      fleet_labels: ["Truck — Mercedes Atego", "Sprinter Service", "Heavy Transport — Actros", "Sprinter Fleet", "Atego Fleet", "Long-distance & Freight"],

      svc_eyebrow:   "Our Services",
      svc_title:     "The right solution for every transport need",
      svc_subtitle:  "From express delivery to heavy transport — we move your cargo quickly, safely and reliably.",
      svc_more:      "Learn more",
      services: [
        { title: "Express Delivery",      desc: "Same-day delivery in the local area. For urgent orders we guarantee delivery within 3 hours." },
        { title: "Truck Transport",       desc: "With our 40-tonners we handle even large loads. Ideal for industry, construction and wholesale." },
        { title: "Sprinter Service",      desc: "Flexible delivery up to 1.5 tonnes — fast, direct and reliable to your recipient." },
        { title: "Insured Transport",     desc: "Every shipment is fully insured. In case of damage you will receive a full reimbursement." },
        { title: "Nationwide Delivery",   desc: "Regular trips to all 16 federal states — from the North Sea to the Alps." },
        { title: "24/7 Customer Service", desc: "Our service team is available around the clock — by phone, email and chat." },
      ],

      why_eyebrow:   "Why us?",
      why_title:     "Allesway Express — the difference",
      why_subtitle:  "Years of experience, a professional team and the latest technology for your logistics.",
      why_cards: [
        { title: "500+ vehicles",      desc: "Our fleet includes trucks, sprinters and special vehicles for every task." },
        { title: "Full insurance",    desc: "All transports are fully insured — for your absolute safety." },
        { title: "Punctuality",       desc: "99.7% on-time delivery rate — reliability you can count on." },
        { title: "Experienced team",  desc: "Trained drivers and logistics experts with over 15 years of industry experience." },
      ],

      map_eyebrow: "Coverage",
      map_title:   "Everywhere in Germany — and beyond",
      map_desc:    "From Wörth am Rhein we connect over 200 cities across Germany with regular trips, fixed departure times and punctual delivery.",
      map_stats: [
        { num: "200+", label: "Cities covered" },
        { num: "16",   label: "Federal states" },
        { num: "24h",  label: "Nationwide" },
        { num: "500+",  label: "Active vehicles" },
      ],

      partners_label: "Trusted by leading companies in Germany",

      testi_eyebrow:  "Testimonials",
      testi_title:    "What our customers say",
      testi_subtitle: "Thousands of satisfied customers trust Allesway Express every day.",
      testimonials: [
        { text: "Allesway Express always delivers on time and reliably. The prices are fair and the service is first-class. Highly recommended for business customers!", name: "Thomas Berger",   role: "CEO, Berger Furniture Store",      initials: "TB" },
        { text: "The express service is excellent. My urgent delivery arrived in under 3 hours. You rarely find such a reliable partner.",                              name: "Sabine Keller",   role: "Owner, Keller Online Shop",        initials: "SK" },
        { text: "We've been working with Allesway for 5 years. Professional team, insured transports and always reachable. The best decision we've made!",            name: "Markus Hoffmann", role: "Operations Manager, Hoffmann AG",  initials: "MH" },
      ],

      cta_title:  "Ready to ship?",
      cta_desc:   "Contact us now and have your cargo delivered quickly and safely. 15% discount on your first order!",
      cta_btn1:   "Get in touch",
      cta_btn2:   "View shipments",

      industries_eyebrow:   "Industries",
      industries_title:     "We serve every industry",
      industries_subtitle:  "From construction sites to online shops — Allesway Express is the right partner for every sector.",
      industries: [
        { icon: "🏗️", title: "Construction & Trades",    desc: "Building materials, machinery and tools — time-critical deliveries to any site." },
        { icon: "🛒", title: "Retail & Trade",            desc: "Goods deliveries for retailers and wholesalers, store and pallet transport." },
        { icon: "💊", title: "Pharma & Healthcare",       desc: "Temperature-controlled transport for medicines and medical devices." },
        { icon: "🍕", title: "Food & Hospitality",        desc: "Fresh and cold-chain transport with seamless documentation." },
        { icon: "🚗", title: "Automotive",                desc: "Spare parts, accessories and components for the automotive industry." },
        { icon: "📦", title: "E-Commerce & Fulfilment",   desc: "Fast parcel delivery and returns handling for online shops." },
      ],

      home_faq_eyebrow:  "FAQ",
      home_faq_title:    "Frequently asked questions",
      home_faq_subtitle: "Everything you need to know about shipping with Allesway Express.",
      home_faqs: [
        { q: "How quickly can an express delivery be made?",  a: "In the local area up to 100 km we guarantee delivery within 3 hours. Nationwide usually within 24 hours." },
        { q: "How do I get a quote?",                         a: "Online, by phone or email — we'll create a personal quote for you within 30 minutes." },
        { q: "Are my goods insured during transport?",        a: "Yes, every shipment is automatically fully insured. On request we offer an extended all-risks policy." },
        { q: "What vehicles are available?",                  a: "From Sprinter vans (1.5 t) to 40-tonne articulated lorries — we have the right vehicle for every job." },
        { q: "Can I track my shipment in real time?",         a: "Yes, after order confirmation you receive a tracking number for real-time tracking on our website." },
        { q: "Do you offer business rates?",                  a: "Yes, we offer tailored contracts, fixed vehicle allocations and monthly reports for business customers." },
      ],

      pricing_eyebrow:  "Pricing",
      pricing_title:    "Fair prices — no hidden charges",
      pricing_subtitle: "Transparent fixed prices for every transport. Your final quote is free and non-binding.",
      pricing_from:     "from",
      pricing_cta:      "Request a quote",
      pricing_popular:  "Popular",
      pricing_cards: [
        { icon: "🚐", name: "Sprinter",        price: "1.90", unit: "€/km", note: "Up to 1.5 t · Local & Regional", features: ["Same-day delivery", "Local area up to 100 km", "Flexible collection times", "Fully insured"] },
        { icon: "🚛", name: "Truck 7.5 t",     price: "2.80", unit: "€/km", note: "Up to 5 t · Regional & DE",      features: ["24h delivery DE", "Box and curtain body", "GPS real-time tracking", "Insurance included"], badge: "Popular" },
        { icon: "🚚", name: "Actros 40 t",     price: "3.90", unit: "€/km", note: "Up to 24 t · Nationwide",        features: ["Heavy transport up to 24 t", "Swap body system", "48h delivery", "Comprehensive insurance"] },
        { icon: "🚢", name: "Sea Freight",      price: "140",  unit: "€/m³", note: "FCL & LCL · Worldwide",          features: ["FCL & LCL shipments", "Customs clearance incl.", "Port Hamburg / Bremen", "Transit 10–30 days"] },
        { icon: "✈️", name: "Air Freight",      price: "7.00", unit: "€/kg", note: "Express · International",        features: ["Express air freight worldwide", "Door-to-door service", "Transit 1–5 days", "Full insurance incl."] },
        { icon: "🚂", name: "Rail Transport",   price: "0.50", unit: "€/kg", note: "Eco-friendly · Europe",          features: ["Eco-friendly alternative", "Available across Europe", "High capacity", "Reliable transit times"] },
      ],

      network_eyebrow:  "Network",
      network_title:    "200+ cities in all 16 federal states",
      network_subtitle: "From the North Sea to the Alps — a dense route network with daily departures.",
      network_cities:   ["Berlin","Hamburg","Munich","Cologne","Frankfurt","Stuttgart","Düsseldorf","Dortmund","Essen","Leipzig","Bremen","Dresden","Hanover","Nuremberg","Karlsruhe","Wiesbaden","Freiburg","Mannheim","Augsburg","Bonn","Wuppertal","Bielefeld","Bochum","Münster","Kiel"],
      network_stats: [
        { num: "200+", label: "Cities active" },
        { num: "16",   label: "Federal states" },
        { num: "500+",  label: "Vehicles" },
        { num: "24/7", label: "Customer service" },
      ],
    },

    services: {
      tabs_services: [
        { tagline: "3-hour guarantee in the local area",   title: "Express Delivery",       desc: "Urgent shipments require fast action. Our express service guarantees delivery within 3 hours within 100 km and on the same day nationwide — whenever you need it.", features: ["3-hour guarantee locally","Real-time tracking by SMS & app","Priority warehouse treatment","Personal delivery confirmation","Available 7 days a week"], hl: { num: "3h", label: "Guarantee" } },
        { tagline: "Up to 24 tonnes payload, nationwide",  title: "Truck Long-haul",        desc: "Our modern 7.5t to 40t trucks transport your heavy and bulky goods across Germany — from Flensburg to Garmisch, reliably and on time.", features: ["7.5t to 40t payload","Temperature-controlled transport","Swap bodies & containers","Experienced professional drivers","Real-time GPS tracking"], hl: { num: "40t", label: "Max. payload" } },
        { tagline: "Agile solution up to 1.5 tonnes",     title: "Sprinter Courier",       desc: "For loads up to 1.5 tonnes we deploy our agile Sprinter vehicles — ideal for part loads, parcels and urgent shipments. Flexible, fast and direct to your recipient.", features: ["Up to 1.5t payload","Tail lift available","Same-day & next-day options","Flexible collection & delivery times","Pre-delivery notification"], hl: { num: "1.5t", label: "Max. payload" } },
        { tagline: "Full insurance for every shipment",   title: "Insured Transport",      desc: "Every shipment is automatically fully insured with us. We take full liability and offer an extended all-risks policy on request for particularly valuable or fragile goods.", features: ["Basic insurance included","Extended all-risks policy","Fast claims settlement","Escorted transport on request","Comprehensive insurance coverage"], hl: { num: "100%", label: "Insured" } },
        { tagline: "200+ cities, all 16 federal states",  title: "Nationwide Logistics",   desc: "Our network connects over 200 cities in all 16 federal states with regular trips and fixed schedules. From the coast to the mountains — we're everywhere.", features: ["All 16 federal states covered","Fixed timetables & schedules","Volume discounts from 10 shipments","Transshipment points & depots","Part & full load options"], hl: { num: "200+", label: "Cities" } },
        { tagline: "Tailored logistics solutions",        title: "Business Solutions",     desc: "Tailored logistics concepts for companies of all sizes. Long-term contracts, dedicated vehicles, key account management and individual reporting solutions.", features: ["Individual contract terms","Fixed vehicle allocation","Monthly reports & analytics","Personal key account manager","API integration for ERP systems"], hl: { num: "B2B", label: "Solution" } },
      ],
      btn_quote:   "Request now",
      btn_phone:   "+49 174 180 99 99",
      overview_eyebrow: "All services",
      overview_title:   "What we offer",
      cta_title:   "Special requirements?",
      cta_desc:    "Call us or write to us — we'll find the best solution for your transport together.",
      cta_btn2:    "Track shipment",

      fleet_eyebrow:  "Our Fleet",
      fleet_title:    "The right vehicle for every job",
      fleet_subtitle: "500+ modern GPS-monitored vehicles — fully insured and always ready to go.",
      fleet_cards: [
        { icon: "🚐", name: "Mercedes Sprinter", cap: "1.5 t",   vol: "10 m³",   range: "Local & Regional",   color: "gold",   price: "from 1.90 €/km",  specs: ["Up to 1,500 kg payload", "10 m³ cargo space", "Tail lift on request", "Same-day delivery"] },
        { icon: "🚛", name: "Truck 7.5 t",       cap: "5 t",     vol: "35 m³",   range: "Regional & DE",      color: "blue",   price: "from 2.80 €/km",  specs: ["Up to 5,000 kg payload", "35 m³ cargo space", "Box and curtain body", "24h delivery DE"] },
        { icon: "🚚", name: "Actros 40 t",        cap: "24 t",    vol: "90 m³",   range: "Nationwide",         color: "green",  price: "from 3.90 €/km",  specs: ["Up to 24,000 kg payload", "90 m³ cargo space", "Swap body system", "GPS real-time tracking"] },
        { icon: "🚢", name: "Sea Freight",         cap: "unlim.", vol: "FCL/LCL", range: "Worldwide",           color: "purple", price: "from 140 €/m³",   specs: ["FCL & LCL shipments", "Customs clearance included", "Port Hamburg / Bremen", "Transit 10–30 days"] },
        { icon: "✈️", name: "Air Freight",         cap: "unlim.", vol: "kg-based", range: "International",      color: "teal",   price: "from 7.00 €/kg",  specs: ["Express air freight worldwide", "Door-to-door service", "Transit 1–5 days", "Full insurance incl."] },
        { icon: "🚂", name: "Rail Transport",      cap: "unlim.", vol: "kg-based", range: "Europe & DE",        color: "orange", price: "from 0.50 €/kg",  specs: ["Eco-friendly alternative", "Available across Europe", "High capacity", "Reliable transit times"] },
      ],

      process_eyebrow: "Process",
      process_title:   "How it works — step by step",
      process_steps_svc: [
        { num: "01", title: "Submit request",    desc: "Online form, phone or email — simple and free of charge." },
        { num: "02", title: "Receive quote",     desc: "A personalised fixed-price quote within 30 minutes." },
        { num: "03", title: "Collection",        desc: "We send the right vehicle to you on time." },
        { num: "04", title: "Track shipment",    desc: "Real-time tracking until successful delivery." },
      ],

      compare_eyebrow: "Comparison",
      compare_title:   "Which vehicle suits you?",
      compare_heads:   ["Feature", "Sprinter", "Truck 7.5 t", "Actros 40 t"],
      compare_rows: [
        { label: "Payload",    vals: ["up to 1.5 t",   "up to 5 t",       "up to 24 t"] },
        { label: "Cargo space",vals: ["10 m³",          "35 m³",           "90 m³"] },
        { label: "Delivery",   vals: ["Same-day",       "24 h",            "48 h"] },
        { label: "Range",      vals: ["Local/Regional", "Regional/DE",     "Nationwide"] },
        { label: "Tail lift",  vals: ["On request",     "Included",        "Included"] },
        { label: "GPS",        vals: ["✓",              "✓",               "✓"] },
        { label: "Insurance",  vals: ["✓",              "✓",               "✓"] },
      ],

      zones_eyebrow: "Coverage zones",
      zones_title:   "Where we operate daily",
      zones_subtitle:"From our base in Wörth am Rhein we deliver across all of Germany.",
      zones: [
        { region: "Northern Germany", cities: "Hamburg · Bremen · Hanover · Kiel · Rostock",           icon: "🌊" },
        { region: "Western Germany",  cities: "Cologne · Düsseldorf · Dortmund · Essen · Münster",     icon: "🏭" },
        { region: "Central Germany",  cities: "Frankfurt · Wiesbaden · Mainz · Heidelberg · Mannheim", icon: "🌆" },
        { region: "Southern Germany", cities: "Munich · Stuttgart · Nuremberg · Augsburg · Freiburg",  icon: "⛰️" },
        { region: "Eastern Germany",  cities: "Berlin · Leipzig · Dresden · Magdeburg · Erfurt",       icon: "🏛️" },
        { region: "South-West (HQ)",  cities: "Wörth am Rhein · Karlsruhe · Landau · Germersheim",     icon: "🏠" },
      ],

      svc_testi_eyebrow: "Testimonials",
      svc_testi_title:   "What business customers say",
      svc_testis: [
        { text: "The express service is unbeatable. My urgent delivery arrived in exactly 2.5 hours. I'll never use another provider!", name: "Klaus Fischer", role: "Owner, Elektro Fischer GmbH",      initials: "KF" },
        { text: "We've relied on Allesway for machine transport for years. The truck fleet is excellent, the drivers totally professional.", name: "Petra Wolf",   role: "Logistics Manager, Wolf Industrie", initials: "PW" },
        { text: "Thanks to the business solution we have dedicated vehicles reserved. Saves enormous time and the rates are very fair.",   name: "Daniel Braun", role: "COO, Braun Handel AG",              initials: "DB" },
      ],
    },

    cargo: {
      track_label:       "Shipment tracking",
      track_title:       "Enter your tracking number",
      track_desc:        "Enter the shipment number from your order confirmation to see the current status.",
      track_placeholder: "e.g. AW-10042, AW-10155 ...",
      track_btn:         "Track",
      track_notfound:    "No shipment found with this number. Please check your input.",
      track_stages:      ["Order confirmed", "Collected", "In transit", "Delivered"],
      progress_label:    "complete",

      all_title:       "All shipments",
      search_placeholder: "Search by tracking number, city or recipient...",
      filters: ["All", "In Transit", "Delivered", "Pending", "Processing"],
      status: { unterwegs: "In Transit", zugestellt: "Delivered", wartend: "Pending", verarbeitung: "Processing" },
      card_from: "From", card_to: "To", card_weight: "Weight", card_vehicle: "Vehicle", card_goods: "Goods", card_receiver: "Recipient",
      empty_title: "No shipments found",
      empty_desc:  "Try a different search term or change the filter.",
      result_count1: "shipment",
      result_count2: "s",
      result_page:   "found — page",
      result_of:     "of",
      track_meta: { receiver: "Recipient", vehicle: "Vehicle", weight: "Weight", goods: "Goods" },

      live_eyebrow: "Live Dashboard",
      live_title:   "Real-time shipment overview",
      live_labels:  { total: "Total shipments", unterwegs: "In transit", zugestellt: "Delivered", wartend: "Pending/Processing" },

      info_eyebrow: "Shipment info",
      info_title:   "Everything about your shipment",
      info_cards: [
        { icon: "📍", title: "Real-time tracking",        desc: "Track every shipment live with your tracking number — anytime, anywhere." },
        { icon: "🔔", title: "SMS notifications",         desc: "Automatic SMS updates on status changes — collection, in transit, delivery." },
        { icon: "📋", title: "Digital documentation",     desc: "All delivery notes and documents available digitally. GDPR-compliant storage." },
        { icon: "🛡️", title: "Full insurance",           desc: "Every shipment is automatically fully insured — at no extra cost." },
      ],

      how_eyebrow: "How it works",
      how_title:   "Track your shipment in 4 simple steps",
      how_steps: [
        { num: "01", icon: "📋", title: "Place your order",        desc: "Submit your transport order online, by phone or email — quick and straightforward." },
        { num: "02", icon: "📱", title: "Receive tracking number",  desc: "Right after order confirmation you receive your personal tracking number by email and SMS." },
        { num: "03", icon: "📍", title: "Track live",               desc: "Enter the number above and see the current location of your cargo in real time." },
        { num: "04", icon: "✅", title: "Delivery confirmed",       desc: "You automatically receive a delivery confirmation — including photo and recipient's signature." },
      ],

      types_eyebrow:  "Cargo types",
      types_title:    "What we transport",
      types_subtitle: "From parcels to heavy freight — we have the right vehicle for every type of goods.",
      cargo_types: [
        { icon: "📦", title: "Parcels & general cargo", desc: "Individual shipments, packages and general cargo up to 1,500 kg. Fast, direct, insured." },
        { icon: "🪑", title: "Furniture & furnishings", desc: "Professional furniture transport with experienced movers and protective covers." },
        { icon: "⚙️", title: "Machinery & equipment",  desc: "Heavy industrial machines with specialist tail lifts and securing systems." },
        { icon: "❄️", title: "Chilled & fresh goods",  desc: "Temperature-controlled transport with seamless cold-chain documentation." },
        { icon: "🏗️", title: "Building materials",     desc: "Building materials, gravel, steel beams and structural components in large quantities." },
        { icon: "🛡️", title: "Valuables & art",        desc: "High-value goods and artworks with extended all-risks insurance coverage." },
      ],
    },

    about: {
      intro_h2:   "Your reliable partner for transport across Germany",
      intro_p1:   "Allesway Express was founded in Wörth am Rhein and quickly became one of the leading regional transport companies. With over 500 vehicles — including modern trucks and sprinters — we serve customers in all 16 federal states.",
      intro_p2:   "Our recipe for success: reliability, transparency and a personal contact for every customer. We understand that every shipment represents an important order — and we treat it accordingly.",
      features:   ["Founded 2025","500+ trucks & sprinters","1000+ employees","200+ cities covered","ISO 9001 certified","24/7 customer service","Located in Wörth am Rhein","Full insurance included"],
      contact_btn: "Get in touch",

      timeline_eyebrow: "Our history",
      timeline_title:   "From Wörth am Rhein to all of Germany",
      timeline: [
        { year: "Jan. 2025", title: "Founded",           desc: "Allesway Express is founded in Wörth am Rhein with a modern fleet and clear vision." },
        { year: "Apr. 2025", title: "Expansion",          desc: "Fleet expanded to 30 vehicles. First trucks deployed for heavy transport." },
        { year: "Aug. 2025", title: "ISO Certification",  desc: "ISO 9001 certification achieved. New logistics centre opened in Wörth." },
        { year: "Dec. 2025", title: "Market leader",      desc: "500+ vehicles, 1000+ employees and deliveries to over 200 cities nationwide." },
      ],

      team_eyebrow:  "Our team",
      team_title:    "The people behind Allesway Express",
      team_subtitle: "Experienced professionals with a passion for logistics and customer service.",
      team: [
        { initials: "SH", name: "Sanani H.", role: "CEO & Founder",           desc: "Founder of Allesway Express. Over 15 years of experience in the transport industry.", color: "gold" },
        { initials: "RA", name: "Ruslan A.", role: "Fleet Manager",         desc: "Responsible for our 500+ vehicles and the daily deployment planning of all drivers.", color: "blue" },
        { initials: "IS", name: "Ilkin S.", role: "Logistics Manager",      desc: "Coordinates nationwide routes, optimises delivery processes and is contact for all major clients.", color: "green" },
        { initials: "EA", name: "Elchin A.", role: "Customer Service",        desc: "Your direct contact for all questions about your shipments — fast, friendly and competent.", color: "purple" },
      ],

      cert_eyebrow: "Certifications",
      cert_title:   "Verified quality at the highest level",
      certs: [
        { label: "ISO 9001", sub: "Quality management" },
        { label: "ADR",      sub: "Hazardous goods transport" },
        { label: "GDPR",     sub: "Data protection compliant" },
        { label: "IHK cert.", sub: "Chamber of Commerce" },
      ],

      values_eyebrow: "Our values",
      values_title:   "What we stand for",
      values: [
        { title: "Reliability",  desc: "Every shipment matters to us — we take full responsibility for your cargo." },
        { title: "Speed",        desc: "The fastest possible delivery is our top priority — always and everywhere." },
        { title: "Team spirit",  desc: "Our experienced and dedicated team is always by your side." },
        { title: "Quality",      desc: "The highest quality standards according to ISO norms across all business areas." },
      ],

      map_eyebrow:  "Our location",
      map_title:    "Central in the Palatinate — active nationwide",
      map_subtitle: "From Wörth am Rhein we reach all major economic regions quickly and efficiently.",

      cta_title: "Success together",
      cta_desc:  "Join our growing customer family. Contact us for an individual quote.",
      cta_btn1:  "Request now",
      cta_btn2:  "View services",

      mv_eyebrow:       "Mission & Vision",
      mv_mission_label: "Our Mission",
      mv_mission:       "We make logistics simple — reliable, fast and personal. For businesses of every size, anywhere in Germany.",
      mv_vision_label:  "Our Vision",
      mv_vision:        "Allesway Express will become Germany's leading digital transport company — sustainable, innovative and always close to the customer.",
      mv_pillars: [
        { num: "2025",     label: "Founded" },
        { num: "500+",    label: "Active vehicles" },
        { num: "99.7%",  label: "On-time rate" },
        { num: "1000+",   label: "Employees" },
      ],

      awards_eyebrow:  "Awards",
      awards_title:    "Recognised by the industry",
      awards_subtitle: "Our performance has been recognised and certified multiple times.",
      awards: [
        { year: "2025", title: "Best Logistics Company",       org: "IHK Rhein-Neckar" },
        { year: "2025", title: "Gold Award Customer Satisfaction", org: "Logistics Association DE" },
        { year: "2025", title: "Top Employer Logistics",       org: "Focus Business" },
        { year: "2025", title: "Digitalisation Award",         org: "Federal Freight Assoc." },
      ],

      sustain_eyebrow:  "Sustainability",
      sustain_title:    "Logistics with responsibility",
      sustain_subtitle: "We actively invest in a greener future — for our customers, the environment, and generations to come.",
      sustain_cards: [
        { icon: "🌱", title: "CO₂ offsetting",       desc: "We offset our emissions through certified reforestation projects in Germany and Europe." },
        { icon: "⚡", title: "Electric mobility",     desc: "By 2027 we plan to convert 30% of our Sprinter fleet to electric drive." },
        { icon: "🔄", title: "Route optimisation",   desc: "AI-based planning reduces empty runs and cuts fuel consumption by up to 20%." },
        { icon: "♻️", title: "Resource conservation",desc: "Paperless office, digital documentation and recyclable packaging materials." },
      ],

      biz_eyebrow:  "Partnerships",
      biz_title:    "Strong partners at our side",
      biz_subtitle: "We work with leading companies and associations to deliver optimal logistics solutions.",
      biz_partners: [
        { name: "Mercedes-Benz",  role: "Vehicle partner",        icon: "🚗" },
        { name: "DHL",            role: "Network partner",         icon: "📮" },
        { name: "Bosch",          role: "Technology partner",      icon: "⚙️" },
        { name: "IHK Karlsruhe",  role: "Certification partner",   icon: "🏛️" },
        { name: "DEKRA",          role: "Inspection partner",      icon: "✅" },
        { name: "HERE Maps",      role: "Routing partner",         icon: "🗺️" },
      ],

      numbers_eyebrow:  "Allesway in numbers",
      numbers_title:    "Facts that convince",
      numbers: [
        { num: "500+",     label: "Vehicles",             desc: "Sprinters, 7.5t & 40t Actros" },
        { num: "200+",    label: "Cities covered",       desc: "Across all 16 federal states" },
        { num: "1000+",    label: "Employees",            desc: "Drivers, dispatchers & team" },
        { num: "99.7%",   label: "On-time rate",         desc: "Measured and verified" },
        { num: "100,000+", label: "Deliveries per year",  desc: "Reliable and on schedule" },
        { num: "2025",      label: "Founded",    desc: "Founded 2025" },
      ],
    },

    contact: {
      info_h2:   "Talk to us",
      info_desc: "Have questions or want to request a quote? Our team is always available — fast, personal and straightforward.",
      items: [
        { title: "Phone",           lines: ["+49 174 180 99 99", "Available around the clock"] },
        { title: "Email",           lines: ["info@allesway-express.de", "Reply within 2 hours"] },
        { title: "Address",         lines: ["Schulplatz 2", "76744 Wörth am Rhein"] },
        { title: "Opening hours",   lines: ["Mon – Fri: 06:00 – 20:00", "Sat: 08:00 – 16:00 · Sun: Emergency service"] },
      ],
      whatsapp: "Write on WhatsApp",

      step_labels: ["Type of request", "Your shipment", "Contact details"],
      svc_label:  "Type of shipment",
      urg_label:  "Urgency",
      service_types: ["Express Delivery","Truck Transport","Sprinter Service","Insured Transport","Nationwide Logistics","Business Solution"],
      urgency:    ["Express today","Standard 24h","Planned appointment"],

      step2_title: "Your shipment details",
      from_label:  "Collection point", from_ph: "e.g. Wörth am Rhein",
      to_label:    "Destination",      to_ph:   "e.g. Munich",
      weight_label: "Weight / quantity", weight_ph: "Please select...",
      goods_label: "Type of goods",    goods_ph: "Please select...",
      weights: ["Up to 100 kg","100 – 500 kg","500 kg – 2 t","2 t – 10 t","Over 10 t"],
      goods:   ["Furniture & furnishings","Electronics & technology","Food","Machinery & equipment","Building materials","Other"],

      step3_title:  "Your contact details",
      name_label:   "First and last name *", name_ph:  "John Doe",
      phone_label:  "Phone",                phone_ph: "+49 174 ...",
      email_label:  "Email *",              email_ph: "your@email.com",
      note_label:   "Additional notes", note_ph: "Special requirements, delivery instructions...",
      summary_svc:  "Service:", summary_route: "Route:", summary_weight: "Weight:",
      back_btn:     "← Back",
      next_btn:     "Next",
      submit_btn:   "Send request",
      sending:      "Sending...",

      step1_title:  "What do you need?",
      err_step1:    "Please select the type of shipment and urgency.",
      err_step2:    "Please enter the collection point and destination.",
      err_step3:    "Please fill in your name and email.",
      err_network:  "Network error. Please check your connection.",
      err_send:     "Error sending. Please try again.",

      success_title: "Message sent!",
      success_desc:  "Thank you for your enquiry. We'll get back to you as soon as possible — usually within 2 hours.",

      faq_eyebrow:  "FAQ",
      faq_title:    "Frequently asked questions",
      faq_subtitle: "Here you'll find answers to our customers' most frequently asked questions.",
      faqs: [
        { q: "How quickly can my shipment be delivered?",     a: "In the local area (up to 100 km) we offer express deliveries within 3 hours. Nationwide delivery usually takes place within 24 hours." },
        { q: "Are my shipments insured?",                     a: "Yes, every shipment is automatically fully insured. On request we also offer an extended all-risks policy for particularly valuable goods." },
        { q: "How can I track my shipment?",                  a: "On our shipments page you can track your shipment in real time. You will receive a tracking number with your order confirmation." },
        { q: "What payment methods do you accept?",           a: "We accept bank transfer and direct debit. For business customers we offer flexible payment terms on account." },
        { q: "Do you also offer regular routes?",             a: "Yes, we offer fixed line connections to over 200 cities. For business customers we create individual route plans." },
      ],

      cta_title: "Still have questions?",
      cta_desc:  "Call us directly — we're available around the clock.",
      cta_btn2:  "Track shipments",

      quick_eyebrow: "Direct contact",
      quick_title:   "Connect with us instantly",
      quick_cards: [
        { title: "Phone",    sub: "24/7 available",         value: "+49 174 180 99 99",        action: "Call now",        type: "phone" },
        { title: "WhatsApp", sub: "Instant reply",          value: "Start chat",               action: "Open WhatsApp",   type: "wa"    },
        { title: "Email",    sub: "Reply within 2 hours",   value: "info@allesway-express.de", action: "Send email",      type: "mail"  },
      ],

      guarantee_eyebrow: "Our promises",
      guarantee_title:   "Why you can trust us",
      guarantees: [
        { icon: "⚡", title: "30-min response",        desc: "We respond to every enquiry within 30 minutes — guaranteed." },
        { icon: "🔒", title: "Full insurance",         desc: "Every shipment is automatically fully insured. No extra cost, no risk." },
        { icon: "📍", title: "Real-time tracking",     desc: "Track your shipment live — from collection to delivery." },
        { icon: "🤝", title: "Personal contact",       desc: "No call centre — you speak directly with our experienced team." },
      ],

      hours_eyebrow:  "Availability",
      hours_title:    "When we're here for you",
      hours_subtitle: "Our team is available at the following times — for emergencies, we're reachable around the clock.",
      hours_table: [
        { day: "Monday – Friday", time: "09:00 – 12:00",  type: "partial" },
        { day: "Monday – Friday", time: "13:00 – 18:00",  type: "full" },
        { day: "Saturday",         time: "Closed",          type: "emergency" },
        { day: "Sunday",           time: "Closed",          type: "emergency" },
      ],
      hours_note: "For express orders and emergencies we are available 24/7 on +49 174 180 99 99.",
      hours_badge_full:      "Full service",
      hours_badge_partial:   "Partial service",
      hours_badge_emergency: "Emergency",

      response_eyebrow: "Response times",
      response_title:   "We respond fast — always",
      response_cards: [
        { icon: "📞", channel: "Phone",    time: "Instantly",  note: "Speak directly with our team" },
        { icon: "💬", channel: "WhatsApp", time: "< 5 min.",   note: "Fastest response channel" },
        { icon: "📧", channel: "Email",    time: "< 2 hrs.",   note: "Detailed quotes & information" },
      ],

      social_eyebrow: "Social media",
      social_title:   "Follow us",
      social_desc:    "Stay up to date — news, behind-the-scenes insights and current offers directly on Instagram.",
      social_btn:     "Follow on Instagram",
    },
  },
};

export default T;
