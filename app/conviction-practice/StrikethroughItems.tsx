"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  "A ghostwriting service.",
  "A content calendar.",
  "A LinkedIn makeover.",
];

export default function StrikethroughItems() {
  const [phase, setPhase] = useState<"hidden" | "visible" | "struck">("hidden");
  const ref = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          setPhase("visible");
          setTimeout(() => setPhase("struck"), 500);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      {items.map((item, i) => (
        <div
          key={item}
          style={{
            position: "relative",
            opacity: phase === "hidden" ? 0 : 1,
            transform: phase === "hidden" ? "translateY(12px)" : "translateY(0)",
            transition: `opacity 0.5s ease-out ${i * 120}ms, transform 0.5s ease-out ${i * 120}ms`,
          }}
        >
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.6rem, 4vw, 2rem)",
              fontWeight: 400,
              color: "#FAF8F4",
              margin: 0,
              lineHeight: 1.3,
              position: "relative",
              display: "inline",
            }}
          >
            {item}
          </p>
          {/* Animated strikethrough */}
          <span
            style={{
              position: "absolute",
              left: 0,
              top: "52%",
              height: "2px",
              background: "#C4622D",
              transform: "translateY(-50%)",
              width: phase === "struck" ? "100%" : "0%",
              transition: `width 0.45s ease-out ${i * 140 + 100}ms`,
              display: "block",
              pointerEvents: "none",
            }}
          />
        </div>
      ))}
    </div>
  );
}
