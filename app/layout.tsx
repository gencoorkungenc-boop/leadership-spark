import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://leadershipspark.co"),
  title: "Leadership Spark",
  description: "Working with leaders, founders and professionals who are ready to move.",
  openGraph: {
    siteName: "Leadership Spark",
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
      <body style={{ height: "auto", minHeight: "unset", overflowX: "hidden", background: "#FAF8F4" }}>{children}</body>
    </html>
  );
}
