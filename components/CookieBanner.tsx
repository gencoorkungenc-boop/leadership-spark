"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "ls-cookies-accepted";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Small delay so the slide-up feels intentional, not jarring
      setTimeout(() => setVisible(true), 800);
    }
    setMounted(true);
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "false");
    setVisible(false);
  }

  if (!mounted) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: "#1C1208",
        borderTop: "1px solid rgba(196,98,45,0.25)",
        padding: "20px 24px",
        transform: visible ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: "24px",
          flexWrap: "wrap",
        }}
      >
        <p
          style={{
            flex: 1,
            minWidth: "260px",
            fontFamily: "'Inter', sans-serif",
            fontSize: "13px",
            fontWeight: 300,
            color: "#F5F0E8",
            lineHeight: 1.6,
            margin: 0,
            opacity: 0.85,
          }}
        >
          <span style={{ color: "#C4622D", marginRight: "8px", fontFamily: "'Playfair Display', serif" }}>✦</span>
          This site uses cookies to understand how visitors use it. No personal data is shared with third parties.
        </p>
        <div style={{ display: "flex", gap: "12px", flexShrink: 0 }}>
          <button
            onClick={decline}
            style={{
              background: "transparent",
              border: "1px solid rgba(245,240,232,0.4)",
              color: "#F5F0E8",
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.06em",
              padding: "10px 20px",
              borderRadius: "2px",
              cursor: "pointer",
              opacity: 0.75,
            }}
          >
            Decline
          </button>
          <button
            onClick={accept}
            style={{
              background: "#C4622D",
              border: "none",
              color: "#F5F0E8",
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.06em",
              padding: "10px 20px",
              borderRadius: "2px",
              cursor: "pointer",
            }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
