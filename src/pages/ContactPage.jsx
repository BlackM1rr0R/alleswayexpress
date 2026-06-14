import { useState, useEffect, useRef } from "react";
import { useReveal } from "../utils/animations";
import I from "../components/Icons";
import T from "../i18n";
import PageHeader from "../components/PageHeader";
import "../styles/Contact.css";

const EMAILJS_SERVICE_ID  = "service_a7c5iqh";
const EMAILJS_TEMPLATE_ID = "template_86em97b";
const EMAILJS_PUBLIC_KEY  = "xlPCUBRq0j3eXMw6H";

const SVC_ICONS = [
  <I.Zap s={20} />, <I.Truck s={20} />, <I.Package s={20} />,
  <I.Shield s={20} />, <I.Globe s={20} />, <I.Users s={20} />,
];
const SVC_IDS = ["express", "lkw", "sprinter", "versicher", "logistik", "firma"];
const URG_IDS = ["express", "standard", "geplant"];

const INFO_ICONS = [
  <I.Phone s={22} />, <I.Mail s={22} />, <I.MapPin s={22} />, <I.Clock s={22} />,
];

function ContactPage({ setPage, lang = "de" }) {
  const tc = (T[lang] || T.de).contact;
  const ph = (T[lang] || T.de).ph.contact;

  const now = new Date();
  const day = now.getDay(); // 0=Sun, 6=Sat
  const h = now.getHours();
  const m = now.getMinutes();
  const mins = h * 60 + m;
  const isOpen = day >= 1 && day <= 5 &&
    ((mins >= 9 * 60 && mins < 12 * 60) || (mins >= 13 * 60 && mins < 18 * 60));

  const [step, setStep]       = useState(1);
  const [sent, setSent]       = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError]     = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  const refQuick      = useReveal();
  const refGuarantees = useReveal();
  const refContact    = useReveal();
  const refFaq        = useReveal();
  const refHours      = useReveal();
  const refSocial     = useReveal();

  const [data, setData] = useState({
    serviceType: "", urgency: "", from: "", to: "",
    weight: "", goods: "", name: "", email: "", phone: "", message: "",
  });

  const set = (key, val) => setData(d => ({ ...d, [key]: val }));

  const nextStep = () => {
    if (step === 1 && (!data.serviceType || !data.urgency)) {
      setError(tc.err_step1); return;
    }
    if (step === 2 && (!data.from || !data.to)) {
      setError(tc.err_step2); return;
    }
    setError("");
    setStep(s => s + 1);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  const prevStep = () => {
    setError("");
    setStep(s => s - 1);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  const handleSubmit = async () => {
    if (!data.name || !data.email) {
      setError(tc.err_step3); return;
    }
    setError("");
    setSending(true);
    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: data.name,
            phone: data.phone,
            from_email: data.email,
            subject: `${data.serviceType} — ${data.urgency}`,
            message: `Route: ${data.from} → ${data.to}\nGewicht: ${data.weight}\nWare: ${data.goods}\n\n${data.message}`,
          },
        }),
      });
      if (res.ok || res.status === 200) {
        setSent(true);
      } else {
        setError(tc.err_send);
      }
    } catch {
      setError(tc.err_network);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <div className="contact-page-bg" aria-hidden>
        <div className="contact-orb contact-orb-1" />
        <div className="contact-orb contact-orb-2" />
        <div className="contact-orb contact-orb-3" />
        <div className="contact-grid-bg" />
        <div className="contact-scan-line" />
      </div>
      <PageHeader title={ph.title} desc={ph.desc} setPage={setPage} lang={lang} page="contact" />

      {/* ══ QUICK CONNECT ══ */}
      <section className="section quick-section reveal-section" ref={refQuick}>
        <div className="section-inner">
          <div className="section-eyebrow" style={{ textAlign: "center", marginBottom: 8 }}>{tc.quick_eyebrow}</div>
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: 32 }}>{tc.quick_title}</h2>
          <div className="quick-grid">
            {tc.quick_cards.map((qc, i) => (
              <a
                key={i}
                href={qc.type === "phone" ? "tel:+491741809999" : qc.type === "wa" ? "https://wa.me/491741809999" : "mailto:info@allesway-express.de"}
                target={qc.type !== "phone" ? "_blank" : undefined}
                rel="noreferrer"
                className={`quick-card quick-card--${qc.type}`}
              >
                <div className="quick-card-icon">
                  {qc.type === "phone" ? <I.Phone s={28} /> : qc.type === "mail" ? <I.Mail s={28} /> : (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  )}
                </div>
                <div className="quick-card-body">
                  <div className="quick-card-title">{qc.title}</div>
                  <div className="quick-card-sub">{qc.sub}</div>
                  <div className="quick-card-value">{qc.value}</div>
                </div>
                <div className="quick-card-action">{qc.action} <I.ArrowRight s={14} /></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GUARANTEES ══ */}
      <section className="section section-dark guarantees-section reveal-section" ref={refGuarantees}>
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">{tc.guarantee_eyebrow}</div>
            <h2 className="section-title">{tc.guarantee_title}</h2>
          </div>
          <div className="guarantees-grid">
            {tc.guarantees.map((g, i) => (
              <div className="guarantee-card" key={i}>
                <div className="guarantee-icon">{g.icon}</div>
                <h4>{g.title}</h4>
                <p>{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section reveal-section" ref={refContact}>
        <div className="section-inner">
          <div className="contact-grid">

            {/* ── LEFT: Info ── */}
            <div className="contact-info">
              <div>
                <h2>{tc.info_h2}</h2>
                <p>{tc.info_desc}</p>
              </div>

              {tc.items.map((item, i) => (
                <div className="contact-item" key={i}>
                  <div className="contact-item-icon">{INFO_ICONS[i]}</div>
                  <div>
                    <h4>{item.title}</h4>
                    {item.lines.map((l, li) => <p key={li}>{l}</p>)}
                  </div>
                </div>
              ))}

              <a href="https://wa.me/491741809999" target="_blank" rel="noreferrer" className="whatsapp-btn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {tc.whatsapp}
              </a>
            </div>

            {/* ── RIGHT: Multi-step form ── */}
            <div className="contact-form">
              {sent ? (
                <div className="success-wrap">
                  <div className="success-icon"><I.Check s={32} c="#22c55e" /></div>
                  <h3 className="success-title">{tc.success_title}</h3>
                  <p className="success-desc">{tc.success_desc}</p>
                </div>
              ) : (
                <>
                  <div className="form-steps">
                    {tc.step_labels.map((label, i) => (
                      <div key={i} className={`form-step${step > i + 1 ? " done" : ""}${step === i + 1 ? " active" : ""}`}>
                        <div className="form-step-num">
                          {step > i + 1 ? <I.Check s={13} /> : i + 1}
                        </div>
                        <span className="form-step-label">{label}</span>
                        {i < 2 && <div className={`form-step-line${step > i + 1 ? " done" : ""}`} />}
                      </div>
                    ))}
                  </div>

                  {error && <p className="form-error">{error}</p>}

                  {/* ── STEP 1 ── */}
                  {step === 1 && (
                    <div className="form-body">
                      <h3 className="form-step-title">{tc.step1_title}</h3>
                      <div className="form-group">
                        <label>{tc.svc_label}</label>
                        <div className="service-type-grid">
                          {tc.service_types.map((label, i) => (
                            <button
                              key={SVC_IDS[i]}
                              className={`service-type-btn${data.serviceType === SVC_IDS[i] ? " active" : ""}`}
                              onClick={() => set("serviceType", SVC_IDS[i])}
                              type="button"
                            >
                              <span className="st-icon">{SVC_ICONS[i]}</span>
                              <span>{label}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="form-group">
                        <label>{tc.urg_label}</label>
                        <div className="urgency-grid">
                          {tc.urgency.map((label, i) => (
                            <button
                              key={URG_IDS[i]}
                              className={`urgency-btn${data.urgency === URG_IDS[i] ? " active" : ""}`}
                              onClick={() => set("urgency", URG_IDS[i])}
                              type="button"
                            >
                              {label}
                            </button>
                          ))}
                        </div>
                      </div>
                      <button className="form-next-btn" onClick={nextStep}>
                        {tc.next_btn} <I.ArrowRight s={18} />
                      </button>
                    </div>
                  )}

                  {/* ── STEP 2 ── */}
                  {step === 2 && (
                    <div className="form-body">
                      <h3 className="form-step-title">{tc.step2_title}</h3>
                      <div className="form-row">
                        <div className="form-group">
                          <label>{tc.from_label}</label>
                          <input className="form-input" placeholder={tc.from_ph} value={data.from} onChange={e => set("from", e.target.value)} />
                        </div>
                        <div className="form-group">
                          <label>{tc.to_label}</label>
                          <input className="form-input" placeholder={tc.to_ph} value={data.to} onChange={e => set("to", e.target.value)} />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>{tc.weight_label}</label>
                          <select className="form-input" value={data.weight} onChange={e => set("weight", e.target.value)}>
                            <option value="">{tc.weight_ph}</option>
                            {tc.weights.map(w => <option key={w} value={w}>{w}</option>)}
                          </select>
                        </div>
                        <div className="form-group">
                          <label>{tc.goods_label}</label>
                          <select className="form-input" value={data.goods} onChange={e => set("goods", e.target.value)}>
                            <option value="">{tc.goods_ph}</option>
                            {tc.goods.map(g => <option key={g} value={g}>{g}</option>)}
                          </select>
                        </div>
                      </div>
                      <div className="form-nav">
                        <button className="form-back-btn" onClick={prevStep}>{tc.back_btn}</button>
                        <button className="form-next-btn" onClick={nextStep}>{tc.next_btn} <I.ArrowRight s={18} /></button>
                      </div>
                    </div>
                  )}

                  {/* ── STEP 3 ── */}
                  {step === 3 && (
                    <div className="form-body">
                      <h3 className="form-step-title">{tc.step3_title}</h3>
                      <div className="form-row">
                        <div className="form-group">
                          <label>{tc.name_label}</label>
                          <input className="form-input" placeholder={tc.name_ph} value={data.name} onChange={e => set("name", e.target.value)} />
                        </div>
                        <div className="form-group">
                          <label>{tc.phone_label}</label>
                          <input className="form-input" placeholder={tc.phone_ph} value={data.phone} onChange={e => set("phone", e.target.value)} />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>{tc.email_label}</label>
                        <input className="form-input" type="email" placeholder={tc.email_ph} value={data.email} onChange={e => set("email", e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label>{tc.note_label}</label>
                        <textarea className="form-textarea form-input" placeholder={tc.note_ph} value={data.message} onChange={e => set("message", e.target.value)} />
                      </div>
                      <div className="form-summary">
                        <div className="fs-item"><span>{tc.summary_svc}</span> {data.serviceType}</div>
                        <div className="fs-item"><span>{tc.summary_route}</span> {data.from || "–"} → {data.to || "–"}</div>
                        <div className="fs-item"><span>{tc.summary_weight}</span> {data.weight || "–"}</div>
                      </div>
                      <div className="form-nav">
                        <button className="form-back-btn" onClick={prevStep}>{tc.back_btn}</button>
                        <button className="form-submit" onClick={handleSubmit} disabled={sending}>
                          {sending ? tc.sending : tc.submit_btn}
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          <div className="contact-map-wrap">
            <div className="contact-map">
              <iframe
                title="Allesway Express Standort"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.5!2d8.2577!3d49.0487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797cc3e3ddd1c1d%3A0x7c3e3ddd1c1d!2sSchulplatz+2%2C+76744+W%C3%B6rth+am+Rhein!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
                width="100%" height="100%"
                style={{ border: 0 }}
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="contact-map-pin">
                <div className="contact-map-pin-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                </div>
                <div className="contact-map-pin-ripple" />
                <div className="contact-map-pin-ripple contact-map-pin-ripple2" />
              </div>
              <div className="contact-map-card">
                <div className="contact-map-card-title">Allesway Express GmbH</div>
                <div className="contact-map-card-addr">
                  Schulplatz 2<br />76744 Wörth am Rhein<br />Deutschland
                </div>
                <div className="contact-map-card-badge" style={!isOpen ? { background: "rgba(239,68,68,0.1)", borderColor: "rgba(239,68,68,0.25)" } : {}}>
                  <div className="contact-map-card-dot" style={!isOpen ? { background: "#ef4444", boxShadow: "0 0 6px rgba(239,68,68,0.6)" } : {}} />
                  <span style={!isOpen ? { color: "#ef4444" } : {}}>
                    {isOpen
                      ? (lang === "en" ? "Open now" : "Jetzt geöffnet")
                      : (lang === "en" ? "Closed" : "Geschlossen")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section-contact reveal-section" ref={refFaq}>
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">{tc.faq_eyebrow}</div>
            <h2 className="section-title">{tc.faq_title}</h2>
            <p className="section-subtitle">{tc.faq_subtitle}</p>
          </div>
          <div className="faq-list">
            {tc.faqs.map((item, i) => (
              <div className={`faq-item${openFaq === i ? " open" : ""}`} key={i}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{item.q}</span>
                  <svg className={`faq-arrow${openFaq === i ? " up" : ""}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className="faq-answer"><p>{item.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ OFFICE HOURS ══ */}
      <section className="section hours-section reveal-section" ref={refHours}>
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">{tc.hours_eyebrow}</div>
            <h2 className="section-title">{tc.hours_title}</h2>
            <p className="section-subtitle">{tc.hours_subtitle}</p>
          </div>
          <div className="hours-grid">
            <div className="hours-table-wrap">
              <table className="hours-table">
                <tbody>
                  {tc.hours_table.map((row, i) => (
                    <tr key={i} className={`hours-row hours-row--${row.type}`}>
                      <td className="hours-day">{row.day}</td>
                      <td className="hours-time">{row.time}</td>
                      <td className="hours-badge-cell">
                        <span className={`hours-badge hours-badge--${row.type}`}>
                          {row.type === "full" ? tc.hours_badge_full : row.type === "partial" ? tc.hours_badge_partial : tc.hours_badge_emergency}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="hours-note">{tc.hours_note}</p>
            </div>
            <div className="hours-response">
              <div className="section-eyebrow" style={{ marginBottom: "20px" }}>{tc.response_eyebrow}</div>
              <h3 style={{ marginBottom: "24px", fontSize: "20px", fontFamily: "var(--font-display)", fontWeight: 700 }}>{tc.response_title}</h3>
              <div className="response-cards">
                {tc.response_cards.map((rc, i) => (
                  <div className="response-card" key={i}>
                    <div className="response-icon">{rc.icon}</div>
                    <div className="response-body">
                      <div className="response-channel">{rc.channel}</div>
                      <div className="response-time">{rc.time}</div>
                      <div className="response-note">{rc.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SOCIAL ══ */}
      <section className="section section-dark contact-social-section reveal-section" ref={refSocial}>
        <div className="section-inner contact-social-inner">
          <div className="section-eyebrow">{tc.social_eyebrow}</div>
          <h2 className="section-title">{tc.social_title}</h2>
          <p className="section-subtitle" style={{ maxWidth: "480px", margin: "0 auto 32px" }}>{tc.social_desc}</p>
          <button
            className="btn-primary"
            onClick={() => window.open("https://www.instagram.com/allesway_express", "_blank")}
          >
            📸 {tc.social_btn}
          </button>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2>{tc.cta_title}</h2>
          <p>{tc.cta_desc}</p>
          <div className="hero-buttons" style={{ justifyContent: "center" }}>
            <a href="tel:+491741809999" className="btn-primary" style={{ textDecoration: "none" }}>
              <I.Phone s={18} /> +49 174 180 99 99
            </a>
            <button className="btn-secondary" onClick={() => { setPage("cargo"); window.scrollTo(0, 0); }}>
              <I.Package s={18} /> {tc.cta_btn2}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
