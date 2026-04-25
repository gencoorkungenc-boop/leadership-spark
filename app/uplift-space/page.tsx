import Link from "next/link";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";

/* ─── Design tokens ─── */
const CREAM = "#F5F0E8";
const WARM_WHITE = "#FFFFFF";
const DARK_WARM = "#2C1810";
const TERRA = "#C4622D";
const MUTED = "#8B7355";
const DARK_TEXT = "#1C1208";

/* ─── Shared styles ─── */
const sectionLabel: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "11px",
  fontWeight: 600,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: TERRA,
  marginBottom: "40px",
  opacity: 0.85,
};

/* ─── Section spark divider ─── */
const Spark = ({ bg = CREAM, color = TERRA }: { bg?: string; color?: string }) => (
  <div style={{ padding: "40px 0", textAlign: "center", background: bg }}>
    <span style={{ color, fontSize: "16px", fontFamily: "'Playfair Display', serif" }}>✦</span>
  </div>
);

/* ─── SVG Illustrations ─── */

// Flame / spark mark
const FlameSVG = () => (
  <svg width="40" height="44" viewBox="0 0 40 44" fill="none" stroke={TERRA} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", margin: "0 auto 32px" }}>
    <path d="M20 41 C11 41 9 32 13 25 C15 20 14 13 17 8 C18 14 20 15 21 18 C23 14 22 8 25 5 C27 11 26 20 30 25 C35 32 29 41 20 41 Z" />
    <path d="M20 33 C17 33 16 29 18 26" />
  </svg>
);

// Doorway / threshold
const DoorSVG = () => (
  <svg width="60" height="64" viewBox="0 0 60 64" fill="none" stroke={TERRA} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", margin: "0 auto 32px" }}>
    <path d="M16 60 L16 26 Q16 12 30 12 Q44 12 44 26 L44 60" />
    <line x1="8" y1="60" x2="52" y2="60" />
    <circle cx="39" cy="38" r="2.5" />
    <line x1="48" y1="22" x2="55" y2="18" />
    <line x1="48" y1="32" x2="56" y2="32" />
    <line x1="48" y1="42" x2="55" y2="46" />
  </svg>
);

// Compass rose
const CompassSVG = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke={TERRA} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", margin: "0 auto 32px" }}>
    <circle cx="30" cy="30" r="22" />
    <circle cx="30" cy="30" r="2" />
    <path d="M30 8 L34 27 L30 24 L26 27 Z" />
    <path d="M30 52 L26 33 L30 36 L34 33 Z" />
    <line x1="30" y1="10" x2="30" y2="14" />
    <line x1="46" y1="30" x2="50" y2="30" />
    <line x1="30" y1="46" x2="30" y2="50" />
    <line x1="10" y1="30" x2="14" y2="30" />
  </svg>
);

// Path / road to horizon
const PathSVG = () => (
  <svg width="80" height="40" viewBox="0 0 80 40" fill="none" stroke="#FAF8F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", margin: "0 auto 32px" }}>
    <path d="M8 38 Q40 22 40 4" />
    <path d="M72 38 Q40 22 40 4" />
    <line x1="18" y1="24" x2="62" y2="24" strokeOpacity="0.4" />
    <path d="M40 38 L40 28" strokeDasharray="3 4" strokeOpacity="0.6" />
  </svg>
);

// Three sessions connected
const SessionsSVG = () => (
  <svg width="100" height="32" viewBox="0 0 100 32" fill="none" stroke={TERRA} strokeWidth="1.5" strokeLinecap="round" style={{ display: "block", margin: "0 auto 32px" }}>
    <circle cx="16" cy="16" r="11" />
    <circle cx="50" cy="16" r="11" />
    <circle cx="84" cy="16" r="11" />
    <line x1="27" y1="16" x2="39" y2="16" />
    <line x1="61" y1="16" x2="73" y2="16" />
    <text x="16" y="20" textAnchor="middle" fontSize="10" fontFamily="Inter" fill={TERRA} stroke="none">3</text>
    <text x="50" y="20" textAnchor="middle" fontSize="10" fontFamily="Inter" fill={TERRA} stroke="none">6</text>
    <text x="84" y="20" textAnchor="middle" fontSize="10" fontFamily="Inter" fill={TERRA} stroke="none">10</text>
  </svg>
);

