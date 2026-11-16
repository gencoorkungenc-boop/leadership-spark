"use client";

import { OPEN_COOKIE_SETTINGS } from "./CookieBanner";

export default function CookieSettingsLink({ style }: { style?: React.CSSProperties }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS))}
      style={{ background: "none", border: "none", padding: 0, cursor: "pointer", ...style }}
    >
      Cookie settings
    </button>
  );
}
