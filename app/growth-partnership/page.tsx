import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import ScrollProgress from "./ScrollProgress";
import StrikethroughItems from "./StrikethroughItems";

export const metadata: Metadata = {
  title: "The Growth Partnership — Leadership Spark",
  description: "Commercial coaching and advisory for founders and business owners. GTM strategy, territory design, pipeline discipline. Emerging markets expertise across Europe, the Middle East and Africa.",
};

const col: React.CSSProperties = {
  maxWidth: "760px",
  margin: "0 auto",
  padding: "0 24px",
};

const label: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "11px",
  fontWeight: 600,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "#C4622D",
  marginBottom: "40px",
  opacity: 0.85,
};

const body: React.CSSProperties = {
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

const SparkDivider = ({ bg = "#FAF8F4" }: { bg?: string }) => (
  <div style={{ background: bg, padding: "32px 0", textAlign: "center" }}>
    <span style={{ color: "#C4622D", fontSize: "18px", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>✦</span>
  </div>
);

const sessions = [
  { n: "01", title: "Territory design" },
  { n: "02", title: "ICP definition" },
  { n: "03", title: "Outbound motion" },
  { n: "04", title: "Inbound architecture" },
  { n: "05", title: "Forecast discipline" },
  { n: "06", title: "Market entry" },
];

const personas = [
  {
    title: "The Founder",
    body: "Product-market fit confirmed. Now staring at the gap between what the product can do and what the pipeline actually shows.",
  },
  {
    title: "The Business Owner",
    body: "Winning on relationships and referrals. Knows that won't scale.",
  },
  {
    title: "The CEO",
    body: "Built something technically brilliant. Needs a commercial partner who speaks both languages, founder and operator.",
  },
  {
    title: "The Company",
    body: "Ready to move into a new market. Needs someone who has opened territories from scratch.",
  },
];

export default function GrowthPartnership() {
  return (
    <div style={{ background: "#FAF8F4", color: "#1C1208", fontFamily: "'Inter', sans-serif" }}>
      <ScrollProgress />
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
          The Growth Partnership
        </p>

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            margin: "0 auto 40px",
            maxWidth: "860px",
          }}
        >
          <span
            style={{
              display: "block",
              fontSize: "clamp(2.4rem, 8vw, 5rem)",
              fontWeight: 300,
              color: "#FAF8F4",
              opacity: 0.4,
            }}
          >
            Most founders are exceptional
          </span>
          <span
            style={{
              display: "block",
              fontSize: "clamp(2.8rem, 9.5vw, 5.8rem)",
              fontWeight: 700,
              color: "#FAF8F4",
              marginBottom: "16px",
            }}
          >
            at building.
          </span>
        </h1>

        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "#C4622D",
            lineHeight: 1.45,
            margin: 0,
            maxWidth: "680px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          The commercial motion is a different craft.
        </p>
      </section>


      {/* ─── TYPOGRAPHIC CONTRAST — cream, stacked statements ─── */}
      <section style={{ background: "#F5F0E8", padding: "96px 24px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>

          {/* Statement 1 */}
          <div className="contrast-text">
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C4622D",
              marginBottom: "24px",
              opacity: 0.75,
            }}>
              Without the right system
            </p>
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.4rem, 6vw, 3rem)",
              fontWeight: 500,
              color: "#1C1208",
              lineHeight: 1.15,
              margin: "0 0 8px",
            }}>
              Brilliant product.
            </p>
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.4rem, 6vw, 3rem)",
              fontStyle: "italic",
              fontWeight: 400,
              color: "#C4622D",
              lineHeight: 1.15,
              margin: 0,
            }}>
              Stays small.
            </p>
          </div>

          {/* Spacer + divider */}
          <div style={{ height: "80px" }} />
          <div style={{ height: "1px", background: "#C4622D", opacity: 0.3, width: "100%" }} />
          <div style={{ height: "80px" }} />

          {/* Statement 2 */}
          <div className="contrast-text">
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C4622D",
              marginBottom: "24px",
              opacity: 0.75,
            }}>
              With the right system
            </p>
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.4rem, 6vw, 3rem)",
              fontWeight: 500,
              color: "#1C1208",
              lineHeight: 1.15,
              margin: "0 0 8px",
            }}>
              Brilliant product.
            </p>
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.4rem, 6vw, 3rem)",
              fontStyle: "italic",
              fontWeight: 400,
              color: "#C4622D",
              lineHeight: 1.15,
              margin: 0,
            }}>
              Scales.
            </p>
          </div>

        </div>
      </section>

      <Divider />

      {/* ─── WHAT YOU ARE PROBABLY EXPERIENCING — dark, numbered ─── */}
      <section style={{ background: "#0A0A0A", padding: "104px 0 0" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px 0" }}>
          <p style={{ ...label, color: "#C4622D", marginBottom: "56px" }}>
            What You Are Probably Experiencing
          </p>
        </div>

        {/* Numbered statements with thin rules */}
        {[
          { n: "01", text: "Your pipeline is unpredictable." },
          { n: "02", text: "Your team is selling on instinct rather than process." },
          { n: "03", text: "Forecasts feel like educated guesses." },
          {
            n: "04",
            text: "You are not sure if the problem is messaging, targeting, motion or all three.",
          },
        ].map(({ n, text }, i) => (
          <div key={n}>
            {i > 0 && (
              <div style={{ height: "1px", background: "#C4622D", opacity: 0.3 }} />
            )}
            <div
              style={{
                maxWidth: "860px",
                margin: "0 auto",
                padding: "48px 24px",
                display: "flex",
                alignItems: "baseline",
                gap: "32px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  color: "#C4622D",
                  flexShrink: 0,
                  opacity: 0.9,
                }}
              >
                {n}
              </span>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
                  fontWeight: 500,
                  color: "#FAF8F4",
                  lineHeight: 1.25,
                  margin: 0,
                }}
              >
                {text}
              </p>
            </div>
          </div>
        ))}

        {/* Final line — terracotta italic, centred, below last rule */}
        <div style={{ height: "1px", background: "#C4622D", opacity: 0.3 }} />
        <div style={{ padding: "56px 24px 104px", textAlign: "center" }}>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)",
              fontStyle: "italic",
              fontWeight: 400,
              color: "#C4622D",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Welcome to the stage every founder hits.
          </p>
        </div>
      </section>

      <SparkDivider bg="#0A0A0A" />

      {/* ─── WHAT THIS IS NOT — pure black ─── */}
      <section style={{ background: "#0A0A0A", padding: "104px 24px" }}>
        <div style={{ ...col, maxWidth: "860px" }}>
          <p style={{ ...label, color: "#C4622D" }}>What This Is Not</p>
          <StrikethroughItems />
        </div>
      </section>

      <Divider />

      {/* ─── WHAT THIS IS — cream, large Playfair ─── */}
      <section style={{ background: "#FAF8F4", padding: "80px 24px" }}>
        <div style={col}>
          <p style={label}>What This Is</p>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.3rem, 3vw, 1.5rem)",
              fontWeight: 500,
              lineHeight: 1.55,
              color: "#1C1208",
              marginBottom: "48px",
            }}
          >
            A working partnership with someone who has spent twenty years building GTM systems in
            markets that punish generic playbooks.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "32px", marginBottom: "56px" }}>
            {[
              "Coaching when you need space to think through the hard decisions.",
              "Mentoring when you need direction from someone who has been there.",
              "Consulting when you need a plan you can hand to your team.",
            ].map((line) => (
              <p
                key={line}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.2rem, 2.5vw, 1.375rem)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#C4622D",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                {line}
              </p>
            ))}
          </div>

          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
              fontWeight: 700,
              color: "#1C1208",
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            All three. In the same room. No overhead.
          </p>
        </div>
      </section>

      <SparkDivider />

      {/* ─── WHO THIS IS FOR — cream, 2×2 persona cards ─── */}
      <section style={{ background: "#F5F0E8", padding: "104px 24px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={{ ...label, padding: "0 0 0 0" }}>Who This Is For</p>
          <div className="persona-grid">
            {personas.map(({ title, body: desc }) => (
              <div
                key={title}
                style={{
                  background: "#FAF8F4",
                  borderTop: "3px solid #C4622D",
                  padding: "36px 32px 40px",
                  borderRadius: "2px",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.1rem, 2.2vw, 1.3rem)",
                    fontStyle: "italic",
                    fontWeight: 500,
                    color: "#1C1208",
                    marginBottom: "16px",
                    lineHeight: 1.3,
                  }}
                >
                  {title}
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "15px",
                    fontWeight: 300,
                    color: "#1C1208",
                    lineHeight: 1.75,
                    opacity: 0.8,
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

      <Divider />

      {/* ─── THE PROOF — dark #1C1208 ─── */}
      <section style={{ background: "#1C1208", padding: "104px 24px" }}>
        <div style={{ ...col, maxWidth: "760px" }}>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.4rem, 3.5vw, 2rem)",
              fontWeight: 500,
              color: "#FAF8F4",
              lineHeight: 1.35,
              marginBottom: "32px",
            }}
          >
            Twenty years building commercial systems across markets that punish generic playbooks.
          </p>

          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
              fontStyle: "italic",
              fontWeight: 400,
              color: "#C4622D",
              lineHeight: 1.4,
              marginBottom: "36px",
            }}
          >
            Emerging markets across Europe, the Middle East and Africa.
          </p>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(16px, 1.8vw, 17px)",
              fontWeight: 300,
              color: "#FAF8F4",
              opacity: 0.75,
              lineHeight: 1.85,
              marginBottom: "48px",
            }}
          >
            Markets where winning requires specific resources, cultural fluency and a playbook
            built for the ground you are actually standing on.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "32px", marginBottom: "64px" }}>
            {[
              "At LinkedIn, a small team became the fastest growing segment in the company's growth markets division.",
              "At Pluralsight, a territory spanning 50 countries delivered consistent year-over-year growth from a standing start.",
            ].map((line) => (
              <p
                key={line}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "18px",
                  fontWeight: 300,
                  color: "#FAF8F4",
                  opacity: 0.8,
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                {line}
              </p>
            ))}
          </div>

          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
              fontWeight: 500,
              color: "#FAF8F4",
              lineHeight: 1.4,
              margin: 0,
              borderTop: "1px solid rgba(250,248,244,0.12)",
              paddingTop: "48px",
            }}
          >
            Pipeline does not come from effort alone. It comes from a system. That system is what
            we build together.
          </p>
        </div>
      </section>

      <Divider />

      {/* ─── HOW IT WORKS — cream ─── */}
      <section style={{ background: "#FAF8F4", padding: "104px 24px" }}>
        <div style={col}>
          <p style={label}>How It Works</p>

          <div className="session-list">
            {sessions.map(({ n, title }, i) => (
              <div
                key={n}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "24px",
                  padding: "28px 0",
                  borderBottom:
                    i < sessions.length - 1
                      ? "1px solid rgba(28,18,8,0.08)"
                      : "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#C4622D",
                    letterSpacing: "0.1em",
                    flexShrink: 0,
                    minWidth: "28px",
                  }}
                >
                  {n}
                </span>
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.15rem, 2.5vw, 1.35rem)",
                    fontWeight: 500,
                    color: "#1C1208",
                    lineHeight: 1.3,
                  }}
                >
                  {title}
                </span>
              </div>
            ))}
          </div>

          <p
            style={{
              ...body,
              marginTop: "48px",
              paddingTop: "40px",
              borderTop: "1px solid rgba(28,18,8,0.08)",
            }}
          >
            Sessions can be topped up. Engagements grow with the business.
          </p>
        </div>
      </section>

      <SparkDivider bg="#FAF8F4" />

      {/* ─── CTA BAND — dark ─── */}
      <section
        style={{
          background: "#1C1208",
          padding: "104px 24px",
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
            maxWidth: "600px",
            margin: "0 auto 20px",
          }}
        >
          Engagements are tailored.
        </p>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(16px, 1.8vw, 17px)",
            fontWeight: 300,
            color: "#FAF8F4",
            opacity: 0.6,
            lineHeight: 1.7,
            marginBottom: "48px",
          }}
        >
          Get in touch and we will find the right shape.
        </p>
        <Link
          href="/contact"
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
          Contact Genco →
        </Link>
        <div style={{ marginTop: "32px" }}>
          <Link
            href="/"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "13px",
              fontWeight: 400,
              color: "#FAF8F4",
              opacity: 0.4,
              textDecoration: "none",
              letterSpacing: "0.04em",
            }}
          >
            ← Back to all paths
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