const bringItems = [
  "A role that no longer fits.",
  "A promotion that feels within reach but somehow keeps not happening.",
  "A career break you keep thinking about but have not let yourself take seriously yet.",
  "A move to a new city, a new country, a new industry.",
  "A quiet voice that keeps asking: is there more than this?",
];

const whatThisIsCards = [
  "The coaching is Erickson-trained, built on the belief that you already have more answers than you think.",
  "When you are thinking about leaving your job I will ask you about your savings before I tell you to follow your heart.",
  "When you are going for a promotion I will help you prepare like the role is already yours.",
];

const storyLines = [
  "Turkey to Dublin at 29 with no guarantee it would work.",
  "Individual contributor to sales manager to leading territories across 50 countries.",
  "A well-paid tech role left behind for a year of intentional travel and reflection.",
  "A career break that became a business.",
];

export default function UpliftSpace() {
  return (
    <div style={{ background: CREAM, fontFamily: "'Inter', sans-serif", color: DARK_TEXT }}>
      <SiteHeader current="" />

      {/* ─── HERO — warm cream, opens in light ─── */}
      <section style={{ background: CREAM, padding: "80px 24px 88px", textAlign: "center" }}>
        <FlameSVG />
        <p style={{ ...sectionLabel, textAlign: "center" }}>The Uplift Space</p>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.6rem, 7vw, 4rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            margin: "0 auto 40px",
            maxWidth: "640px",
          }}
        >
          <span style={{ display: "block", fontWeight: 500, color: DARK_TEXT }}>
            Something feels like
          </span>
          <span style={{ display: "block", fontStyle: "italic", fontWeight: 400, color: TERRA }}>
            it needs to change.
          </span>
        </h1>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "20px",
            fontWeight: 300,
            color: MUTED,
            lineHeight: 1.75,
            margin: "0 auto",
            maxWidth: "480px",
          }}
        >
          Maybe you know exactly what it is. Maybe you just know that where you are is no longer
          where you want to be. Both are enough to start.
        </p>
      </section>

      <Spark />

      {/* ─── WHAT BRINGS PEOPLE HERE — cream, cards ─── */}
      <section style={{ background: CREAM, padding: "80px 24px" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <DoorSVG />
          <p style={{ ...sectionLabel, textAlign: "center" }}>What Brings People Here</p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "48px" }}>
            {bringItems.map((item) => (
              <div
                key={item}
                style={{
                  background: WARM_WHITE,
                  borderLeft: `3px solid ${TERRA}`,
                  borderRadius: "0 12px 12px 0",
                  padding: "28px 32px",
                  boxShadow: "0 2px 12px rgba(196,98,45,0.08)",
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "20px",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: DARK_WARM,
                  lineHeight: 1.55,
                }}
              >
                <span style={{ color: TERRA, fontStyle: "normal", marginRight: "10px" }}>✦</span>
                {item}
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "18px",
              fontStyle: "italic",
              fontWeight: 300,
              color: MUTED,
              lineHeight: 1.75,
              textAlign: "center",
              margin: 0,
            }}
          >
            None of these are small things. They deserve more than a LinkedIn post or a career
            quiz.
          </p>
        </div>
      </section>

      <Spark />

      {/* ─── WHAT THIS IS NOT — cream, CSS strikethrough ─── */}
      <section style={{ background: CREAM, padding: "80px 24px" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ ...sectionLabel, textAlign: "center" }}>What This Is Not</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {["Cheerleading.", "A CV review.", "Someone telling you what you want to hear."].map(
              (item) => (
                <p
                  key={item}
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.4rem, 3vw, 1.75rem)",
                    fontWeight: 400,
                    color: MUTED,
                    textDecoration: "line-through",
                    textDecorationColor: `rgba(139,115,85,0.4)`,
                    textDecorationThickness: "1.5px",
                    lineHeight: 1.3,
                    margin: 0,
                  }}
                >
                  <span style={{ color: TERRA, marginRight: "10px", textDecoration: "none", display: "inline-block" }}>✕</span>
                  {item}
                </p>
              )
            )}
          </div>
        </div>
      </section>

      <Spark />

      {/* ─── WHAT THIS IS — warm white, compass illustration ─── */}
      <section style={{ background: WARM_WHITE, padding: "80px 24px" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
          <CompassSVG />
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.3rem, 3vw, 1.625rem)",
              fontWeight: 500,
              color: DARK_TEXT,
              lineHeight: 1.5,
              marginBottom: "48px",
              maxWidth: "600px",
              margin: "0 auto 48px",
            }}
          >
            A space to think clearly about what you actually want and what it would realistically
            take to get there.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "560px", margin: "0 auto 48px", textAlign: "left" }}>
            {whatThisIsCards.map((text) => (
              <div
                key={text}
                style={{
                  background: CREAM,
                  borderLeft: `3px solid ${TERRA}`,
                  borderRadius: "0 8px 8px 0",
                  padding: "20px 24px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "18px",
                  fontWeight: 300,
                  color: DARK_TEXT,
                  lineHeight: 1.75,
                  opacity: 0.9,
                }}
              >
                {text}
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "22px",
              fontStyle: "italic",
              fontWeight: 400,
              color: TERRA,
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            Hope is not naive here. It is the starting point for a plan.
          </p>
        </div>
      </section>

      <Spark />

      {/* ─── GENCO'S STORY — warm dark #2C1810 ─── */}
      <section style={{ background: DARK_WARM, padding: "88px 24px" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
          <PathSVG />
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: TERRA,
              marginBottom: "48px",
              opacity: 0.9,
            }}
          >
            This Is Genco&apos;s Story Too
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "36px", marginBottom: "56px" }}>
            {storyLines.map((line) => (
              <p
                key={line}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.05rem, 2.2vw, 1.25rem)",
                  fontWeight: 400,
                  color: "#FAF8F4",
                  lineHeight: 1.55,
                  margin: 0,
                  opacity: 0.9,
                }}
              >
                {line}
              </p>
            ))}
          </div>

          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "20px",
              fontStyle: "italic",
              fontWeight: 400,
              color: TERRA,
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Every transition taught me something. The courage it takes to start. The clarity that
            only comes once you do.
          </p>
        </div>
      </section>

      <Spark bg={DARK_WARM} color="#FAF8F4" />

      {/* ─── HOW IT WORKS — cream, sessions illustration ─── */}
      <section style={{ background: CREAM, padding: "80px 24px" }}>
        <div style={{ maxWidth: "480px", margin: "0 auto", textAlign: "center" }}>
          <SessionsSVG />
          <p style={{ ...sectionLabel, textAlign: "center" }}>How It Works</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {[
              "Sessions in packages of three, six or ten.",
              "One hour each. Your agenda. Your pace.",
              "We start where you are. We move toward where you want to go.",
            ].map((line) => (
              <p
                key={line}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "18px",
                  fontWeight: 300,
                  color: DARK_TEXT,
                  lineHeight: 1.75,
                  opacity: 0.8,
                  margin: 0,
                }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BAND — warm dark ─── */}
      <section style={{ background: DARK_WARM, padding: "96px 24px", textAlign: "center" }}>
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "#FAF8F4",
            lineHeight: 1.3,
            maxWidth: "520px",
            margin: "0 auto 18px",
          }}
        >
          The first conversation costs nothing.
        </p>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "18px",
            fontWeight: 300,
            color: "#FAF8F4",
            opacity: 0.55,
            lineHeight: 1.7,
            marginBottom: "48px",
          }}
        >
          It might be worth quite a lot.
        </p>
        <Link
          href="/contact"
          style={{
            display: "inline-block",
            background: TERRA,
            color: "#FAF8F4",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            fontSize: "14px",
            letterSpacing: "0.08em",
            textDecoration: "none",
            padding: "18px 44px",
            borderRadius: "2px",
          }}
        >
          Get in touch →
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
