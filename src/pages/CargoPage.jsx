import { useEffect, useMemo, useState } from "react";
import I from "../components/Icons";
import PageHeader from "../components/PageHeader";
import generateCargos from "../components/GenerateCargo";
import "../styles/Cargo.css";

function CargoPage({ setPage }) {
  const allCargos = useMemo(() => generateCargos(), []);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [page, setPageNum] = useState(1);
  const perPage = 12;

  const statusMap = {
    unterwegs: "Unterwegs",
    zugestellt: "Zugestellt",
    wartend: "Wartend",
    verarbeitung: "In Bearbeitung",
  };

  const filters = [
    { id: "all", label: "Alle" },
    { id: "unterwegs", label: "Unterwegs" },
    { id: "zugestellt", label: "Zugestellt" },
    { id: "wartend", label: "Wartend" },
    { id: "verarbeitung", label: "In Bearbeitung" },
  ];

  const filtered = allCargos
    .filter((c) => filter === "all" || c.status === filter)
    .filter(
      (c) =>
        !search ||
        c.id.toLowerCase().includes(search.toLowerCase()) ||
        c.from.toLowerCase().includes(search.toLowerCase()) ||
        c.to.toLowerCase().includes(search.toLowerCase()) ||
        c.receiver.toLowerCase().includes(search.toLowerCase())
    );

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  useEffect(() => {
    setPageNum(1);
  }, [filter, search]);

  // Build page buttons with ellipsis
  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= page - 1 && i <= page + 1)) {
      pageButtons.push(i);
    } else if (pageButtons[pageButtons.length - 1] !== "...") {
      pageButtons.push("...");
    }
  }

  const goToPage = (p) => {
    setPageNum(p);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  return (
    <>
      <PageHeader
        title="Sendungen"
        desc="Verfolgen Sie alle Sendungen in Echtzeit"
        setPage={setPage}
      />

      <section className="section">
        <div className="section-inner">
          {/* Search */}
          <div className="cargo-search-wrap">
            <div className="tracking-input-wrap">
              <input
                className="tracking-input"
                placeholder="Sendungsnummer, Stadt oder Empfänger suchen..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="tracking-btn">
                <I.Search s={20} />
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="cargo-filters">
            {filters.map((f) => (
              <button
                key={f.id}
                className={`cargo-filter-btn ${filter === f.id ? "active" : ""}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}{" "}
                ({f.id === "all"
                  ? allCargos.length
                  : allCargos.filter((c) => c.status === f.id).length})
              </button>
            ))}
          </div>

          {/* Cargo Grid or Empty State */}
          {paginated.length > 0 ? (
            <div className="cargo-grid">
              {paginated.map((c, i) => (
                <div className="cargo-card" key={i}>
                  <div className="cargo-card-header">
                    <div className="cargo-id">{c.id}</div>
                    <div className={`cargo-status ${c.status}`}>
                      {statusMap[c.status]}
                    </div>
                  </div>
                  <div className="cargo-card-body">
                    <div className="cargo-detail">
                      <label>Von</label>
                      <p>{c.from}</p>
                    </div>
                    <div className="cargo-detail">
                      <label>Nach</label>
                      <p>{c.to}</p>
                    </div>
                    <div className="cargo-detail">
                      <label>Gewicht</label>
                      <p>{c.weight}</p>
                    </div>
                    <div className="cargo-detail">
                      <label>Fahrzeug</label>
                      <p>{c.vehicle}</p>
                    </div>
                    <div className="cargo-detail">
                      <label>Ware</label>
                      <p>{c.goods}</p>
                    </div>
                    <div className="cargo-detail">
                      <label>Empfänger</label>
                      <p style={{ fontSize: "12.5px" }}>{c.receiver}</p>
                    </div>
                  </div>
                  <div className="cargo-card-footer">
                    <div className="cargo-progress">
                      <div
                        className="cargo-progress-fill"
                        style={{ width: `${c.progress}%` }}
                      />
                    </div>
                    <div className="cargo-progress-text">{c.progress}%</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="cargo-empty">
              <div className="cargo-empty-icon">
                <I.Search s={28} />
              </div>
              <h3>Keine Sendungen gefunden</h3>
              <p>
                Versuchen Sie es mit einem anderen Suchbegriff oder ändern Sie
                den Filter.
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="cargo-pagination">
              {/* Prev button */}
              <button
                className="cargo-page-nav"
                disabled={page <= 1}
                onClick={() => goToPage(page - 1)}
                aria-label="Vorherige Seite"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              {/* Page numbers */}
              {pageButtons.map((p, i) =>
                p === "..." ? (
                  <span key={i} className="page-dots">
                    ...
                  </span>
                ) : (
                  <button
                    key={i}
                    className={`cargo-page-btn ${page === p ? "active" : ""}`}
                    onClick={() => goToPage(p)}
                  >
                    {p}
                  </button>
                )
              )}

              {/* Next button */}
              <button
                className="cargo-page-nav"
                disabled={page >= totalPages}
                onClick={() => goToPage(page + 1)}
                aria-label="Nächste Seite"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          )}

          {/* Result count */}
          <p className="cargo-result-count">
            <strong>{filtered.length}</strong> Sendung
            {filtered.length !== 1 ? "en" : ""} gefunden — Seite{" "}
            <strong>{page}</strong> von <strong>{totalPages || 1}</strong>
          </p>
        </div>
      </section>
    </>
  );
}

export default CargoPage;