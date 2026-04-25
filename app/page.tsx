import type { Metadata } from "next";
import PathCard from "./PathCard";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export const metadata: Metadata = {
  title: "Leadership Spark — What brings you here today?",
  description: "Leadership Spark works with senior leaders, founders and professionals who are ready to move. Coaching, advisory and leadership communication. Based in Dublin, working globally.",
};

const cards = [
  {
    num: "01",
    heading: "I'm a senior leader or executive.",
    sub: "For yourself or your organisation's leadership team.",
    body: "The most dangerous thing a leader can do right now is stay silent. Let's change that.",
    href: "/conviction-practice",
  },
  {
    num: "02",
    heading: "I'm a founder or business owner.",
    sub: null,
    body: "You have the vision. Now you need the commercial engine to match it.",
    href: "/growth-partnership",
  },
  {
    num: "03",
    heading: "I'm a professional in transition.",
    sub: null,
    body: "You know something needs to shift. You just need space to figure out what.",
    href: "/uplift-space",
  },
  {
    num: "04",
    heading: "I want to explore a collaboration.",
    sub: "Not sure which box you fit? Neither am I.",
    body: "Let's talk.",
    href: "/contact",
  },
];

export default function Home() {
  return (
    <div style={{ background: "#FAF8F4", color: "#1C1208", fontFamily: "'Inter', sans-serif" }}>
      <SiteHeader current="Home" />

      {/* Welcome — 80px gap from rule, headline 56px→80px */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 24px 72px",
          maxWidth: "760px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(3.5rem, 8vw, 5rem)",
            fontWeight: 500,
            lineHeight: 1.1,
            color: "#1C1208",
            letterSpacing: "-0.02em",
          }}
        >
          What brings you{" "}
          <em style={{ fontStyle: "italic", color: "#C4622D" }}>here</em>{" "}
          today?
        </h1>
      </section>

      {/* Cards — no grid, stacked list, no backgrounds or borders */}
      <section
        style={{
          padding: "0 24px 104px",
          maxWidth: "760px",
          margin: "0 auto",
        }}
      >
        {cards.map((card, i) => (
          <PathCard key={card.num} {...card} isLast={i === cards.length - 1} href={card.href} />
        ))}
      </section>

      {/* Anchor */}
      <section
        style={{
          background: "#1C1208",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.15rem, 3vw, 1.55rem)",
            fontWeight: 400,
            color: "#FAF8F4",
            lineHeight: 1.6,
            maxWidth: "620px",
            margin: "0 auto",
          }}
        >
          Leadership Spark works with leaders, founders and professionals who are{" "}
          <em style={{ fontStyle: "italic", color: "#C4622D" }}>ready to move.</em>
        </p>
      </section>

      <SiteFooter />
    </div>
  );
}
