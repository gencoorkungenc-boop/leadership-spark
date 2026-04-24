import Link from "next/link";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import ContactForm from "./ContactForm";

const CREAM = "#F5F0E8";
const WARM_WHITE = "#FFFFFF";
const DARK_WARM = "#2C1810";
const TERRA = "#C4622D";
const MUTED = "#8B7355";
const DARK_TEXT = "#1C1208";

const SparkMark = () => (
  <div style={{ textAlign: "center", marginBottom: "40px" }}>
    <span style={{ color: TERRA, fontSize: "32px", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>✦</span>
  </div>
);

const pathways = [
  {
    href: "/conviction-practice",
    label: "The Conviction Practice",
    sub: "Senior leaders. High-stakes presence.",
  },
  {
    href: "/growth-partnership",
    label: "The Growth Partnership",
    sub: "Founders and commercial leaders.",
  },
  {
    href: "/uplift-space",
    label: "The Uplift Space",
    sub: "Career transitions and next chapters.",
  },
];

export default function Contact() {
  return (
    <div style={{ background: CREAM, fontFamily: "'Inter', sans-serif", color: DARK_TEXT }}>
      <SiteHeader current="Contact" />

      {/* ─── HERO ─── */}
      <section style={{ background: CREAM, padding: "64px 24px 80px", textAlign: "center" }}>
        <SparkMark />
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.4rem, 6vw, 3.5rem)",
            fontWeight: 400,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            margin: "0 auto 24px",
            maxWidth: "560px",
          }}
        >
          <span style={{ color: DARK_TEXT }}>Let&apos;s start with a </span>
          <span style={{ fontStyle: "italic", color: TERRA }}>conversation.</span>
        </h1>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "18px",
            fontWeight: 300,
            color: MUTED,
            lineHeight: 1.75,
            margin: "0 auto",
            maxWidth: "440px",
          }}
        >
          The first session is always free. No pitch, no pressure. Just a chance to see if this is
          the right fit.
        </p>
      </section>

      {/* ─── FORM + SIDEBAR ─── */}
      <section style={{ background: WARM_WHITE, padding: "80px 24px" }}>
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "64px",
          }}
          className="contact-grid"
        >
          {/* Form */}
          <div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: TERRA,
                marginBottom: "32px",
                opacity: 0.85,
              }}
            >
              Send a message
            </p>
            <ContactForm />
          </div>

          {/* Sidebar */}
          <div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: TERRA,
                marginBottom: "32px",
                opacity: 0.85,
              }}
            >
              Not sure where to start?
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "48px" }}>
              {pathways.map(({ href, label, sub }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    display: "block",
                    background: CREAM,
                    borderRadius: "0 12px 12px 0",
                    padding: "20px 24px",
                    textDecoration: "none",
                    borderLeft: `3px solid ${TERRA}`,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "17px",
                      fontWeight: 500,
                      color: DARK_TEXT,
                      margin: "0 0 4px",
                      lineHeight: 1.3,
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "13px",
                      fontWeight: 300,
                      color: MUTED,
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    {sub}
                  </p>
                </Link>
              ))}
            </div>

            <div
              style={{
                borderTop: `1px solid rgba(196,98,45,0.15)`,
                paddingTop: "32px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "17px",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: MUTED,
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                Based in Dublin. Working with people across Europe and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CLOSING QUOTE ─── */}
      <section style={{ background: DARK_WARM, padding: "88px 24px", textAlign: "center" }}>
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "#FAF8F4",
            lineHeight: 1.5,
            maxWidth: "480px",
            margin: "0 auto 20px",
            opacity: 0.9,
          }}
        >
          The hardest part is often just deciding to begin.
        </p>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "14px",
            fontWeight: 300,
            color: TERRA,
            letterSpacing: "0.06em",
            margin: 0,
          }}
        >
          ✦ Leadership Spark
        </p>
      </section>

      <SiteFooter />
    </div>
  );
}
