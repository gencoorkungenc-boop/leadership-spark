"use client";

import { useEffect, useRef, useState } from "react";

const statements = [
  { text: "When senior leaders go quiet, organisations don't pause. They interpret.", final: false },
  { text: "Managers become translators instead of drivers.", final: false },
  { text: "Priorities drift without anyone deciding to drift them.", final: false },
  { text: "Decisions slow down at the exact moment speed matters most.", final: false },
  { text: "Silence is no longer neutral. It has a price tag.", final: true },
];

export default function FadeInStatements() {
  const [visible, setVisible] = useState<boolean[]>(statements.map(() => false));
  const ref = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          statements.forEach((_, i) => {
            setTimeout(() => {
              setVisible((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 150);
          });
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
      {statements.map(({ text, final }, i) => (
        <p
          key={i}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.6rem, 4vw, 2rem)",
            fontWeight: final ? 400 : 500,
            fontStyle: final ? "italic" : "normal",
            lineHeight: 1.3,
            color: final ? "#C4622D" : "#1C1208",
            margin: 0,
            opacity: visible[i] ? 1 : 0,
            transform: visible[i] ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
          }}
        >
          {text}
        </p>
      ))}
    </div>
  );
}
