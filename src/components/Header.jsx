import { useState, useEffect } from "react";
import I from "./Icons";
import "../styles/Header.css";

function Header({ currentPage, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const navItems = [
    { id: "home", label: "Startseite" },
    { id: "services", label: "Leistungen" },
    { id: "cargo", label: "Sendungen" },
    { id: "about", label: "Über uns" },
    { id: "contact", label: "Kontakt" },
  ];
  const goTo = (p) => { setPage(p); setMobileOpen(false); window.scrollTo(0, 0); };
  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        <div className="logo" onClick={() => goTo("home")}>
          <div className="logo-icon"><I.Truck s={22} c="white" /></div>
          <div className="logo-text">Allesway<span>Express</span></div>
        </div>
        <nav className="nav-desktop">
          {navItems.map(item => (<button key={item.id} className={`nav-link ${currentPage === item.id ? "active" : ""}`} onClick={() => goTo(item.id)}>{item.label}</button>))}
          <button className="nav-cta" onClick={() => goTo("contact")}>Auftrag erteilen</button>
        </nav>
        <button className="menu-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <I.X s={24} /> : <I.Menu s={24} />}
        </button>
      </div>
      <nav className={`mobile-nav ${mobileOpen ? "open" : ""}`}>
        {navItems.map(item => (<button key={item.id} className={`nav-link ${currentPage === item.id ? "active" : ""}`} onClick={() => goTo(item.id)}>{item.label}</button>))}
        <button className="nav-cta" onClick={() => goTo("contact")}>Auftrag erteilen</button>
      </nav>
    </header>
  );
}

export default Header;
