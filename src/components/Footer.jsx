import I from "./Icons";
import "../styles/Footer.css";

function Footer({ setPage }) {
  const goTo = (p) => { setPage(p); window.scrollTo(0, 0); };
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo-text" style={{ fontSize: 24 }}>Allesway<span>Express</span></div>
            <p>Ihr zuverlässiger Partner für Transporte und Logistik in ganz Deutschland. Schnell, sicher und professionell — seit 2018.</p>
            <div className="footer-socials">
              <button className="footer-social"><I.Facebook s={18} /></button>
              <button className="footer-social"><I.Instagram s={18} /></button>
              <button className="footer-social"><I.Linkedin s={18} /></button>
            </div>
          </div>
          <div className="footer-col">
            <h4>Seiten</h4>
            <ul>
              <li><button onClick={() => goTo("home")}>Startseite</button></li>
              <li><button onClick={() => goTo("services")}>Leistungen</button></li>
              <li><button onClick={() => goTo("cargo")}>Sendungen</button></li>
              <li><button onClick={() => goTo("about")}>Über uns</button></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Leistungen</h4>
            <ul>
              <li><button onClick={() => goTo("services")}>Express-Zustellung</button></li>
              <li><button onClick={() => goTo("services")}>LKW-Transport</button></li>
              <li><button onClick={() => goTo("services")}>Sprinter-Service</button></li>
              <li><button onClick={() => goTo("services")}>Firmentransporte</button></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Kontakt</h4>
            <ul>
              <li><button>0174 946 9999</button></li>
              <li><button>allesway@outlook.com</button></li>
              <li><button>Schulplatz 2, 76744 Wörth</button></li>
              <li><button onClick={() => goTo("contact")}>Nachricht senden</button></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Allesway Express. Alle Rechte vorbehalten.</p>
          <p>Mit Leidenschaft aus Wörth am Rhein</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
