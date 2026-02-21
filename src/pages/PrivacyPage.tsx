import { Link } from "react-router-dom";
import { Shield, ChevronRight } from "lucide-react";

/* Last updated date */
const LAST_UPDATED = "February 21, 2026";

const SECTIONS = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: [
      {
        sub: "1.1 Information You Provide",
        body: "When you create a NeuroTrack account we collect your name, email address, and (optionally) a profile photo. If you choose to subscribe to a paid plan we collect billing information, which is processed securely by our payment providers and never stored on our servers.",
      },
      {
        sub: "1.2 Information Collected Automatically",
        body: "NeuroTrack passively collects app-usage statistics (screen time per application), daily mood and energy check-ins you submit, focus session durations, and productivity scores derived from these signals. We also collect standard device information such as OS version and timezone to ensure the app works correctly.",
      },
      {
        sub: "1.3 Email Data",
        body: "With your explicit permission the AI Assistant analyses your email metadata (sender, subject, timestamp) to surface productivity insights. We never read or store the body of your emails. Authorisation can be revoked at any time from Profile → Privacy & AI Settings.",
      },
    ],
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    content: [
      {
        sub: "2.1 Core Product Functionality",
        body: "We use your data purely to power the NeuroTrack experience: generating your Daily Focus Plan, computing your AI Productivity Score, surfacing Burnout Risk alerts, and personalising the AI Assistant's responses.",
      },
      {
        sub: "2.2 Service Improvement",
        body: "Aggregate, anonymised usage metrics help us improve features and fix bugs. We do not sell, rent, or share your personal data with third-party advertisers.",
      },
      {
        sub: "2.3 Communications",
        body: "We may send transactional emails (account confirmation, password reset) and, with your consent, product-update notifications. You can unsubscribe from non-essential communications at any time.",
      },
    ],
  },
  {
    id: "data-storage",
    title: "3. Data Storage & Security",
    content: [
      {
        sub: "3.1 Storage Location",
        body: "Your data is stored on encrypted servers hosted on industry-leading cloud infrastructure. All data in transit is protected with TLS 1.3 encryption.",
      },
      {
        sub: "3.2 Retention",
        body: "We retain your data for as long as your account is active. You may delete your account at any time from Profile → Settings → Delete Account, which permanently removes all personal data within 30 days.",
      },
      {
        sub: "3.3 Security",
        body: "We implement industry-standard security measures including AES-256 data-at-rest encryption, secure API authentication, and regular third-party security audits. However, no system is 100% secure and we cannot guarantee absolute data security.",
      },
    ],
  },
  {
    id: "data-sharing",
    title: "4. Data Sharing",
    content: [
      {
        sub: "4.1 We Never Sell Your Data",
        body: "NeuroTrack does not sell, trade, or rent your personal information to any third party, period.",
      },
      {
        sub: "4.2 Service Providers",
        body: "We use carefully vetted third-party vendors (e.g., payment processors, cloud hosting, analytics) solely to operate the app. These providers are contractually bound to keep your data confidential and may not use it for their own purposes.",
      },
      {
        sub: "4.3 Legal Requirements",
        body: "We may disclose your information if required by law, court order, or governmental authority, or to protect the rights, property, or safety of NeuroTrack, our users, or the public.",
      },
    ],
  },
  {
    id: "your-rights",
    title: "5. Your Rights",
    content: [
      {
        sub: "5.1 Access & Portability",
        body: "You may request a copy of all personal data we hold about you at any time by emailing helpdesk.neurotrack@gmail.com.",
      },
      {
        sub: "5.2 Correction",
        body: "You can update your profile information directly within the app at any time.",
      },
      {
        sub: "5.3 Deletion",
        body: "You have the right to request deletion of your personal data. You can delete your account directly from the app (Profile → Settings → Delete Account) or follow our step-by-step guide at /delete-account. We will fulfil deletion requests within 30 days unless retention is required by law.",
      },
      {
        sub: "5.4 Opt-Out",
        body: "You may opt out of promotional communications at any time via Profile → Notifications, or by clicking the unsubscribe link in any marketing email.",
      },
    ],
  },
  {
    id: "children",
    title: "6. Children's Privacy",
    content: [
      {
        sub: "",
        body: "NeuroTrack is not directed at children under the age of 13. We do not knowingly collect personal data from children under 13. If we become aware that a child under 13 has provided us with personal data, we will delete it promptly.",
      },
    ],
  },
  {
    id: "changes",
    title: "7. Changes to This Policy",
    content: [
      {
        sub: "",
        body: "We may update this Privacy Policy from time to time. When we do, we will revise the 'Last Updated' date at the top of this page and, for material changes, notify you via in-app notification or email. Your continued use of NeuroTrack after any update constitutes your acceptance of the revised policy.",
      },
    ],
  },
  {
    id: "contact",
    title: "8. Contact Us",
    content: [
      {
        sub: "",
        body: "If you have any questions about this Privacy Policy or how your data is handled, please contact us at helpdesk.neurotrack@gmail.com. We aim to respond within 2 business days.",
      },
    ],
  },
];

