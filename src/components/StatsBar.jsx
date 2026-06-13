import T from "../i18n";
import "../styles/StatsBar.css";

function StatsBar({ lang = "de" }) {
  const stats = (T[lang] || T.de).stats;
  return (
    <div className="stats-bar">
      <div className="stats-inner">
        {stats.map((s, i) => (
          <div className="stat-item" key={i}>
            <div className="stat-number">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsBar;
