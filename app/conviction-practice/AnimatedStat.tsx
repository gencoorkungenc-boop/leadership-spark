"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  target: number;
  description: string;
  source: string;
};

export default function AnimatedStat({ target, description, source }: Props) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const startTime = performance.now();
          function tick(now: number) {
            const elapsed = now - startTime;
            const t = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setCount(Math.round(eased * target));
            if (t < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div
      ref={ref}
      className="stat-row"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "32px",
        alignItems: "flex-end",
        padding: "80px 24px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {/* Huge number — left */}
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(7rem, 22vw, 14rem)",
          fontWeight: 700,
          lineHeight: 0.85,
          color: "#1C1208",
          letterSpacing: "-0.04em",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {count}
        <span style={{ color: "#C4622D", fontSize: "0.5em", letterSpacing: 0 }}>%</span>
      </div>

      {/* Description — right */}
      <div style={{ paddingBottom: "8px" }}>
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
            fontWeight: 400,
            lineHeight: 1.55,
            color: "#1C1208",
            marginBottom: "20px",
          }}
        >
          {description}
        </p>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#C4622D",
            opacity: 0.8,
          }}
        >
          {source}
        </p>
      </div>
    </div>
  );
}
