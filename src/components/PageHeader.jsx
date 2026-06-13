import T from "../i18n";
import "../styles/PageHeader.css";

const ANIM = {
  services: (
    <>
      <div className="ph-beam ph-beam-1" />
      <div className="ph-beam ph-beam-2" />
      <div className="ph-beam ph-beam-3" />
      <div className="ph-orb ph-orb-1" />
      <div className="ph-orb ph-orb-2" />
      <div className="ph-grid-svc" />
    </>
  ),
  cargo: (
    <>
      <div className="ph-map-grid" />
      <div className="ph-ping ph-ping-1"><div className="ph-ping-dot" /></div>
      <div className="ph-ping ph-ping-2"><div className="ph-ping-dot" /></div>
      <div className="ph-ping ph-ping-3"><div className="ph-ping-dot" /></div>
      <div className="ph-route-line" />
    </>
  ),
  about: (
    <>
      <div className="ph-ring ph-ring-1" />
      <div className="ph-ring ph-ring-2" />
      <div className="ph-ring ph-ring-3" />
      <div className="ph-center-glow" />
    </>
  ),
  contact: (
    <>
      <div className="ph-ripple ph-ripple-1" />
      <div className="ph-ripple ph-ripple-2" />
      <div className="ph-ripple ph-ripple-3" />
      <div className="ph-ripple ph-ripple-4" />
      <div className="ph-ripple ph-ripple-5" />
      <div className="ph-beacon" />
    </>
  ),
};

function PageHeader({ title, desc, setPage, lang = "de", page = "" }) {
  const homeLabel = (T[lang] || T.de).home_label;
  return (
    <div className={`page-header${page ? ` page-header--${page}` : ""}`}>
      <div className="page-header-bg">
        <div className="page-header-bg-overlay" />
        {page && ANIM[page] && (
          <div className="ph-anim-layer">{ANIM[page]}</div>
        )}
      </div>
      <div className="page-header-content">
        <div className="breadcrumb">
          <button onClick={() => { setPage("home"); window.scrollTo(0, 0); }}>{homeLabel}</button>
          <span className="breadcrumb-sep">/</span>
          <span>{title}</span>
        </div>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <div className="page-header-line" />
    </div>
  );
}

export default PageHeader;
