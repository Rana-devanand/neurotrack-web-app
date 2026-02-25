import { Link } from "react-router-dom";
import { Cookie, ArrowLeft, ChevronRight } from "lucide-react";

const LAST_UPDATED = "February 21, 2026";

const SECTIONS = [
  {
    id: "what-are-cookies",
    title: "1. What Are Cookies?",
    content: [
      {
        sub: "",
        body: "Cookies are small text files placed on your device (computer, smartphone, or tablet) when you visit a website or use a web-based application. They allow the website to recognise your device and remember information about your visit — such as your preferred language, theme setting, or login status — to make your next visit easier and the service more useful to you.",
      },
    ],
  },
  {
    id: "how-we-use",
    title: "2. How NeuroTrack Uses Cookies",
    content: [
      {
        sub: "2.1 Essential Cookies",
        body: "These cookies are strictly necessary for the website and app to function. They enable core features such as authentication, session management, and security (CSRF protection). Without these cookies, services you request — like staying logged in — cannot be provided. These cannot be disabled.",
      },
      {
        sub: "2.2 Preference Cookies",
        body: "We use preference cookies to remember choices you make, such as your selected theme (dark or light mode), language settings, and UI layout preferences. These persist across sessions so you don't have to reconfigure the app each time you visit.",
      },
      {
        sub: "2.3 Analytics Cookies",
        body: "We use analytics cookies to understand how visitors interact with our website — which pages are visited most, how long users stay, and where they navigate from. This helps us improve the site's content and usability. All analytics data is aggregated and anonymised; it is never linked back to you personally.",
      },
      {
        sub: "2.4 Performance Cookies",
        body: "Performance cookies collect information about how you use our site (e.g., error messages, page load times). We use this information to identify and fix issues, optimise performance, and ensure a smooth experience across different devices and browsers.",
      },
    ],
  },
  {
    id: "third-party-cookies",
    title: "3. Third-Party Cookies",
    content: [
      {
        sub: "3.1 Google Fonts",
        body: "Our website loads fonts from Google Fonts. Google may set cookies or log request data (such as IP address) when fonts are loaded. Please refer to Google's Privacy Policy for more details.",
      },
      {
        sub: "3.2 Payment Processors",
        body: "When you make a payment, our payment providers (e.g., Razorpay, Google Play billing) may set cookies necessary to process the transaction securely. These are governed by the respective provider's privacy and cookie policies.",
      },
      {
        sub: "3.3 No Advertising Cookies",
        body: "NeuroTrack does not use advertising or tracking cookies. We do not partner with ad networks, and we do not allow third-party advertisers to place cookies on our site or in our app.",
      },
    ],
  },
  {
    id: "session-vs-persistent",
    title: "4. Session vs. Persistent Cookies",
    content: [
      {
        sub: "Session Cookies",
        body: "Session cookies exist only for the duration of your browser session. They are deleted automatically when you close your browser. We use session cookies for authentication tokens and CSRF protection.",
      },
      {
        sub: "Persistent Cookies",
        body: "Persistent cookies remain on your device for a set period (or until you delete them manually). We use persistent cookies for theme preferences (key: nt-theme) and analytics. Our preference cookies typically expire after 12 months.",
      },
    ],
  },
  {
    id: "local-storage",
    title: "5. Local Storage & Similar Technologies",
    content: [
      {
        sub: "",
        body: "In addition to cookies, we use browser localStorage to store your theme preference (nt-theme) and, for the mobile app, AsyncStorage to persist session data and onboarding state on your device. These technologies work similarly to cookies but store data locally on your device and are not sent to our servers with each request.",
      },
    ],
  },
  {
    id: "your-choices",
    title: "6. Your Choices & How to Control Cookies",
    content: [
      {
        sub: "6.1 Browser Settings",
        body: "Most web browsers allow you to control cookies through their settings — you can view, delete, or block cookies. To find out how, visit your browser's help section:\n• Chrome: Settings → Privacy and Security → Cookies\n• Firefox: Settings → Privacy & Security → Cookies\n• Safari: Preferences → Privacy → Manage Website Data\n• Edge: Settings → Cookies and Site Permissions",
      },
      {
        sub: "6.2 Impact of Disabling Cookies",
        body: "Please note that disabling essential cookies will affect the functionality of the website. You may not be able to log in, save preferences, or use certain features if essential cookies are blocked.",
      },
      {
        sub: "6.3 App Preferences",
        body: "Within the NeuroTrack mobile app, you can clear locally stored preferences at any time from Profile → Settings → Clear App Data.",
      },
    ],
  },
  {
    id: "changes",
    title: "7. Changes to This Policy",
    content: [
      {
        sub: "",
        body: "We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our practices. We will update the 'Last Updated' date at the top of this page when we do. We encourage you to review this page periodically.",
      },
    ],
  },
  {
    id: "contact",
    title: "8. Contact Us",
    content: [
      {
        sub: "",
        body: "If you have questions about our use of cookies or other tracking technologies, please contact us at helpdesk.neurotrack@gmail.com.",
      },
    ],
  },
];

