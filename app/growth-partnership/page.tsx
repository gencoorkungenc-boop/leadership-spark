import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import ScrollProgress from "./ScrollProgress";
import StrikethroughItems from "./StrikethroughItems";
import StatLine from "./StatLine";
import Reveal from "./Reveal";

export const metadata: Metadata = {
  title: "The Growth Partnership | Leadership Spark",
  description:
    "Leadership Spark GTM. Genco Orkun Genc and Emir Ergun build the B2B selling engine inside your company, with you and your team. It starts with a two-week Discovery.",
};

const MAILTO =
  "mailto:genco@leadershipspark.co,emir@leadershipspark.co?subject=How%20we%20sell%20today";

const label: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "11px",
  fontWeight: 600,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "#C4622D",
  margin: "0 0 40px",
  opacity: 0.9,
};

const Divider = () => (
  <div style={{ width: "100%", height: "1px", background: "#C4622D", opacity: 0.25 }} />
);

const SparkDivider = ({ bg = "#FAF8F4" }: { bg?: string }) => (
  <div style={{ background: bg, padding: "32px 0", textAlign: "center" }}>
    <span style={{ color: "#C4622D", fontSize: "18px", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>✦</span>
  </div>
);

const pains = [
  {
    tag: "Who decides to buy",
    title: "The deal goes quiet",
    body: "Your first meetings go well. Then the deal goes quiet somewhere you can't see.",
  },
  {
    tag: "How you reach them",
    title: "Strategy is improvised",
    body: "You know the next market or segment matters. You have ideas but don't know which one.",
  },
  {
    tag: "Who is selling",
    title: "No sales team yet",
    body: "You are the sales team. Hiring is an idea, but who to hire and how to onboard is guesswork.",
  },
  {
    tag: "What you measure",
    title: "Numbers in your head",
    body: "The pipeline lives in your head and a spreadsheet. Nobody else can run or measure it.",
  },
];

const partners = [
  {
    name: "Genco Orkun Genc",
    img: "/images/gtm-genco.jpg",
    years: "20 years in B2B sales",
    bio: "Closing deals, leading teams and scaling revenue. At LinkedIn, managed enterprise accounts, then built a new market that grew 6x in 3 years. At Pluralsight, led commercial sales across 50+ countries, from Poland to South Africa to MENA.",
  },
  {
    name: "Emir Ergun",
    img: "/images/gtm-emir.jpg",
    years: "16 years in B2B sales",
    bio: "On the strategy and operations side. Turns messy commercial problems into plans sales teams can run. At LinkedIn, led the go-to-market for 3 major product launches. At New Relic, ran strategic programs through the $1B scale-up and the shift to consumption pricing.",
  },
];

const builds = [
  { title: "GTM strategy", line: "What to sell, to whom, and in what order." },
  { title: "New markets & segments", line: "Where to expand and how to land there." },
  { title: "Outbound & sales motion", line: "Your way of selling, from start to finish." },
  { title: "Solution selling", line: "Leading with the buyer's problem." },
  { title: "Pipeline & forecast discipline", line: "An accurate read of what will close." },
  { title: "Sales systems & reporting", line: "CRM, numbers, signal vs. noise." },
  { title: "Building a sales team", line: "Hiring, onboarding and coaching." },
  { title: "Investor-facing growth narrative", line: "A compelling story with numbers." },
];

const paths = [
  {
    name: "Build",
    what: "GTM strategy & sales motion",
    weeks: "8 to 10 weeks",
    body: "Who to target, in what order, what to say, and what to measure. We build it with you.",
  },
  {
    name: "Expand",
    what: "New market or segment",
    weeks: "4 to 6 weeks",
    body: "Which market next, and what has to be true before the first sale there.",
  },
  {
    name: "Coach",
    what: "Sales team setup & coaching",
    weeks: "6 to 8 weeks",
    body: "A hiring profile and interview plan for your first salespeople, then coaching on live deals.",
  },
];

export default function GrowthPartnership() {
  return (
    <div style={{ background: "#FAF8F4", color: "#1C1208", fontFamily: "'Inter', sans-serif" }}>
      <ScrollProgress />
      <SiteHeader current="" />
      <Divider />

      {/* HERO */}
      <section style={{ background: "#0A0A0A", padding: "120px 24px 104px", textAlign: "center" }}>
        <p style={{ ...label, letterSpacing: "0.22em", marginBottom: "48px" }}>
          The Growth Partnership
        </p>

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            margin: "0 auto 36px",
            maxWidth: "900px",
          }}
        >
          <span
            style={{
              display: "block",
              fontSize: "clamp(2.8rem, 9vw, 5.6rem)",
              fontWeight: 700,
              color: "#FAF8F4",
              marginBottom: "14px",
            }}
          >
            You built the product.
          </span>
          <span
            style={{
              display: "block",
              fontSize: "clamp(1.5rem, 4.2vw, 2.6rem)",
              fontStyle: "italic",
              fontWeight: 400,
              color: "#C4622D",
              lineHeight: 1.25,
            }}
          >
            Selling it to companies is a different craft.
          </span>
        </h1>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(16px, 1.9vw, 18px)",
            fontWeight: 300,
            color: "#FAF8F4",
            opacity: 0.72,
            lineHeight: 1.75,
            maxWidth: "560px",
            margin: "0 auto 56px",
          }}
        >
          Leadership Spark GTM builds the B2B selling engine inside your company, with you and your team.
        </p>

        <a href="#partners" className="gtm-duo">
          <span className="gtm-duo-faces">
            <Image src="/images/gtm-genco.jpg" alt="" width={44} height={44} />
            <Image src="/images/gtm-emir.jpg" alt="" width={44} height={44} />
          </span>
          <span>With Genco &amp; Emir, founding partners</span>
        </a>
      </section>

      {/* THE BUYER CHANGED */}
      <section style={{ background: "#F5F0E8", padding: "112px 24px" }}>
        <div className="gtm-buyer">
          <Reveal>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4.6vw, 3.2rem)",
                fontWeight: 500,
                lineHeight: 1.12,
                letterSpacing: "-0.01em",
                margin: "0 0 24px",
              }}
            >
              Your buyer changed more than your{" "}
              <em style={{ color: "#C4622D", fontWeight: 400 }}>product</em> did.
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(16px, 1.8vw, 17px)",
                fontWeight: 300,
                lineHeight: 1.85,
                opacity: 0.8,
                maxWidth: "520px",
                margin: 0,
              }}
            >
              Selling to companies got complicated on every level. The product earns the meeting.
              How you sell decides the deal.
            </p>
          </Reveal>

          <div className="gtm-buyer-stats">
            <StatLine
              target={86}
              suffix="%"
              description="of B2B purchases stall during the buying process."
              source="Forrester · 16,000+ buyers · 2024"
            />
            <StatLine
              target={6.2}
              decimals={1}
              suffix="months"
              description="for a new sales hire to ramp, the longest on record. Only 48% hit quota."
              source="The Bridge Group · 2026"
            />
          </div>
        </div>
      </section>

      <Divider />

      {/* SOUND FAMILIAR */}
      <section style={{ background: "#0A0A0A", padding: "104px 24px 0" }}>
        <div style={{ maxWidth: "980px", margin: "0 auto" }}>
          <p style={{ ...label, marginBottom: "56px" }}>Sound familiar?</p>
          <div className="gtm-pain-grid">
            {pains.map((p, i) => (
              <Reveal key={p.title} delay={i * 90} className="gtm-pain">
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#FAF8F4",
                    opacity: 0.45,
                    margin: "0 0 20px",
                  }}
                >
                  {p.tag}
                </p>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.5rem, 3vw, 1.9rem)",
                    fontWeight: 500,
                    color: "#FAF8F4",
                    lineHeight: 1.2,
                    margin: "0 0 16px",
                  }}
                >
                  {p.title}
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "15px",
                    fontWeight: 300,
                    color: "#FAF8F4",
                    opacity: 0.7,
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {p.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <div style={{ height: "1px", background: "#C4622D", opacity: 0.3, marginTop: "96px" }} />
        <div style={{ padding: "64px 24px 104px", textAlign: "center" }}>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.25rem, 2.8vw, 1.7rem)",
              fontStyle: "italic",
              fontWeight: 400,
              color: "#C4622D",
              lineHeight: 1.45,
              maxWidth: "720px",
              margin: "0 auto",
            }}
          >
            Build the B2B selling muscle early and it compounds. Leave it for later and you find
            out how expensive later is.
          </p>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" style={{ background: "#F5F0E8", padding: "112px 24px" }}>
        <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
          <p style={label}>Who&apos;s behind this</p>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.9rem, 4.6vw, 3rem)",
              fontWeight: 500,
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
              maxWidth: "760px",
              margin: "0 0 72px",
            }}
          >
            We build it inside your company,{" "}
            <em style={{ color: "#C4622D", fontWeight: 400 }}>with you and your team.</em>
          </p>

          <div className="gtm-partners">
            {partners.map((p, i) => (
              <Reveal key={p.name} delay={i * 150} className="gtm-partner">
                <div className="gtm-portrait">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    sizes="(min-width: 760px) 440px, 100vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#C4622D",
                    margin: "28px 0 10px",
                  }}
                >
                  Founding partner
                </p>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.6rem, 3vw, 2rem)",
                    fontWeight: 600,
                    lineHeight: 1.15,
                    margin: "0 0 6px",
                  }}
                >
                  {p.name}
                </p>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.1rem",
                    fontStyle: "italic",
                    color: "#C4622D",
                    margin: "0 0 18px",
                  }}
                >
                  {p.years}
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "15px",
                    fontWeight: 300,
                    lineHeight: 1.8,
                    opacity: 0.82,
                    margin: 0,
                  }}
                >
                  {p.bio}
                </p>
              </Reveal>
            ))}
            <span className="gtm-partners-spark" aria-hidden="true">✦</span>
          </div>
        </div>
      </section>

      <Divider />

      {/* WHAT WE BUILD */}
      <section style={{ background: "#1C1208", padding: "112px 24px" }}>
        <div style={{ maxWidth: "980px", margin: "0 auto" }}>
          <p style={label}>What we&apos;re here to build</p>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.9rem, 4.6vw, 3rem)",
              fontWeight: 500,
              color: "#FAF8F4",
              lineHeight: 1.15,
              maxWidth: "720px",
              margin: "0 0 64px",
            }}
          >
            B2B selling can be built like anything else.{" "}
            <em style={{ color: "#C4622D", fontWeight: 400 }}>That&apos;s what we do.</em>
          </p>

          <div className="gtm-build-grid">
            {builds.map((b, i) => (
              <div key={b.title} className="gtm-build">
                <span className="gtm-build-n">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(1.15rem, 2.2vw, 1.3rem)",
                      fontWeight: 500,
                      color: "#FAF8F4",
                      lineHeight: 1.3,
                      margin: "0 0 6px",
                    }}
                  >
                    {b.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14px",
                      fontWeight: 300,
                      color: "#FAF8F4",
                      opacity: 0.6,
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {b.line}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.1rem, 2.4vw, 1.35rem)",
              fontStyle: "italic",
              color: "#C4622D",
              lineHeight: 1.5,
              margin: "56px 0 0",
              maxWidth: "640px",
            }}
          >
            Not a menu. Discovery picks the one or two costing you the most deals.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: "#FAF8F4", padding: "112px 24px 120px" }}>
        <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
          <p style={label}>How it works</p>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.9rem, 4.6vw, 3rem)",
              fontWeight: 500,
              lineHeight: 1.15,
              maxWidth: "760px",
              margin: "0 0 64px",
            }}
          >
            We start with Discovery.{" "}
            <em style={{ color: "#C4622D", fontWeight: 400 }}>What we find shapes the rest.</em>
          </p>

          {/* Discovery gate */}
          <Reveal className="gtm-discovery">
            <div className="gtm-discovery-head">
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
                  fontWeight: 700,
                  color: "#FAF8F4",
                  lineHeight: 1,
                  margin: 0,
                }}
              >
                Discovery
              </p>
              <div className="gtm-chips">
                <span>2 weeks</span>
                <span>Fixed price</span>
                <span>3 to 4 hours of your time</span>
              </div>
            </div>
            <div className="gtm-discovery-body">
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.15rem, 2.4vw, 1.35rem)",
                  color: "#FAF8F4",
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                Two weeks inside your business to uncover what&apos;s slowing you down. Then you
                decide, with our findings and recommendations in hand.
              </p>
              <div>
                <p className="gtm-mini-label">How</p>
                <p className="gtm-dark-copy">
                  We talk to you first, then to your team. We check what we hear against
                  best-in-class practice, your pipeline and your numbers.
                </p>
                <p className="gtm-mini-label" style={{ marginTop: "24px" }}>What you get</p>
                <p className="gtm-dark-copy">
                  Two pages and a debrief meeting. The problems costing you the most deals, in
                  order, and what to do about each in the next 90 to 180 days.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Fan-out */}
          <div className="gtm-fan">
            <span className="gtm-fan-stem" aria-hidden="true" />
            <p className="gtm-fan-label">Then, if you want us to stay</p>
            <span className="gtm-fan-stem gtm-fan-stem-m" aria-hidden="true" />
            <span className="gtm-fan-bar" aria-hidden="true" />
          </div>

          <div className="gtm-paths">
            {paths.map((p, i) => (
              <Reveal key={p.name} delay={i * 120} className="gtm-path">
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.9rem, 3.4vw, 2.3rem)",
                    fontStyle: "italic",
                    fontWeight: 500,
                    color: "#C4622D",
                    lineHeight: 1,
                    margin: "0 0 14px",
                  }}
                >
                  {p.name}
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    fontWeight: 500,
                    lineHeight: 1.5,
                    margin: "0 0 4px",
                  }}
                >
                  {p.what}
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    opacity: 0.5,
                    margin: "0 0 20px",
                  }}
                >
                  {p.weeks}
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "15px",
                    fontWeight: 300,
                    lineHeight: 1.75,
                    opacity: 0.82,
                    margin: 0,
                  }}
                >
                  {p.body}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="gtm-footnotes">
            <p>Daily, hourly or per-deliverable pricing. Scoped and agreed before we start.</p>
            <p>These are example paths. If Discovery points somewhere else, we scope that instead.</p>
          </div>
        </div>
      </section>

      <SparkDivider bg="#FAF8F4" />

      {/* WHAT THIS IS NOT */}
      <section style={{ background: "#0A0A0A", padding: "104px 24px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={label}>What this is not</p>
          <StrikethroughItems />
        </div>
      </section>

      <Divider />

      {/* CTA */}
      <section style={{ background: "#1C1208", padding: "112px 24px", textAlign: "center" }}>
        <span className="gtm-duo-faces gtm-duo-faces-lg" aria-hidden="true">
          <Image src="/images/gtm-genco.jpg" alt="" width={64} height={64} />
          <Image src="/images/gtm-emir.jpg" alt="" width={64} height={64} />
        </span>
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 500,
            color: "#FAF8F4",
            lineHeight: 1.2,
            maxWidth: "640px",
            margin: "36px auto 20px",
          }}
        >
          Tell us how you <em style={{ color: "#C4622D", fontWeight: 400 }}>sell today.</em>
        </p>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(16px, 1.8vw, 17px)",
            fontWeight: 300,
            color: "#FAF8F4",
            opacity: 0.6,
            lineHeight: 1.7,
            margin: "0 auto 48px",
            maxWidth: "480px",
          }}
        >
          The first conversation is free. Write to both of us and we&apos;ll find a time.
        </p>
        <a
          href={MAILTO}
          style={{
            display: "inline-block",
            background: "#C4622D",
            color: "#FAF8F4",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            fontSize: "14px",
            letterSpacing: "0.08em",
            textDecoration: "none",
            padding: "20px 44px",
            borderRadius: "2px",
          }}
        >
          Email Genco &amp; Emir →
        </a>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "13px",
            color: "#FAF8F4",
            opacity: 0.5,
            margin: "24px 0 0",
          }}
        >
          or use the{" "}
          <Link href="/contact" style={{ color: "#FAF8F4", textDecorationColor: "#C4622D", textUnderlineOffset: "3px" }}>
            contact form
          </Link>
        </p>
        <div style={{ marginTop: "40px" }}>
          <Link
            href="/"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "13px",
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
