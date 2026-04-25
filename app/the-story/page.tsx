import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";

const labelStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "11px",
  fontWeight: 600,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "#C4622D",
  marginBottom: "28px",
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

const col: React.CSSProperties = {
  maxWidth: "660px",
  margin: "0 auto",
  padding: "0 24px",
};

export default function TheStory() {
  return (
    <div style={{ background: "#FAF8F4", color: "#1C1208", fontFamily: "'Inter', sans-serif" }}>
      <SiteHeader current="The Story" />

      {/* Page title + opening headline */}
      <div style={{ ...col, paddingTop: "80px", paddingBottom: "80px" }}>
        <p style={labelStyle}>The Story</p>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 500,
            lineHeight: 1.2,
            color: "#1C1208",
            letterSpacing: "-0.01em",
            margin: 0,
          }}
        >
          I know what it costs to stay silent. I also know what becomes{" "}
          <em style={{ fontStyle: "italic", color: "#C4622D" }}>possible</em>{" "}
          when you don&apos;t.
        </h1>
      </div>

      {/* Section 1 */}
      <div style={{ ...col, paddingBottom: "80px" }}>
        <p style={{ ...body, marginBottom: "28px" }}>
          I spent nearly 20 years in global tech sales. Building teams, opening markets, closing
          deals across EMEA and beyond. Nearly a decade at LinkedIn. Emerging markets across 50
          countries at Pluralsight. I know what good looks like because I built it.
        </p>
        <p style={{ ...body, marginBottom: "28px" }}>
          I was also, for a long time, much better at helping organisations find their voice than
          using my own.
        </p>
        <p style={body}>That changed.</p>
      </div>

      {/* Photo — fixed 600px height, face-centred crop */}
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto 80px",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "600px",
            borderRadius: "8px",
            overflow: "hidden",
            background: "#E8E2D9",
          }}
        >
          <Image
            src="/images/genco-portrait.jpg"
            alt="Genco"
            fill
            style={{ objectFit: "cover", objectPosition: "center 20%" }}
            priority
          />
        </div>
        <p
          style={{
            textAlign: "center",
            fontSize: "10px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#8B7355",
            marginTop: "14px",
            fontWeight: 500,
          }}
        >
          Genco, Dublin, 2026
        </p>
      </div>

      {/* Section 2 — The Turn */}
      <div style={{ ...col, paddingBottom: "80px" }}>
        <p style={labelStyle}>The Turn</p>
        <p style={{ ...body, marginBottom: "28px" }}>
          In 2024 I left a well-paid tech leadership role and took a year off. Not because I burned
          out. Because something sparked.
        </p>
        <p style={{ ...body, marginBottom: "28px" }}>
          I went to Bali, Brazil, Argentina. I fainted in Patagonia and got back up. I spent a
          Turkish summer in Datça with my family. I asked myself, for the first time without the
          noise of quarterly targets and back-to-back meetings, what is actually possible here?
        </p>
        <p style={body}>The answer became Leadership Spark.</p>
      </div>

      {/* Section 3 — Who I Work With */}
      <div style={{ ...col, paddingBottom: "80px" }}>
        <p style={labelStyle}>Who I Work With</p>
        <p style={{ ...body, marginBottom: "28px" }}>
          Today I work with senior leaders who know they have more to say than they are currently
          saying. With founders who have built something real and need the commercial systems to
          match it. With professionals who are standing at a crossroads and need more than a career
          coach. They need someone who has actually been there.
        </p>
        <p style={body}>
          I bring the coaching. I bring 20 years of commercial instinct. People who have worked
          with me will tell you about the energy in the room. That is the part that doesn&apos;t
          show up on a credentials page.
        </p>
      </div>

      {/* Mid-page CTA block */}
      <div
        style={{
          background: "#FAF8F4",
          padding: "80px 24px",
          textAlign: "center",
          borderTop: "1px solid rgba(28,18,8,0.08)",
          borderBottom: "1px solid rgba(28,18,8,0.08)",
        }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#C4622D",
            marginBottom: "20px",
            opacity: 0.85,
          }}
        >
          Work with Genco
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
            fontWeight: 500,
            color: "#1C1208",
            lineHeight: 1.25,
            marginBottom: "40px",
          }}
        >
          Ready to find your path?
        </h2>
        <div
          className="cta-buttons"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <Link
            href="/"
            style={{
              display: "inline-block",
              background: "#C4622D",
              color: "#FAF8F4",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: "14px",
              letterSpacing: "0.06em",
              textDecoration: "none",
              padding: "16px 36px",
              borderRadius: "2px",
              minWidth: "200px",
            }}
          >
            See the paths →
          </Link>
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              background: "transparent",
              color: "#C4622D",
              border: "1.5px solid #C4622D",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: "14px",
              letterSpacing: "0.06em",
              textDecoration: "none",
              padding: "16px 36px",
              borderRadius: "2px",
              minWidth: "200px",
            }}
          >
            Get in touch →
          </Link>
        </div>
      </div>

      {/* Section 4 — dark band */}
      <section
        style={{
          background: "#1C1208",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(16px, 1.8vw, 17px)",
            fontWeight: 300,
            lineHeight: 1.85,
            color: "#FAF8F4",
            opacity: 0.85,
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          I was born in Turkey and have called Dublin home since 2013. My work has taken me across
          Europe, the Middle East and Africa. I think in multiple languages and multiple contexts.
          That is not incidental to what I do. It is central to it.
        </p>
      </section>

      {/* Closing */}
      <div style={{ ...col, paddingTop: "88px", paddingBottom: "48px" }}>
        <p style={{ ...body, marginBottom: "28px" }}>
          Leadership Spark exists because I believe momentum is a choice. Not a privilege, not a
          personality type. A choice you make when someone holds the space for you to see clearly.
        </p>
        <p style={body}>
          I am based in Dublin. I work globally. The first conversation is always free.
        </p>
      </div>

      {/* Closing question — 60px gap below before CTA band */}
      <div
        style={{
          maxWidth: "660px",
          margin: "0 auto",
          padding: "0 24px 96px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "36px",
            height: "1px",
            background: "#C4622D",
            margin: "0 auto 56px",
            opacity: 0.4,
          }}
        />
        <Link href="/" style={{ textDecoration: "none" }}>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontStyle: "italic",
              fontWeight: 400,
              color: "#C4622D",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            What brings you here today?
          </p>
        </Link>
      </div>

      {/* CTA band */}
      <section
        style={{
          background: "#1C1208",
          padding: "88px 24px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 500,
            color: "#FAF8F4",
            lineHeight: 1.2,
            marginBottom: "20px",
          }}
        >
          Ready to talk?
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(16px, 1.8vw, 17px)",
            fontWeight: 300,
            color: "#FAF8F4",
            opacity: 0.65,
            lineHeight: 1.7,
            marginBottom: "40px",
          }}
        >
          The first conversation is always free.
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
            letterSpacing: "0.06em",
            textDecoration: "none",
            padding: "16px 36px",
            borderRadius: "2px",
          }}
        >
          Get in touch →
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}