const CookiePolicyPage = () => {
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
          style={{ width: 380, height: 380, top: "-150px", left: "-60px" }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: "var(--text-muted)",
              textDecoration: "none",
              fontSize: 13,
              fontWeight: 600,
              marginBottom: 28,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                "var(--text-muted)")
            }
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>

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
            <Cookie size={12} /> Cookie Policy
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              marginBottom: 12,
            }}
          >
            Cookie <span className="gradient-text">Policy</span>
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
            We use cookies only where necessary. No advertising cookies. No
            third-party tracking. Here's exactly what we use and why.
          </p>
          <p style={{ fontSize: 13, color: "var(--text-muted)" }}>
            Last updated: <strong>{LAST_UPDATED}</strong>
          </p>
        </div>
      </section>

      {/* ── BODY ── */}
      <section style={{ padding: "64px 0 96px" }}>
        <div className="container policy-grid">
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
              <Link
                to="/terms-and-condition"
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

            {/* Quick reference table */}
            <div
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-card)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                marginBottom: 32,
              }}
            >
              <div
                style={{
                  padding: "16px 24px",
                  borderBottom: "1px solid var(--border-subtle)",
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                  color: "var(--text-muted)",
                }}
              >
                Cookie Quick Reference
              </div>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "0.875rem",
                }}
              >
                <thead>
                  <tr style={{ background: "var(--bg-surface)" }}>
                    {["Name / Key", "Type", "Purpose", "Expires"].map((h) => (
                      <th
                        key={h}
                        style={{
                          padding: "10px 16px",
                          textAlign: "left",
                          fontWeight: 700,
                          color: "var(--text-muted)",
                          fontSize: 12,
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "nt-session",
                      type: "Essential",
                      purpose: "Keeps you logged in",
                      exp: "Session",
                    },
                    {
                      name: "nt-csrf",
                      type: "Essential",
                      purpose: "CSRF security token",
                      exp: "Session",
                    },
                    {
                      name: "nt-theme",
                      type: "Preference",
                      purpose: "Stores dark/light mode choice",
                      exp: "12 months",
                    },
                    {
                      name: "_ga / _gid",
                      type: "Analytics",
                      purpose: "Google Analytics (anonymised)",
                      exp: "2 years / 24h",
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.name}
                      style={{
                        borderTop: "1px solid var(--border-subtle)",
                        background:
                          i % 2 === 0 ? "transparent" : "var(--bg-surface)",
                      }}
                    >
                      <td
                        style={{
                          padding: "10px 16px",
                          fontFamily: "var(--font-mono)",
                          fontSize: 12,
                          color: "var(--primary-light)",
                        }}
                      >
                        {row.name}
                      </td>
                      <td
                        style={{
                          padding: "10px 16px",
                          color: "var(--text-secondary)",
                        }}
                      >
                        {row.type}
                      </td>
                      <td
                        style={{
                          padding: "10px 16px",
                          color: "var(--text-secondary)",
                        }}
                      >
                        {row.purpose}
                      </td>
                      <td
                        style={{
                          padding: "10px 16px",
                          color: "var(--text-muted)",
                        }}
                      >
                        {row.exp}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

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
                  Questions?
                </strong>{" "}
                Email us at{" "}
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
        @media (max-width: 768px) { .legal-toc { display: none !important; } }
      `}</style>
    </main>
  );
};

export default CookiePolicyPage;
