import { useState, useEffect, useRef } from "react";

export function parseNum(str) {
  const m = String(str).match(/[\d,.]+/);
  return m ? parseFloat(m[0].replace(/\./g, "").replace(",", ".")) : null;
}

export function formatNum(val, orig) {
  const s = String(orig);
  const rounded = Math.round(val).toLocaleString("de-DE");
  return s.replace(/[\d.,]+/, rounded);
}

export function CountUp({ val }) {
  const [display, setDisplay] = useState(val);
  const rafRef = useRef(null);
  const ref = useRef(null);
  useEffect(() => {
    const target = parseNum(val);
    if (target === null) return;
    const obs = new IntersectionObserver(([e]) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (e.isIntersecting) {
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / 1600, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setDisplay(formatNum(target * ease, val));
          if (p < 1) rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
      } else { setDisplay(formatNum(0, val)); }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => { obs.disconnect(); if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [val]);
  return <span ref={ref}>{display}</span>;
}

export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("revealed"); },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export function useTilt(intensity = 10) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(800px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) scale(1.02)`;
    };
    const onLeave = () => { el.style.transform = ""; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, [intensity]);
  return ref;
}

export const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 11) % 100}%`,
  top: `${(i * 53 + 7) % 100}%`,
  size: (i % 3 === 0) ? 3 : (i % 3 === 1) ? 2 : 1.5,
  dur: 6 + (i % 5) * 2,
  delay: -(i * 1.1),
  opacity: 0.15 + (i % 4) * 0.08,
}));

export function Particles() {
  return (
    <div className="hero-particles" aria-hidden>
      {PARTICLES.map(p => (
        <div key={p.id} className="hero-particle" style={{
          left: p.left, top: p.top,
          width: p.size, height: p.size,
          animationDuration: `${p.dur}s`,
          animationDelay: `${p.delay}s`,
          opacity: p.opacity,
        }} />
      ))}
    </div>
  );
}
