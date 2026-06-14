import { useEffect, useMemo, useState } from "react";
import { useReveal, Particles } from "../utils/animations";
import I from "../components/Icons";
import T from "../i18n";
import PageHeader from "../components/PageHeader";
import generateCargos from "../components/GenerateCargo";
import "../styles/Cargo.css";

const FILTER_IDS = ["all", "unterwegs", "zugestellt", "wartend", "verarbeitung"];

function CargoPage({ setPage, lang = "de" }) {
  const tc = (T[lang] || T.de).cargo;
  const ph = (T[lang] || T.de).ph.cargo;

  const allCargos = useMemo(() => generateCargos(), []);
  const [filter, setFilter]         = useState("all");
  const [search, setSearch]         = useState("");
  const [page, setPageNum]          = useState(1);
  const [trackInput, setTrackInput] = useState("");
  const [trackResult, setTrackResult]   = useState(null);
  const [trackSearched, setTrackSearched] = useState(false);
  const perPage = 12;

  const statusLabels = tc.status;

  const filters = FILTER_IDS.map((id, i) => ({ id, label: tc.filters[i] }));

  const filtered = allCargos
    .filter(c => filter === "all" || c.status === filter)
    .filter(c =>
      !search ||
      c.id.toLowerCase().includes(search.toLowerCase()) ||
      c.from.toLowerCase().includes(search.toLowerCase()) ||
      c.to.toLowerCase().includes(search.toLowerCase()) ||
      c.receiver.toLowerCase().includes(search.toLowerCase())
    );

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated  = filtered.slice((page - 1) * perPage, page * perPage);

  useEffect(() => { setPageNum(1); }, [filter, search]);

  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= page - 1 && i <= page + 1)) {
      pageButtons.push(i);
    } else if (pageButtons[pageButtons.length - 1] !== "...") {
      pageButtons.push("...");
    }
  }

  const refLiveStats  = useReveal();
  const refShipments  = useReveal();
  const refInfoCards  = useReveal();
  const refHowTracking = useReveal();
  const refCargoTypes = useReveal();

  const goToPage = p => {
    setPageNum(p);
    window.scrollTo({ top: 480, behavior: "smooth" });
  };

  const handleTrack = () => {
    const q = trackInput.trim().toUpperCase();
    if (!q) return;
    const found = allCargos.find(c => c.id.toUpperCase() === q);
    setTrackResult(found || null);
    setTrackSearched(true);
  };

  const getTrackStage = progress => {
    if (progress >= 100) return 3;
    if (progress >= 60)  return 2;
    if (progress >= 25)  return 1;
    return 0;
  };

  const TRACK_STAGES = [
    { label: tc.track_stages[0], icon: <I.Check s={14} /> },
    { label: tc.track_stages[1], icon: <I.Package s={14} /> },
    { label: tc.track_stages[2], icon: <I.Truck s={14} /> },
    { label: tc.track_stages[3], icon: <I.MapPin s={14} /> },
  ];

  const statusDisplay = (st) => statusLabels[st] || st;

  return (
    <>
      <PageHeader title={ph.title} desc={ph.desc} setPage={setPage} lang={lang} page="cargo" />

      {/* ══ PAGE BACKGROUND ══ */}
      <div className="cargo-page-bg">
        <div className="cargo-orb cargo-orb-1" />
        <div className="cargo-orb cargo-orb-2" />
        <div className="cargo-orb cargo-orb-3" />
        <div className="cargo-orb cargo-orb-4" />
        <div className="cargo-grid-bg" />
        <div className="cargo-scan-line" />
      </div>
      <Particles />

      {/* ══ LIVE STATS ══ */}
      <section className="section live-stats-section reveal-section" ref={refLiveStats}>
        <div className="section-inner">
          <div className="section-eyebrow" style={{ textAlign: "center", marginBottom: 8 }}>{tc.live_eyebrow}</div>
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: 32 }}>{tc.live_title}</h2>
          <div className="live-stats-grid">
            {[
              { val: allCargos.length,                               label: tc.live_labels.total,      color: "gold"  },
              { val: allCargos.filter(c => c.status === "unterwegs").length, label: tc.live_labels.unterwegs, color: "blue"  },
              { val: allCargos.filter(c => c.status === "zugestellt").length,label: tc.live_labels.zugestellt,color: "green" },
              { val: allCargos.filter(c => c.status === "wartend" || c.status === "verarbeitung").length, label: tc.live_labels.wartend, color: "purple" },
            ].map((s, i) => (
              <div className={`live-stat-card live-stat-card--${s.color}`} key={i}>
                <div className="live-stat-num">{s.val}</div>
                <div className="live-stat-label">{s.label}</div>
                <div className="live-stat-bar">
                  <div className="live-stat-fill" style={{ width: `${Math.round((s.val / allCargos.length) * 100)}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TRACKING HERO ══ */}
      <section className="track-hero">
        <div className="section-inner">
          <div className="track-hero-content">
            <div className="track-hero-label">
              <I.Search s={16} /> {tc.track_label}
            </div>
            <h2>{tc.track_title}</h2>
            <p>{tc.track_desc}</p>

            <div className="track-hero-bar">
              <input
                className="track-hero-input"
                placeholder={tc.track_placeholder}
                value={trackInput}
                onChange={e => { setTrackInput(e.target.value); setTrackSearched(false); setTrackResult(null); }}
                onKeyDown={e => e.key === "Enter" && handleTrack()}
              />
              <button className="track-hero-btn" onClick={handleTrack}>
                <I.Search s={20} />
                <span>{tc.track_btn}</span>
              </button>
            </div>

            {trackSearched && trackResult && (
              <div className="track-result">
                <div className="track-result-top">
                  <div>
                    <div className="track-result-id">{trackResult.id}</div>
                    <div className="track-result-route">
                      {trackResult.from} <span>→</span> {trackResult.to}
                    </div>
                  </div>
                  <div className={`cargo-status ${trackResult.status}`}>
                    {statusDisplay(trackResult.status)}
                  </div>
                </div>

                <div className="track-stages">
                  {TRACK_STAGES.map((st, si) => {
                    const currentStage = getTrackStage(trackResult.progress);
                    const done   = si < currentStage;
                    const isActive = si === currentStage;
                    return (
                      <div className="track-stage" key={si}>
                        <div className={`track-stage-dot${done ? " done" : ""}${isActive ? " active" : ""}`}>
                          {done ? <I.Check s={12} /> : st.icon}
                        </div>
                        {si < 3 && <div className={`track-stage-line${done ? " done" : ""}`} />}
                        <div className={`track-stage-label${isActive ? " active" : ""}${done ? " done" : ""}`}>
                          {st.label}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="track-result-meta">
                  <div className="track-meta-item"><label>{tc.track_meta.receiver}</label><p>{trackResult.receiver}</p></div>
                  <div className="track-meta-item"><label>{tc.track_meta.vehicle}</label><p>{trackResult.vehicle}</p></div>
                  <div className="track-meta-item"><label>{tc.track_meta.weight}</label><p>{trackResult.weight}</p></div>
                  <div className="track-meta-item"><label>{tc.track_meta.goods}</label><p>{trackResult.goods}</p></div>
                </div>

                <div className="track-progress-wrap">
                  <div className="track-progress-bar">
                    <div className="track-progress-fill" style={{ width: `${trackResult.progress}%` }} />
                  </div>
                  <span className="track-progress-pct">{trackResult.progress}% {tc.progress_label}</span>
                </div>
              </div>
            )}

            {trackSearched && !trackResult && (
              <div className="track-not-found">
                <I.Search s={20} />
                <span>{tc.track_notfound}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ══ ALL SHIPMENTS ══ */}
      <section className="section reveal-section" ref={refShipments}>
        <div className="section-inner">
          <div className="cargo-section-header">
            <h3>{tc.all_title}</h3>
            <span className="cargo-count-badge">{allCargos.length} {tc.result_count1}{tc.result_count2}</span>
          </div>

          <div className="cargo-search-wrap">
            <div className="tracking-input-wrap">
              <input
                className="tracking-input"
                placeholder={tc.search_placeholder}
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <button className="tracking-btn"><I.Search s={20} /></button>
            </div>
          </div>

          <div className="cargo-filters">
            {filters.map(f => (
              <button
                key={f.id}
                className={`cargo-filter-btn${filter === f.id ? " active" : ""}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}{" "}
                ({f.id === "all" ? allCargos.length : allCargos.filter(c => c.status === f.id).length})
              </button>
            ))}
          </div>

          {paginated.length > 0 ? (
            <div className="cargo-grid">
              {paginated.map((c, i) => (
                <div className="cargo-card" key={i}>
                  <div className="cargo-card-header">
                    <div className="cargo-id">{c.id}</div>
                    <div className={`cargo-status ${c.status}`}>{statusDisplay(c.status)}</div>
                  </div>
                  <div className="cargo-card-body">
                    <div className="cargo-detail"><label>{tc.card_from}</label><p>{c.from}</p></div>
                    <div className="cargo-detail"><label>{tc.card_to}</label><p>{c.to}</p></div>
                    <div className="cargo-detail"><label>{tc.card_weight}</label><p>{c.weight}</p></div>
                    <div className="cargo-detail"><label>{tc.card_vehicle}</label><p>{c.vehicle}</p></div>
                    <div className="cargo-detail"><label>{tc.card_goods}</label><p>{c.goods}</p></div>
                    <div className="cargo-detail"><label>{tc.card_receiver}</label><p style={{ fontSize: "12.5px" }}>{c.receiver}</p></div>
                  </div>
                  <div className="cargo-card-footer">
                    <div className="cargo-progress">
                      <div className="cargo-progress-fill" style={{ width: `${c.progress}%` }} />
                    </div>
                    <div className="cargo-progress-text">{c.progress}%</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="cargo-empty">
              <div className="cargo-empty-icon"><I.Search s={28} /></div>
              <h3>{tc.empty_title}</h3>
              <p>{tc.empty_desc}</p>
            </div>
          )}

          {totalPages > 1 && (
            <div className="cargo-pagination">
              <button className="cargo-page-nav" disabled={page <= 1} onClick={() => goToPage(page - 1)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              {pageButtons.map((p, i) =>
                p === "..." ? (
                  <span key={i} className="page-dots">...</span>
                ) : (
                  <button
                    key={i}
                    className={`cargo-page-btn${page === p ? " active" : ""}`}
                    onClick={() => goToPage(p)}
                  >
                    {p}
                  </button>
                )
              )}
              <button className="cargo-page-nav" disabled={page >= totalPages} onClick={() => goToPage(page + 1)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          )}

          <p className="cargo-result-count">
            <strong>{filtered.length}</strong> {tc.result_count1}{filtered.length !== 1 ? tc.result_count2 : ""} {tc.result_page}{" "}
            <strong>{page}</strong> {tc.result_of} <strong>{totalPages || 1}</strong>
          </p>
        </div>
      </section>

      {/* ══ INFO CARDS ══ */}
      <section className="section section-dark reveal-section" ref={refInfoCards}>
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">{tc.info_eyebrow}</div>
            <h2 className="section-title">{tc.info_title}</h2>
          </div>
          <div className="cargo-info-grid">
            {tc.info_cards.map((card, i) => (
              <div className="cargo-info-card" key={i}>
                <div className="cargo-info-icon">{card.icon}</div>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HOW TRACKING WORKS ══ */}
      <section className="section cargo-how-section reveal-section" ref={refHowTracking}>
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">{tc.how_eyebrow}</div>
            <h2 className="section-title">{tc.how_title}</h2>
          </div>
          <div className="cargo-how-grid">
            {tc.how_steps.map((step, i) => (
              <div className="cargo-how-step" key={i}>
                <div className="cargo-how-num">{step.num}</div>
                <div className="cargo-how-icon">{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
                {i < tc.how_steps.length - 1 && <div className="cargo-how-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CARGO TYPES ══ */}
      <section className="section section-dark cargo-types-section reveal-section" ref={refCargoTypes}>
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">{tc.types_eyebrow}</div>
            <h2 className="section-title">{tc.types_title}</h2>
            <p className="section-subtitle">{tc.types_subtitle}</p>
          </div>
          <div className="cargo-types-grid">
            {tc.cargo_types.map((ct, i) => (
              <div className="cargo-type-card" key={i}>
                <div className="cargo-type-icon">{ct.icon}</div>
                <h4>{ct.title}</h4>
                <p>{ct.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CargoPage;
