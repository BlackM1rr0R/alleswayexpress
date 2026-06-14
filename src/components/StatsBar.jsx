import T from "../i18n";
import back1 from "../assets/back1.jpeg";
import back2 from "../assets/back2.jpeg";
import back3 from "../assets/back3.jpeg";
import back4 from "../assets/back4.jpeg";
import "../styles/StatsBar.css";

const STAT_IMAGES = [back1, back2, back3, back4];

function StatsBar({ lang = "de" }) {
  const stats = (T[lang] || T.de).stats;
  return (
    <div className="stats-bar">
      <div className="stats-inner">
        {stats.map((s, i) => (
          <div className="stat-item" key={i}>
            <div className="stat-item-bg">
              <img src={STAT_IMAGES[i]} alt="" className="stat-bg-img" />
              <div className="stat-bg-overlay" />
            </div>
            <div className="stat-number">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsBar;
