import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "The Story", href: "/the-story" },
  { label: "Contact", href: "/contact" },
];

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-label="LinkedIn">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function SiteHeader({ current }: { current: string }) {
  return (
    <header style={{ paddingTop: "56px", paddingBottom: "40px", textAlign: "center" }}>
      <div style={{ marginBottom: "14px" }}>
        <span
          style={{
            fontSize: "36px",
            color: "#C4622D",
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
          }}
        >
          ✦
        </span>
      </div>

      <Link
        href="/"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(28px, 5vw, 36px)",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#1C1208",
          textDecoration: "none",
        }}
      >
        Leadership Spark
      </Link>

      <nav style={{ marginTop: "36px" }}>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
            padding: 0,
            margin: 0,
          }}
        >
          {navItems.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                style={{
                  fontSize: "13px",
                  letterSpacing: "0.06em",
                  color: "#1C1208",
                  textDecoration: "none",
                  fontWeight: 400,
                  opacity: label === current ? 1 : 0.55,
                }}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="https://www.linkedin.com/in/gencoorkun/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
              style={{
                display: "flex",
                alignItems: "center",
                color: "#1C1208",
                opacity: 0.55,
              }}
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </Link>
          </li>
        </ul>
      </nav>

      <div
        style={{
          width: "36px",
          height: "1px",
          background: "#C4622D",
          margin: "40px auto 0",
          opacity: 0.4,
        }}
      />
    </header>
  );
}
