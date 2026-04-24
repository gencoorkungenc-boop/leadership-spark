"use client";

import { useState } from "react";

const TERRA = "#C4622D";
const DARK_TEXT = "#1C1208";
const MUTED = "#8B7355";
const CREAM = "#F5F0E8";

const pathwayOptions = [
  { value: "", label: "I'm not sure yet" },
  { value: "conviction-practice", label: "The Conviction Practice — senior leadership presence" },
  { value: "growth-partnership", label: "The Growth Partnership — commercial growth" },
  { value: "uplift-space", label: "The Uplift Space — career transition or change" },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  fontFamily: "'Inter', sans-serif",
  fontSize: "16px",
  fontWeight: 300,
  color: DARK_TEXT,
  background: CREAM,
  border: "1px solid rgba(139,115,85,0.25)",
  borderRadius: "6px",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "'Inter', sans-serif",
  fontSize: "13px",
  fontWeight: 400,
  color: MUTED,
  letterSpacing: "0.04em",
  marginBottom: "8px",
};

type Status = "idle" | "sending" | "sent";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pathway, setPathway] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 600);
  }

  if (status === "sent") {
    return (
      <div
        style={{
          padding: "48px 32px",
          background: CREAM,
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "32px",
            color: TERRA,
            fontFamily: "'Playfair Display', serif",
            marginBottom: "16px",
          }}
        >
          ✦
        </p>
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "22px",
            fontWeight: 400,
            fontStyle: "italic",
            color: DARK_TEXT,
            marginBottom: "12px",
            lineHeight: 1.4,
          }}
        >
          Thank you.
        </p>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "16px",
            fontWeight: 300,
            color: MUTED,
            lineHeight: 1.7,
          }}
        >
          I will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
        <div>
          <label style={labelStyle} htmlFor="name">Your name</label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
            placeholder="Aoife, Marco, Elif…"
          />
        </div>
        <div>
          <label style={labelStyle} htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label style={labelStyle} htmlFor="pathway">Which area resonates most?</label>
        <select
          id="pathway"
          value={pathway}
          onChange={(e) => setPathway(e.target.value)}
          style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
        >
          {pathwayOptions.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>

      <div>
        <label style={labelStyle} htmlFor="message">What's on your mind?</label>
        <textarea
          id="message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          style={{ ...inputStyle, resize: "vertical", lineHeight: 1.65 }}
          placeholder="A few sentences is enough. There's no wrong answer here."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        style={{
          alignSelf: "flex-start",
          background: status === "sending" ? "rgba(196,98,45,0.5)" : TERRA,
          color: "#FAF8F4",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          fontSize: "14px",
          letterSpacing: "0.08em",
          border: "none",
          padding: "16px 40px",
          borderRadius: "2px",
          cursor: status === "sending" ? "default" : "pointer",
          transition: "background 0.2s",
        }}
      >
        {status === "sending" ? "Sending…" : "Send message →"}
      </button>
    </form>
  );
}
