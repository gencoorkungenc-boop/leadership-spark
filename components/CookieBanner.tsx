"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "ls-cookies-accepted";
const GA_ID = "G-ZRPMM96MKB";
export const OPEN_COOKIE_SETTINGS = "ls-open-cookie-settings";

type GtagWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  [key: string]: unknown;
};

// Google Analytics is loaded only after the visitor clicks Accept.
// Nothing from Google is requested before that (GDPR / ePrivacy).
function loadAnalytics() {
  const w = window as unknown as GtagWindow;
  w[`ga-disable-${GA_ID}`] = false;
  if (w.gtag) return;
  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer!.push(arguments);
  };
  w.gtag("js", new Date());
  w.gtag("config", GA_ID);
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
}

// On withdrawal: stop Google Analytics and remove its cookies.
function stopAnalytics() {
  const w = window as unknown as GtagWindow;
  w[`ga-disable-${GA_ID}`] = true;
  const host = window.location.hostname.replace(/^www\./, "");
  document.cookie.split(";").forEach((c) => {
    const name = c.split("=")[0].trim();
    if (name === "_ga" || name.startsWith("_ga_")) {
      for (const domain of ["", `; domain=.${host}`, `; domain=${window.location.hostname}`]) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`;
      }
    }
  });
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {}
    if (stored === "true") {
      loadAnalytics();
    } else if (!stored) {
      // Small delay so the slide-up feels intentional, not jarring
      setTimeout(() => setVisible(true), 800);
    }
    setMounted(true);

    const open = () => setVisible(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS, open);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS, open);
  }, []);

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {}
    loadAnalytics();
    setVisible(false);
  }

  function decline() {
    try {
      localStorage.setItem(STORAGE_KEY, "false");
    } catch {}
    stopAnalytics();
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
          This site uses Google Analytics cookies to understand how visitors use it, only if you accept. You can change your choice any time under Cookie settings.
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
