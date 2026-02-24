import "../styles/StatsBar.css";

function StatsBar() {
  const stats = [
    { number: "15,000+", label: "Uğurlu çatdırılma" },
    { number: "120+", label: "Sprinter nəqliyyat" },
    { number: "50+", label: "Şəhər əhatəsi" },
    { number: "99.8%", label: "Müştəri məmnuniyyəti" },
  ];

  return (
    <div className="stats-bar">
      <div className="stats-inner">
        {stats.map((s, i) => (
          <div className="stat-item" key={i}>
            <div className="stat-number">{s.number}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsBar;
