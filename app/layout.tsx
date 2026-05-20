import type { Metadata } from "next";
import Script from "next/script";
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZRPMM96MKB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZRPMM96MKB');
          `}
        </Script>
      </head>
      <body style={{ height: "auto", minHeight: "unset", overflowX: "hidden", background: "#FAF8F4" }}>{children}</body>
    </html>
  );
}
