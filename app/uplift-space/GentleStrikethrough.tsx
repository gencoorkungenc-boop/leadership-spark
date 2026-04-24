"use client";

import { useEffect, useRef, useState } from "react";

const items = ["Cheerleading.", "A CV review.", "Someone telling you what you want to hear."];

export default function GentleStrikethrough() {
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
          setTimeout(() => setPhase("struck"), 600);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ display: "flex", flexDirection: "column", gap: "32px", alignItems: "center" }}
    >
      {items.map((item, i) => (
        <div
          key={item}
          style={{
            position: "relative",
            display: "inline-block",
            opacity: phase === "hidden" ? 0 : 1,
            transform: phase === "hidden" ? "translateY(10px)" : "translateY(0)",
            transition: `opacity 0.5s ease-out ${i * 130}ms, transform 0.5s ease-out ${i * 130}ms`,
          }}
        >
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.4rem, 3vw, 1.75rem)",
              fontWeight: 400,
              color: "#8B7355",
              margin: 0,
              lineHeight: 1.3,
              opacity: 0.7,
            }}
          >
            {item}
          </p>
          <span
            style={{
              position: "absolute",
              left: 0,
              top: "52%",
              height: "1.5px",
              background: "#8B7355",
              opacity: 0.45,
              transform: "translateY(-50%)",
              width: phase === "struck" ? "100%" : "0%",
              transition: `width 0.5s ease-out ${i * 150 + 120}ms`,
              display: "block",
              pointerEvents: "none",
            }}
          />
        </div>
      ))}
    </div>
  );
}
