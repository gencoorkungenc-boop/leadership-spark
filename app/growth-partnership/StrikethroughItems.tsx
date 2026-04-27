"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  "A sales training day.",
  "A slide deck with a framework you will never use.",
  "Someone who has only ever read about selling.",
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
        <p
          key={item}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.4rem, 3.5vw, 2rem)",
            fontWeight: 400,
            color: "#FAF8F4",
            margin: 0,
            lineHeight: 1.3,
            textDecoration: "line-through",
            textDecorationColor: phase === "struck" ? "#C4622D" : "transparent",
            textDecorationThickness: "2px",
            textDecorationSkipInk: "none",
            opacity: phase === "hidden" ? 0 : 1,
            transform: phase === "hidden" ? "translateY(12px)" : "translateY(0)",
            transition: `opacity 0.5s ease-out ${i * 120}ms, transform 0.5s ease-out ${i * 120}ms, text-decoration-color 0.45s ease-out ${i * 140 + 100}ms`,
          }}
        >
          {item}
        </p>
      ))}
    </div>
  );
}
