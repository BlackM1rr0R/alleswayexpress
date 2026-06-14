import { useEffect, useRef, useState } from "react";
import T from "../i18n";
import back1 from "../assets/new5.jpeg";
import back2 from "../assets/back2.jpeg";
import back3 from "../assets/back3.jpeg";
import back4 from "../assets/back4.jpeg";
import "../styles/StatsBar.css";

const STAT_IMAGES = [back1, back2, back3, back4];

function parseNum(str) {
  const match = str.match(/[\d,.]+/);
  if (!match) return null;
  return parseFloat(match[0].replace(/\./g, "").replace(",", "."));
}

function formatNum(val, original) {
  const hasComma = original.includes(",");
  const hasDot = /\d\./.test(original) && !hasComma;
  let formatted;
  if (hasComma) {
    formatted = val.toFixed(1).replace(".", ",");
  } else if (hasDot) {
    formatted = Math.round(val).toLocaleString("de-DE");
  } else {
    formatted = Math.round(val).toLocaleString("de-DE");
  }
  return original.replace(/[\d.,]+/, formatted);
}

function AnimatedStat({ num }) {
  const [display, setDisplay] = useState(num);
  const rafRef = useRef(null);
  const ref = useRef(null);

  useEffect(() => {
    const target = parseNum(num);
    if (target === null) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        if (entry.isIntersecting) {
          const duration = 1800;
          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setDisplay(formatNum(target * ease, num));
            if (progress < 1) rafRef.current = requestAnimationFrame(tick);
          };
          rafRef.current = requestAnimationFrame(tick);
        } else {
          setDisplay(formatNum(0, num));
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { observer.disconnect(); if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [num]);

  return <div className="stat-number" ref={ref}>{display}</div>;
}

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
            <AnimatedStat num={s.num} />
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsBar;
