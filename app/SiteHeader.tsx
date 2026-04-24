import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "The Story", href: "/the-story" },
  { label: "Contact", href: "/contact" },
];

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
