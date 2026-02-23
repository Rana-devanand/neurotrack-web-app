import { Link } from "react-router-dom";
import { FileText, ChevronRight } from "lucide-react";

const LAST_UPDATED = "February 21, 2026";

const SECTIONS = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: [
      {
        sub: "",
        body: 'By downloading, installing, or using the NeuroTrack mobile application ("App") or visiting this website, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the App or website. These Terms constitute a legally binding agreement between you and NeuroTrack.',
      },
    ],
  },
  {
    id: "eligibility",
    title: "2. Eligibility",
    content: [
      {
        sub: "",
        body: "You must be at least 13 years of age to use NeuroTrack. By using the App you confirm that you meet this age requirement. If you are between 13 and 18 years of age, you confirm that you have your parent's or guardian's permission to use the App.",
      },
    ],
  },
  {
    id: "account",
    title: "3. Your Account",
    content: [
      {
        sub: "3.1 Account Registration",
        body: "To access most features of NeuroTrack you must create an account. You agree to provide accurate, current, and complete information during registration and to keep your account information updated.",
      },
      {
        sub: "3.2 Account Security",
        body: "You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. Notify us immediately at helpdesk.neurotrack@gmail.com if you suspect any unauthorised use of your account.",
      },
      {
        sub: "3.3 Account Termination",
        body: "You may delete your account at any time from Profile → Settings → Delete Account. We reserve the right to suspend or terminate accounts that violate these Terms.",
      },
    ],
  },
  {
    id: "subscriptions",
    title: "4. Subscriptions & Payments",
    content: [
      {
        sub: "4.1 Free Tier",
        body: "NeuroTrack offers a free tier with limited features. No payment information is required to use the free tier.",
      },
      {
        sub: "4.2 Pro Subscription",
        body: "The Pro plan is available on a monthly or annual subscription basis. All fees are charged in advance and are non-refundable except as required by applicable law or as stated in our Refund Policy.",
      },
      {
        sub: "4.3 Billing",
        body: "Subscriptions are managed through Google Play or Apple App Store, or directly via our payment provider. By subscribing, you authorise the applicable billing party to charge your chosen payment method on a recurring basis until you cancel.",
      },
      {
        sub: "4.4 Cancellation",
        body: "You may cancel your Pro subscription at any time. Cancellation takes effect at the end of the current billing period; you will retain Pro access until then.",
      },
      {
        sub: "4.5 Price Changes",
        body: "We reserve the right to modify subscription pricing with at least 14 days' advance notice. Continued use after a price change takes effect constitutes your acceptance of the new price.",
      },
    ],
  },
  {
    id: "acceptable-use",
    title: "5. Acceptable Use",
    content: [
      {
        sub: "You agree NOT to:",
        body: "• Reverse engineer, decompile, or disassemble the App.\n• Use the App for any illegal, harmful, or fraudulent purpose.\n• Attempt to gain unauthorised access to our systems or other users' accounts.\n• Transmit viruses, malware, or other harmful code.\n• Scrape, crawl, or harvest data from the App without our written consent.\n• Impersonate any person or entity or falsely represent your affiliation with any person or entity.",
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "6. Intellectual Property",
    content: [
      {
        sub: "6.1 Ownership",
        body: 'The App, its content, features, and functionality — including all code, design, text, graphics, logos, and icons — are owned by NeuroTrack and are protected by copyright, trademark, and other intellectual property laws. "NeuroTrack" and all related marks are our trademarks.',
      },
      {
        sub: "6.2 Licence to Use",
        body: "Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable licence to download and use the App on your personal device(s) solely for your personal, non-commercial purposes.",
      },
      {
        sub: "6.3 User Content",
        body: "Any data you input into the App (mood logs, notes, custom goals) remains yours. By submitting such content, you grant NeuroTrack a limited licence to process it solely to provide the App's services to you.",
      },
    ],
  },
  {
    id: "disclaimers",
    title: "7. Disclaimers",
    content: [
      {
        sub: "7.1 Not Medical Advice",
        body: "NeuroTrack is a productivity and wellness tool, not a medical device or service. Nothing in the App constitutes medical, psychological, or other professional advice. Always consult a qualified professional for medical or mental-health concerns.",
      },
      {
        sub: "7.2 As-Is Basis",
        body: 'The App is provided on an "as is" and "as available" basis without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.',
      },
    ],
  },
  {
    id: "limitation",
    title: "8. Limitation of Liability",
    content: [
      {
        sub: "",
        body: "To the fullest extent permitted by applicable law, NeuroTrack and its affiliates, officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of — or inability to use — the App, even if advised of the possibility of such damages. Our total liability to you for any claims under these Terms shall not exceed the amount you paid us in the twelve months preceding the claim.",
      },
    ],
  },
  {
    id: "governing-law",
    title: "9. Governing Law",
    content: [
      {
        sub: "",
        body: "These Terms are governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of India.",
      },
    ],
  },
  {
    id: "changes",
    title: "10. Changes to Terms",
    content: [
      {
        sub: "",
        body: "We may update these Terms from time to time. We will notify you of material changes via in-app notification or email at least 7 days before the changes take effect. Your continued use of the App after the effective date constitutes your acceptance of the revised Terms.",
      },
    ],
  },
  {
    id: "contact",
    title: "11. Contact",
    content: [
      {
        sub: "",
        body: "For questions about these Terms, please contact us at helpdesk.neurotrack@gmail.com. We aim to respond within 2 business days.",
      },
    ],
  },
];

const TermsPage = () => {
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
          className="orb orb-accent"
          style={{ width: 380, height: 380, top: "-160px", right: "-60px" }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: "var(--radius-full)",
              background: "rgba(0,212,200,0.1)",
              border: "1px solid rgba(0,212,200,0.35)",
              color: "var(--accent)",
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.07em",
              marginBottom: 20,
            }}
          >
            <FileText size={12} /> Terms of Service
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              marginBottom: 12,
            }}
          >
            Terms of <span className="gradient-text">Service</span>
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
            Please read these Terms carefully before using NeuroTrack. By using
            the App you agree to be bound by these Terms.
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
          {/* Sticky TOC */}
          <nav
            className="terms-toc"
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
            {/* Privacy link */}
            <div
              style={{
                borderTop: "1px solid var(--border-subtle)",
                margin: "12px 0 0",
                padding: "12px 20px 0",
              }}
            >
              <Link
                to="/privacy-policy"
                style={{
                  fontSize: 12,
                  color: "var(--primary-light)",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                → Privacy Policy
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
                          color: "var(--accent)",
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
                        whiteSpace: "pre-line",
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
                  to="/privacy-policy"
                  style={{ color: "var(--accent)", textDecoration: "none" }}
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .terms-toc { display: none !important; }
        }
      `}</style>
    </main>
  );
};

export default TermsPage;
