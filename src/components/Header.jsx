import { useState, useEffect, useRef } from "react";
import logoImg from "../assets/logo_transparent.png";
import "../styles/Header.css";

const NAV_LABELS = {
  de: { home: "Startseite", services: "Leistungen", about: "Über uns", gallery: "Galerie", faq: "FAQ", karriere: "Karriere", nachhaltigkeit: "Nachhaltigkeit", flotte: "Flotte", contact: "Kontakt", tracking: "Sendungsverfolgung", cta: "Angebot anfordern" },
  en: { home: "Home", services: "Services", about: "About Us", gallery: "Gallery", faq: "FAQ", karriere: "Careers", nachhaltigkeit: "Sustainability", flotte: "Fleet", contact: "Contact", tracking: "Track Shipment", cta: "Get a Quote" },
};

const LANGS = [
  { code: "de", label: "DE", native: "Deutsch", flag: "🇩🇪" },
  { code: "en", label: "EN", native: "English", flag: "🇬🇧" },
];

function Header({ currentPage, setPage, lang, setLang }) {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen]     = useState(false);
  const [moreOpen, setMoreOpen]     = useState(false);
  const langRef = useRef(null);
  const moreRef = useRef(null);

  const t = NAV_LABELS[lang] || NAV_LABELS.de;
  const currentLang = LANGS.find((l) => l.code === lang) || LANGS[0];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
      if (moreRef.current && !moreRef.current.contains(e.target)) setMoreOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const changeLang = (code) => {
    setLang(code);
    setLangOpen(false);
  };

  const goTo = (p) => {
    setPage(p);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { id: "home",     label: t.home },
    { id: "services", label: t.services },
    { id: "about",    label: t.about },
    { id: "gallery",  label: t.gallery },
    { id: "contact",  label: t.contact },
    { id: "tracking", label: t.tracking, icon: true },
  ];

  const moreItems = [
    { id: "flotte",         label: t.flotte },
    { id: "nachhaltigkeit", label: t.nachhaltigkeit },
    { id: "karriere",       label: t.karriere },
    { id: "faq",            label: t.faq },
  ];

  const moreActive = moreItems.some(m => m.id === currentPage);

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-accent" />
        <div className="header-inner">
          <div className="logo" onClick={() => goTo("home")}>
            <img src={logoImg} alt="Allesway Express" className="logo-img" />
            <div className="logo-text-wrap">
              <span className="logo-main">Allesway</span>
              <span className="logo-dot">Express</span>
            </div>
          </div>

          <nav className="nav-desktop">
            {navItems.map((item) => (
              item.icon ? (
                <button
                  key={item.id}
                  className={`nav-track-btn ${currentPage === item.id ? "active" : ""}`}
                  onClick={() => goTo(item.id)}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                  {item.label}
                </button>
              ) : (
                <button
                  key={item.id}
                  className={`nav-link ${currentPage === item.id ? "active" : ""}`}
                  onClick={() => goTo(item.id)}
                >
                  {item.label}
                  {currentPage === item.id && <span className="nav-active-dot" />}
                </button>
              )
            ))}
            <div className="nav-more-wrap" ref={moreRef}>
              <button
                className={`nav-link nav-more-btn ${moreActive ? "active" : ""} ${moreOpen ? "open" : ""}`}
                onClick={() => setMoreOpen(o => !o)}
              >
                {lang === "en" ? "More" : "Mehr"}
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: 4 }}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
                {moreActive && <span className="nav-active-dot" />}
              </button>
              {moreOpen && (
                <div className="nav-more-dropdown">
                  {moreItems.map(item => (
                    <button
                      key={item.id}
                      className={`nav-more-option ${currentPage === item.id ? "active" : ""}`}
                      onClick={() => { goTo(item.id); setMoreOpen(false); }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="header-right">
            <div className="lang-wrap" ref={langRef}>
              <button
                className={`lang-btn ${langOpen ? "open" : ""}`}
                onClick={() => setLangOpen((o) => !o)}
                aria-label="Change language"
              >
                <span className="lang-flag">{currentLang.flag}</span>
                <span className="lang-code">{currentLang.label}</span>
                <svg className={`lang-arrow ${langOpen ? "up" : ""}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {langOpen && (
                <div className="lang-dropdown">
                  {LANGS.map((l) => (
                    <button
                      key={l.code}
                      className={`lang-option ${lang === l.code ? "selected" : ""}`}
                      onClick={() => changeLang(l.code)}
                    >
                      <span className="lang-option-flag">{l.flag}</span>
                      <div className="lang-option-text">
                        <span className="lang-option-native">{l.native}</span>
                      </div>
                      {lang === l.code && (
                        <svg className="lang-check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="nav-cta" onClick={() => goTo("contact")}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              <span>{t.cta}</span>
            </button>

            <button
              className={`menu-toggle ${mobileOpen ? "open" : ""}`}
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Menu"
            >
              <span className="toggle-line" />
              <span className="toggle-line" />
              <span className="toggle-line" />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-overlay ${mobileOpen ? "open" : ""}`} onClick={() => setMobileOpen(false)} />

      <nav className={`mobile-nav ${mobileOpen ? "open" : ""}`}>
        <div className="mobile-nav-header">
          <div className="mobile-logo">
            <span className="mobile-logo-text">Allesway</span>
            <span className="mobile-logo-accent">Express</span>
          </div>
          <button className="mobile-close" onClick={() => setMobileOpen(false)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="mobile-langs">
          {LANGS.map((l) => (
            <button
              key={l.code}
              className={`mobile-lang-btn ${lang === l.code ? "active" : ""}`}
              onClick={() => changeLang(l.code)}
            >
              {l.flag} {l.label}
            </button>
          ))}
        </div>

        <div className="mobile-divider" />

        <div className="mobile-nav-items">
          {[...navItems, ...moreItems].map((item, i) => (
            <button
              key={item.id}
              className={`mobile-nav-link ${currentPage === item.id ? "active" : ""}`}
              onClick={() => goTo(item.id)}
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <span>{item.label}</span>
              {currentPage === item.id && <span className="mobile-active-badge" />}
            </button>
          ))}
        </div>

        <div className="mobile-divider" />

        <button className="mobile-cta" onClick={() => goTo("contact")}>{t.cta}</button>

        <div className="mobile-nav-footer">
          <p>+49 174 180 99 99</p>
          <p>info@allesway-express.de</p>
        </div>
      </nav>
    </>
  );
}

export default Header;
