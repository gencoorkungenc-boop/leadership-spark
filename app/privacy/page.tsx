import type { Metadata } from "next";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy — Leadership Spark",
  description: "Privacy policy for Leadership Spark, operated by Genco Orkun Genc, Dublin, Ireland.",
};

const CREAM = "#FAF8F4";
const DARK_TEXT = "#1C1208";
const TERRA = "#C4622D";
const MUTED = "#8B7355";

const sections = [
  {
    heading: "Who We Are",
    body: "This website is operated by Genco Orkun Genc, trading as Leadership Spark, based in Dublin, Ireland. You can contact us at genco@leadershipspark.co",
  },
  {
    heading: "What Data We Collect and Why",
    body: null,
    subsections: [
      {
        label: "Contact form submissions",
        text: "When you fill in the contact form on this site, we collect your name, email address and the message you submit. We use this information solely to respond to your enquiry. We do not share this data with third parties.",
      },
      {
        label: "Analytics",
        text: "This site uses Google Analytics 4 to understand how visitors use the website. This includes pages visited, time spent on the site, general location at country level, device type and how you arrived at the site. Google Analytics uses cookies to collect this data. You can accept or decline cookies using the banner shown on your first visit.",
      },
    ],
  },
  {
    heading: "Legal Basis for Processing",
    body: "We process contact form data on the basis of legitimate interest, specifically to respond to enquiries from people who have chosen to contact us. We process analytics data on the basis of consent, which you provide via the cookie banner.",
  },
  {
    heading: "How Long We Keep Your Data",
    body: "Contact form submissions are retained only as long as necessary to respond to your enquiry. Google Analytics data is retained for 14 months by default.",
  },
  {
    heading: "Your Rights",
    body: "Under GDPR you have the right to access, correct or delete any personal data we hold about you. To exercise these rights, contact us at genco@leadershipspark.co and we will respond within 30 days.",
  },
  {
    heading: "Cookies",
    body: "This site uses one category of cookies: analytics cookies placed by Google Analytics 4. These are only placed if you accept cookies via the banner on your first visit. You can withdraw consent at any time by clearing your browser cookies.",
  },
  {
    heading: "Third Party Services",
    body: "This site uses Google Analytics 4, operated by Google Ireland Limited. For information on how Google processes data, see Google's Privacy Policy at policies.google.com/privacy.",
  },
  {
    heading: "Changes to This Policy",
    body: "We may update this policy from time to time. The date at the top of this page indicates when it was last revised.",
  },
  {
    heading: "Contact",
    body: "For any privacy-related questions, contact genco@leadershipspark.co",
  },
];

export default function Privacy() {
  return (
    <div style={{ background: CREAM, fontFamily: "'Inter', sans-serif", color: DARK_TEXT }}>
      <SiteHeader current="" />

      <main style={{ maxWidth: "720px", margin: "0 auto", padding: "64px 24px 96px" }}>

        {/* Page label */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: TERRA,
            marginBottom: "16px",
            opacity: 0.85,
          }}
        >
          Privacy Policy
        </p>

        {/* Last updated */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "13px",
            fontWeight: 300,
            color: MUTED,
            marginBottom: "64px",
          }}
        >
          Last updated: May 2026
        </p>

        {/* Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
          {sections.map((section) => (
            <div key={section.heading}>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "20px",
                  fontWeight: 500,
                  color: DARK_TEXT,
                  marginBottom: "16px",
                  lineHeight: 1.3,
                }}
              >
                {section.heading}
              </h2>

              {section.body && (
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "18px",
                    fontWeight: 300,
                    color: DARK_TEXT,
                    lineHeight: 1.8,
                    opacity: 0.85,
                    margin: 0,
                  }}
                >
                  {section.body}
                </p>
              )}

              {section.subsections && (
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {section.subsections.map((sub) => (
                    <div key={sub.label}>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "13px",
                          fontWeight: 600,
                          letterSpacing: "0.04em",
                          color: MUTED,
                          marginBottom: "8px",
                          textTransform: "uppercase",
                        }}
                      >
                        {sub.label}
                      </p>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "18px",
                          fontWeight: 300,
                          color: DARK_TEXT,
                          lineHeight: 1.8,
                          opacity: 0.85,
                          margin: 0,
                        }}
                      >
                        {sub.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            width: "36px",
            height: "1px",
            background: TERRA,
            margin: "72px 0 0",
            opacity: 0.3,
          }}
        />
      </main>

      <SiteFooter />
    </div>
  );
}
