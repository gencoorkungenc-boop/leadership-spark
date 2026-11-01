"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  target: number;
  decimals?: number;
  suffix: string;
  description: string;
  source: string;
};

export default function StatLine({ target, decimals = 0, suffix, description, source }: Props) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const startTime = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(eased * target);
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="gtm-stat">
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2.8rem, 6vw, 3.4rem)",
          fontWeight: 700,
          lineHeight: 1,
          color: "#1C1208",
          letterSpacing: "-0.02em",
          fontVariantNumeric: "tabular-nums",
          whiteSpace: "nowrap",
        }}
      >
        {value.toFixed(decimals)}
        <span
          style={{
            color: "#C4622D",
            fontSize: "0.45em",
            fontStyle: "italic",
            fontWeight: 400,
            letterSpacing: 0,
            marginLeft: "0.12em",
          }}
        >
          {suffix}
        </span>
      </div>
      <div>
        <p
          style={{
            fontSize: "15px",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            lineHeight: 1.65,
            color: "#1C1208",
            opacity: 0.85,
            margin: "10px 0 10px",
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
            opacity: 0.85,
            margin: 0,
          }}
        >
          {source}
        </p>
      </div>
    </div>
  );
}
