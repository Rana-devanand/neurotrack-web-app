import { Link } from "react-router-dom";
import { BadgeDollarSign,  ChevronRight } from "lucide-react";

const LAST_UPDATED = "February 21, 2026";

const SECTIONS = [
  {
    id: "overview",
    title: "1. Overview",
    content: [
      {
        sub: "",
        body: "NeuroTrack offers a free tier so you can experience the core product before committing to a paid subscription. We want you to be completely satisfied with your purchase. This Refund Policy explains when and how we process refunds for NeuroTrack Pro subscriptions.",
      },
    ],
  },
  {
    id: "eligibility",
    title: "2. Refund Eligibility",
    content: [
      {
        sub: "2.1 14-Day Money-Back Guarantee",
        body: "If you are not satisfied with your NeuroTrack Pro subscription, you may request a full refund within 14 days of your initial purchase. This guarantee applies to first-time Pro subscribers only.",
      },
      {
        sub: "2.2 Renewal Charges",
        body: "Refunds for auto-renewal charges are considered on a case-by-case basis. If you did not intend to renew, contact us within 7 days of the renewal charge and we will evaluate your request in good faith.",
      },
      {
        sub: "2.3 Annual Plans",
        body: "For annual subscriptions, you may request a pro-rated refund for the unused portion of your subscription within 14 days of purchase. After 14 days, annual plans are non-refundable.",
      },
    ],
  },
  {
    id: "non-refundable",
    title: "3. Non-Refundable Cases",
    content: [
      {
        sub: "The following are generally not eligible for refunds:",
        body: "• Subscription charges older than 14 days (for monthly plans) or outside the pro-rata window (for annual plans).\n• Accounts that have been suspended or terminated due to violations of our Terms of Service.\n• Partial month or partial year usage — we do not issue prorated refunds for monthly plans once the 14-day window has passed.\n• Purchases made via Google Play Store or Apple App Store where the platform's own refund policy applies (see Section 5).\n• Discounted or promotional pricing offers where the terms explicitly stated no refunds.",
      },
    ],
  },
  {
    id: "how-to-request",
    title: "4. How to Request a Refund",
    content: [
      {
        sub: "Step 1 — Contact Us",
        body: "Email helpdesk.neurotrack@gmail.com with the subject line 'Refund Request'. Include your registered email address, the date of purchase, your order/transaction ID, and a brief reason for your request.",
      },
      {
        sub: "Step 2 — Review",
        body: "Our support team will review your request within 2 business days and confirm whether it meets the eligibility criteria described above.",
      },
      {
        sub: "Step 3 — Processing",
        body: "Approved refunds are processed within 5–7 business days. The refunded amount will be credited back to your original payment method. Depending on your bank or payment provider, it may take an additional 3–5 business days to appear on your statement.",
      },
    ],
  },
  {
    id: "store-subscriptions",
    title: "5. Google Play & Apple App Store Subscriptions",
    content: [
      {
        sub: "5.1 Google Play Store",
        body: "If you subscribed through the Google Play Store, refund requests must be submitted directly to Google. NeuroTrack does not control or process Play Store payments.\n\nTo request a refund via Google Play:\n1. Go to play.google.com/store/account/subscriptions\n2. Find your NeuroTrack subscription\n3. Tap 'Report a problem' and select a reason\n\nAlternatively, visit Google's support page at support.google.com/googleplay.",
      },
      {
        sub: "5.2 Apple App Store",
        body: "If you subscribed through the Apple App Store, refund requests must be made to Apple:\n\n1. Visit reportaproblem.apple.com\n2. Sign in with your Apple ID\n3. Find your NeuroTrack subscription and click 'Request a Refund'\n\nApple's standard refund policy and timeline applies.",
      },
    ],
  },
  {
    id: "cancellation",
    title: "6. Cancellation vs. Refund",
    content: [
      {
        sub: "",
        body: "Cancelling your subscription is not the same as requesting a refund. When you cancel, your Pro access continues until the end of the current billing period — no refund is issued for the remaining days. If you want a refund, you must explicitly request one using the process described in Section 4 in addition to cancelling your subscription.",
      },
    ],
  },
  {
    id: "disputes",
    title: "7. Chargebacks & Disputes",
    content: [
      {
        sub: "",
        body: "We encourage you to contact us before initiating a chargeback with your bank or payment provider. Most issues can be resolved quickly and amicably. Initiating an unjustified chargeback may result in your account being suspended while the dispute is under review.",
      },
    ],
  },
  {
    id: "changes",
    title: "8. Changes to This Policy",
    content: [
      {
        sub: "",
        body: "We may update this Refund Policy from time to time. Changes will be effective from the date the updated policy is posted on this page. We encourage you to review this page periodically.",
      },
    ],
  },
  {
    id: "contact",
    title: "9. Contact Us",
    content: [
      {
        sub: "",
        body: "For any refund-related questions, contact our support team at helpdesk.neurotrack@gmail.com. We aim to respond within 2 business days and resolve all issues fairly and promptly.",
      },
    ],
  },
];

const RefundPolicyPage = () => {
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
          style={{ width: 360, height: 360, top: "-140px", right: "-50px" }}
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
            <BadgeDollarSign size={12} /> Refund Policy
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              marginBottom: 12,
            }}
          >
            Refund <span className="gradient-text">Policy</span>
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
            We stand behind NeuroTrack with a 14-day money-back guarantee for
            new Pro subscribers. Here's everything you need to know about
            refunds.
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
            className="legal-toc"
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
                to="/privacy"
                style={{
                  fontSize: 12,
                  color: "var(--primary-light)",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                → Privacy Policy
              </Link>
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
            </div>
          </nav>

          {/* Content */}
          <div style={{ minWidth: 0 }}>
            {/* 14-day highlight banner */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(108,59,255,0.18), rgba(0,212,200,0.1))",
                border: "1.5px solid rgba(108,59,255,0.35)",
                borderRadius: "var(--radius-lg)",
                padding: "20px 24px",
                marginBottom: 40,
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, var(--primary), var(--accent))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: 22,
                }}
              >
                🛡️
              </div>
              <div>
                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: "var(--text-primary)",
                    marginBottom: 4,
                  }}
                >
                  14-Day Money-Back Guarantee
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  Not satisfied? Contact us within 14 days of your first Pro
                  purchase for a full refund — no questions asked.
                </div>
              </div>
            </div>

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
                        whiteSpace: "pre-line",
                      }}
                    >
                      {block.body}
                    </p>
                  </div>
                ))}
              </div>
            ))}

            <div
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-card)",
                borderRadius: "var(--radius-lg)",
                padding: "24px 28px",
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
                  Need a refund?
                </strong>{" "}
                Email us at{" "}
                <a
                  href="mailto:helpdesk.neurotrack@gmail.com"
                  style={{ color: "var(--accent)", textDecoration: "none" }}
                >
                  helpdesk.neurotrack@gmail.com
                </a>{" "}
                — we'll get back to you within 2 business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) { .legal-toc { display: none !important; } }
      `}</style>
    </main>
  );
};

export default RefundPolicyPage;
