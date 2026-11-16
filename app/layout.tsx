import type { Metadata } from "next";
import CookieBanner from "../components/CookieBanner";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://leadershipspark.co"),
  title: "Leadership Spark",
  description: "Working with leaders, founders and professionals who are ready to move.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Leadership Spark",
    description: "Leadership coaching and advisory for senior leaders, founders and professionals ready to move.",
    url: "https://leadershipspark.co",
    siteName: "Leadership Spark",
    images: [
      {
        url: "https://leadershipspark.co/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ height: "auto", minHeight: "unset" }}>
      <body style={{ height: "auto", minHeight: "unset", overflowX: "hidden", background: "#FAF8F4" }}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
