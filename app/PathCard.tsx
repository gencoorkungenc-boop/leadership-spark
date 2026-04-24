"use client";

import Link from "next/link";
import { useState } from "react";

type Props = {
  num: string;
  heading: string;
  sub: string | null;
  body: string;
  isLast: boolean;
  href: string;
};

export default function PathCard({ num, heading, sub, body, isLast, href }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          padding: "48px 8px",
          cursor: "pointer",
          transition: "transform 0.25s",
          transform: hovered ? "translateY(-2px)" : "translateY(0)",
          borderBottom: isLast ? "none" : "1px solid rgba(28,18,8,0.1)",
        }}
      >
        {/* Title row: number + heading + arrow */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: "16px",
            marginBottom: sub ? "12px" : "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: "20px", flex: 1 }}>
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "12px",
                color: "#C4622D",
                letterSpacing: "0.12em",
                opacity: 0.8,
                flexShrink: 0,
              }}
            >
              {num}
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.2rem, 2.5vw, 1.45rem)",
                fontWeight: 500,
                color: "#1C1208",
                lineHeight: 1.3,
                margin: 0,
              }}
            >
              {heading}
            </h2>
          </div>
          <span
            style={{
              color: "#C4622D",
              fontSize: "24px",
              transition: "transform 0.2s",
              transform: hovered ? "translateX(5px)" : "translateX(0)",
              flexShrink: 0,
              lineHeight: 1,
            }}
          >
            →
          </span>
        </div>

        {sub && (
          <p
            style={{
              fontSize: "13px",
              color: "#8B7355",
              marginBottom: "14px",
              lineHeight: 1.6,
              fontWeight: 300,
              paddingLeft: "32px",
            }}
          >
            {sub}
          </p>
        )}

        <p
          style={{
            fontSize: "15px",
            color: "#1C1208",
            lineHeight: 1.7,
            fontWeight: 300,
            opacity: 0.75,
            paddingLeft: "32px",
          }}
        >
          {body}
        </p>
      </div>
    </Link>
  );
}
