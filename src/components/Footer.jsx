import I from "./Icons";
import T from "../i18n";
import logoImg from "../assets/logo_transparent.png";
import "../styles/Footer.css";

function Footer({ setPage, lang = "de" }) {
  const f = (T[lang] || T.de).footer;
  const nav = (T[lang] || T.de).ph;
  const goTo = (p) => { setPage(p); window.scrollTo(0, 0); };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">

          <div className="footer-brand">
            <div className="footer-logo" onClick={() => goTo("home")}>
              <img src={logoImg} alt="Allesway Express" className="footer-logo-img" />
              <div className="footer-logo-text">
                <span className="footer-logo-main">Allesway</span>
                <span className="footer-logo-accent">Express</span>
              </div>
            </div>
            <p>{f.tagline}</p>
            <div className="footer-socials">
              <button
                className="footer-social"
                onClick={() => window.open("https://www.instagram.com/allesway_express", "_blank")}
              >
                <I.Instagram s={18} />
              </button>
            </div>
          </div>

          <div className="footer-col">
            <h4>{f.nav_title}</h4>
            <ul>
              <li><button onClick={() => goTo("home")}>{(T[lang] || T.de).home_label || "Startseite"}</button></li>
              <li><button onClick={() => goTo("services")}>{nav.services.title}</button></li>
              <li><button onClick={() => goTo("cargo")}>{nav.cargo.title}</button></li>
              <li><button onClick={() => goTo("about")}>{nav.about.title}</button></li>
              <li><button onClick={() => goTo("contact")}>{nav.contact.title}</button></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{f.svc_title}</h4>
            <ul>
              {f.svc_links.map((lnk, i) => (
                <li key={i}><button onClick={() => goTo("services")}>{lnk}</button></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>{f.cnt_title}</h4>
            <ul>
              <li><a href="tel:+491741809999">+49 174 180 99 99</a></li>
              <li><a href="mailto:info@allesway-express.de">info@allesway-express.de</a></li>
              <li><button>{f.address}</button></li>
              <li><button onClick={() => goTo("contact")}>{f.send_msg}</button></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>{f.copyright}</p>
          <p>{f.tagline2}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
