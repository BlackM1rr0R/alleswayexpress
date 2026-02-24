import "../styles/PageHeader.css";

function PageHeader({ title, desc, setPage }) {
  return (
    <div className="page-header">
      <div className="breadcrumb">
        <button onClick={() => { setPage("home"); window.scrollTo(0, 0); }}>Startseite</button>
        <span>/</span>
        <span>{title}</span>
      </div>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
}

export default PageHeader;
