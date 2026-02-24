import "../styles/StatsBar.css";

function StatsBar() {
  const stats = [
    { number: "25.000+", label: "Erfolgreiche Lieferungen" },
    { number: "85+", label: "LKW & Sprinter" },
    { number: "200+", label: "Städte deutschlandweit" },
    { number: "99,7%", label: "Kundenzufriedenheit" },
  ];
  return (
    <div className="stats-bar">
      <div className="stats-inner">
        {stats.map((s, i) => (<div className="stat-item" key={i}><div className="stat-number">{s.number}</div><div className="stat-label">{s.label}</div></div>))}
      </div>
    </div>
  );
}

export default StatsBar;