const PrivacyPage = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main
      style={{
        background: "var(--bg-base)",
        minHeight: "100vh",
        paddingTop: "90px",
        color: "var(--text-primary)",
      }}
    >
      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          padding: "60px 0 48px",
          borderBottom: "1px solid var(--border-subtle)",
          overflow: "hidden",
        }}
      >
        <div
          className="orb orb-primary"
          style={{ width: 420, height: 420, top: "-180px", left: "-80px" }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: "var(--radius-full)",
              background: "rgba(108,59,255,0.12)",
              border: "1px solid rgba(108,59,255,0.35)",
              color: "var(--primary-light)",
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.07em",
              marginBottom: 20,
            }}
          >
            <Shield size={12} /> Privacy Policy
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              marginBottom: 12,
            }}
          >
            Your Privacy,{" "}
            <span className="gradient-text">Our Responsibility</span>
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              maxWidth: 520,
              lineHeight: 1.7,
              marginBottom: 16,
            }}
          >
            NeuroTrack is built on a simple promise: your personal data is used
            only to make your experience better — never to target you with ads
            or sold to third parties.
          </p>
          <p style={{ fontSize: 13, color: "var(--text-muted)" }}>
            Last updated: <strong>{LAST_UPDATED}</strong>
          </p>
        </div>
      </section>

      {/* ── BODY ── */}
      <section style={{ padding: "64px 0 96px" }}>
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "220px 1fr",
            gap: 56,
            alignItems: "start",
          }}
        >
          {/* Sticky TOC — hidden on mobile via inline media */}
          <nav
            className="privacy-toc"
            style={{
              position: "sticky",
              top: 90,
              background: "var(--bg-card)",
              border: "1px solid var(--border-card)",
              borderRadius: "var(--radius-lg)",
              padding: "20px 0",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.07em",
                color: "var(--text-muted)",
                padding: "0 20px 12px",
                borderBottom: "1px solid var(--border-subtle)",
                marginBottom: 8,
              }}
            >
              On This Page
            </div>
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  width: "100%",
                  padding: "8px 20px",
                  background: "transparent",
                  border: "none",
                  color: "var(--text-muted)",
                  fontSize: 12.5,
                  fontWeight: 500,
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "var(--font-sans)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "var(--accent)";
                  el.style.paddingLeft = "26px";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "var(--text-muted)";
                  el.style.paddingLeft = "20px";
                }}
              >
                <ChevronRight size={11} />
                {s.title.replace(/^\d+\.\s/, "")}
              </button>
            ))}
            {/* Links to related pages */}
            <div
              style={{
                borderTop: "1px solid var(--border-subtle)",
                margin: "12px 0 0",
                padding: "12px 20px 0",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <Link
                to="/terms"
                style={{
                  fontSize: 12,
                  color: "var(--primary-light)",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                → Terms of Service
              </Link>
              <Link
                to="/delete-account"
                style={{
                  fontSize: 12,
                  color: "#ff6b6b",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                → Delete Account
              </Link>
            </div>
          </nav>

          {/* Content */}
          <div style={{ minWidth: 0 }}>
            {SECTIONS.map((section) => (
              <div
                key={section.id}
                id={section.id}
                style={{ marginBottom: 52, scrollMarginTop: 96 }}
              >
                <h2
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 800,
                    color: "var(--text-primary)",
                    marginBottom: 20,
                    paddingBottom: 12,
                    borderBottom: "1px solid var(--border-subtle)",
                  }}
                >
                  {section.title}
                </h2>
                {section.content.map((block, i) => (
                  <div key={i} style={{ marginBottom: 20 }}>
                    {block.sub && (
                      <h3
                        style={{
                          fontSize: "0.95rem",
                          fontWeight: 700,
                          color: "var(--primary-light)",
                          marginBottom: 8,
                        }}
                      >
                        {block.sub}
                      </h3>
                    )}
                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.8,
                      }}
                    >
                      {block.body}
                    </p>
                  </div>
                ))}
              </div>
            ))}

            {/* Footer note */}
            <div
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-card)",
                borderRadius: "var(--radius-lg)",
                padding: "24px 28px",
                marginTop: 8,
              }}
            >
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                }}
              >
                <strong style={{ color: "var(--text-secondary)" }}>
                  Questions?
                </strong>{" "}
                Contact us at{" "}
                <a
                  href="mailto:helpdesk.neurotrack@gmail.com"
                  style={{ color: "var(--accent)", textDecoration: "none" }}
                >
                  helpdesk.neurotrack@gmail.com
                </a>
                . Also read our{" "}
                <Link
                  to="/terms"
                  style={{ color: "var(--accent)", textDecoration: "none" }}
                >
                  Terms of Service
                </Link>{" "}
                or{" "}
                <Link
                  to="/delete-account"
                  style={{ color: "var(--accent)", textDecoration: "none" }}
                >
                  delete your account
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .privacy-toc { display: none !important; }
        }
      `}</style>
    </main>
  );
};

export default PrivacyPage;
