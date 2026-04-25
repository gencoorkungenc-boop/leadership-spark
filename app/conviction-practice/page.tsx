import Link from "next/link";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import AnimatedStat from "./AnimatedStat";
import FadeInStatements from "./FadeInStatements";
import StrikethroughItems from "./StrikethroughItems";
import ScrollProgress from "./ScrollProgress";

const col: React.CSSProperties = {
  maxWidth: "760px",
  margin: "0 auto",
  padding: "0 24px",
};

const sectionLabel: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "11px",
  fontWeight: 600,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "#C4622D",
  marginBottom: "40px",
  opacity: 0.85,
};

const bodyText: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "clamp(16px, 1.8vw, 17px)",
  fontWeight: 300,
  lineHeight: 1.85,
  color: "#1C1208",
  opacity: 0.85,
};

const Divider = () => (
  <div style={{ width: "100%", height: "1px", background: "#C4622D", opacity: 0.25 }} />
);

const steps = [
  {
    n: "01",
    title: "The Leadership Signal Audit",
    desc: "We start by understanding how you are currently showing up. Where the gaps are. What your people are actually hearing versus what you intend.",
  },
  {
    n: "02",
    title: "The Leadership Communication Blueprint",
    desc: "Your point of view. Your voice. A clear narrative your organisation can orient around.",
  },
  {
    n: "03",
    title: "The Program",
    desc: "90 minute group workshop. Three one to one sessions across 60 days. Ongoing support for the moments that matter.",
  },
];

export default function ConvictionPractice() {
  return (
    <div style={{ background: "#FAF8F4", color: "#1C1208", fontFamily: "'Inter', sans-serif" }}>
      <ScrollProgress />

      {/* Site header on cream */}
      <SiteHeader current="" />

      <Divider />

      {/* ─── HERO — pure black ─── */}
      <section
        style={{
          background: "#0A0A0A",
          padding: "120px 24px 112px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#C4622D",
            marginBottom: "48px",
            opacity: 0.9,
          }}
        >
          The Conviction Practice
        </p>

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            margin: "0 auto 40px",
            maxWidth: "820px",
          }}
        >
          {/* "Silence" — ghost line */}
          <span
            style={{
              display: "block",
              fontSize: "clamp(3rem, 10vw, 5.5rem)",
              fontWeight: 300,
              color: "#FAF8F4",
              opacity: 0.4,
            }}
          >
            Silence
          </span>
          {/* "has a price tag." — full weight */}
          <span
            style={{
              display: "block",
              fontSize: "clamp(2.6rem, 8.5vw, 4.8rem)",
              fontWeight: 700,
              color: "#FAF8F4",
            }}
          >
            has a price tag.
          </span>
        </h1>

        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.1rem, 2.8vw, 1.5rem)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "#C4622D",
            lineHeight: 1.45,
            margin: 0,
          }}
        >
          and it is showing up in your organisation right now
        </p>
      </section>

      <Divider />

      {/* ─── STATS — cream, each full-width magazine spread ─── */}
      <section style={{ background: "#F5F0E8" }}>
        <AnimatedStat
          target={80}
          description="of employees worldwide are not engaged at work."
          source="Gallup — 2026"
        />

        <div style={{ height: "1px", background: "rgba(28,18,8,0.1)", margin: "0 24px" }} />

        <AnimatedStat
          target={68}
          description="of people globally worry their business leaders are misleading them."
          source="Edelman — 2025"
        />
      </section>

      <Divider />

      {/* ─── COST OF LEADER SILENCE — cream ─── */}
      <section style={{ padding: "112px 24px" }}>
        <div style={col}>
          <p style={sectionLabel}>The Cost of Leader Silence</p>
          <FadeInStatements />
        </div>
      </section>

      <Divider />

      {/* ─── WHAT THIS IS NOT — pure black ─── */}
      <section
        style={{
          background: "#0A0A0A",
          padding: "104px 24px",
        }}
      >
        <div style={{ ...col, maxWidth: "860px" }}>
          <p
            style={{
              ...sectionLabel,
              color: "#C4622D",
            }}
          >
            What This Is Not
          </p>
          <StrikethroughItems />
        </div>
      </section>

      <Divider />

      {/* ─── WHAT THIS IS — cream, large text, no border ─── */}
      <section style={{ background: "#FAF8F4", padding: "80px 24px" }}>
        <div style={col}>
          <p style={sectionLabel}>What This Is</p>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.3rem, 3vw, 1.5rem)",
              fontWeight: 500,
              lineHeight: 1.5,
              color: "#1C1208",
              marginBottom: "48px",
            }}
          >
            A structured engagement that helps senior leaders build clarity, consistency and
            authentic presence in the spaces where their people actually form opinions.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              "For the executive who has more to say than they are currently saying.",
              "For the organisation whose leaders are ready to lead from the front.",
            ].map((line) => (
              <p
                key={line}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "18px",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#C4622D",
                  lineHeight: 1.55,
                  margin: 0,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <span style={{ flexShrink: 0, marginTop: "2px" }}>—</span>
                <span>{line}</span>
              </p>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ─── HOW IT WORKS — cream with terracotta step cards ─── */}
      <section style={{ background: "#FAF8F4", padding: "104px 24px" }}>
        <div style={col}>
          <p style={sectionLabel}>How It Works</p>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {steps.map(({ n, title, desc }) => (
              <div
                key={n}
                style={{
                  background: "#C4622D",
                  borderRadius: "3px",
                  padding: "48px 44px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Ghost step number watermark */}
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    right: "24px",
                    bottom: "-16px",
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "120px",
                    fontWeight: 700,
                    color: "#FAF8F4",
                    opacity: 0.07,
                    lineHeight: 1,
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  {n}
                </div>

                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(250,248,244,0.6)",
                    marginBottom: "16px",
                  }}
                >
                  Step {n}
                </p>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.15rem, 2.5vw, 1.4rem)",
                    fontWeight: 600,
                    color: "#FAF8F4",
                    lineHeight: 1.3,
                    marginBottom: "18px",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "clamp(15px, 1.6vw, 16px)",
                    fontWeight: 300,
                    color: "rgba(250,248,244,0.82)",
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── AVAILABILITY NOTE ─── */}
      <section
        style={{
          background: "#F2EDE4",
          padding: "48px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(15px, 1.6vw, 16px)",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "#1C1208",
            opacity: 0.8,
            margin: "0 auto",
            maxWidth: "560px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <span style={{ color: "#C4622D", fontSize: "18px", lineHeight: 1.4, flexShrink: 0 }}>✦</span>
          <span>
            Available for individual executives and for organisations working with groups of three
            to five leaders.
          </span>
        </p>
      </section>

      <Divider />

      {/* ─── CTA BAND — dark ─── */}
      <section
        style={{
          background: "#1C1208",
          padding: "112px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.6rem, 4.5vw, 2.6rem)",
            fontWeight: 500,
            color: "#FAF8F4",
            lineHeight: 1.3,
            maxWidth: "640px",
            margin: "0 auto 52px",
          }}
        >
          Thirty minutes. No pitch. No deck. Just a conversation.
        </p>
        <Link
          href="https://calendar.app.google/NtLndZXhVyvNLvT86"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "#C4622D",
            color: "#FAF8F4",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            fontSize: "14px",
            letterSpacing: "0.08em",
            textDecoration: "none",
            padding: "20px 48px",
            borderRadius: "2px",
          }}
        >
          Book your free consultation →
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}
