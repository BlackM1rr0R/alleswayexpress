import { useState } from "react";
import I from "../components/Icons";
import PageHeader from "../components/PageHeader";
import "../styles/Contact.css";

function ContactPage({ setPage }) {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHeader
        title="Kontakt"
        desc="Nehmen Sie Kontakt mit uns auf — wir helfen Ihnen gerne"
        setPage={setPage}
      />

      <section className="section contact-section">
        <div className="section-inner">
          <div className="contact-grid">
            {/* ─── LEFT: Info ─── */}
            <div className="contact-info">
              <div>
                <h2>Sprechen Sie mit uns</h2>
                <p>
                  Haben Sie Fragen zu unseren Leistungen oder möchten Sie ein
                  Angebot anfordern? Unser Team steht Ihnen jederzeit zur
                  Verfügung — schnell, persönlich und unkompliziert.
                </p>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <I.Phone s={22} />
                </div>
                <div>
                  <h4>Telefon</h4>
                  <p>0174 946 9999</p>
                  <p>Rund um die Uhr erreichbar</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <I.Mail s={22} />
                </div>
                <div>
                  <h4>E-Mail</h4>
                  <p>allesway@outlook.com</p>
                  <p>Antwort innerhalb von 2 Stunden</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <I.MapPin s={22} />
                </div>
                <div>
                  <h4>Adresse</h4>
                  <p>Schulplatz 2</p>
                  <p>76744 Wörth am Rhein</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <I.Clock s={22} />
                </div>
                <div>
                  <h4>Öffnungszeiten</h4>
                  <p>Mo — Fr: 06:00 – 20:00 Uhr</p>
                  <p>Sa: 08:00 – 16:00 Uhr</p>
                  <p>So: Notdienst verfügbar</p>
                </div>
              </div>
            </div>

            {/* ─── RIGHT: Form ─── */}
            <div className="contact-form">
              {sent ? (
                <div className="success-wrap">
                  <div className="success-icon">
                    <I.Check s={32} c="#22c55e" />
                  </div>
                  <h3 className="success-title">Nachricht gesendet!</h3>
                  <p className="success-desc">
                    Vielen Dank für Ihre Anfrage. Wir melden uns
                    schnellstmöglich bei Ihnen — in der Regel innerhalb von 2
                    Stunden.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="form-title">Nachricht senden</h3>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Vor- und Nachname</label>
                      <input
                        className="form-input"
                        placeholder="Max Mustermann"
                      />
                    </div>
                    <div className="form-group">
                      <label>Telefon</label>
                      <input
                        className="form-input"
                        placeholder="+49 174 ..."
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>E-Mail</label>
                    <input
                      className="form-input"
                      type="email"
                      placeholder="ihre@email.de"
                    />
                  </div>

                  <div className="form-group">
                    <label>Betreff</label>
                    <input
                      className="form-input"
                      placeholder="Angebot, Frage, Auftrag..."
                    />
                  </div>

                  <div className="form-group">
                    <label>Nachricht</label>
                    <textarea
                      className="form-textarea form-input"
                      placeholder="Beschreiben Sie Ihr Anliegen..."
                    />
                  </div>

                  <button
                    className="form-submit"
                    onClick={() => setSent(true)}
                  >
                    Nachricht absenden
                  </button>
                </>
              )}
            </div>
          </div>

          {/* ─── MAP ─── */}
          <div className="contact-map">
            <div className="contact-map-inner">
              <I.MapPin s={36} c="var(--accent)" />
              <p>Schulplatz 2, 76744 Wörth am Rhein</p>
              <span>Direkt an der B9 — optimale Anbindung an A65 und A5</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;