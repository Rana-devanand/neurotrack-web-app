import React from "react";
import { Link } from "react-router-dom";
import {
  Zap,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  ArrowUpRight,
  Heart,
  Smartphone,
} from "lucide-react";

const FOOTER_LINKS = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Download App", href: "#download" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "Careers", href: "#careers" },
    { label: "Press Kit", href: "#press" },
    { label: "Contact", href: "#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Use", href: "#terms" },
    { label: "Cookie Policy", href: "#cookies" },
    { label: "Refund Policy", href: "#refund" },
  ],
};

const SOCIAL_LINKS = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
];

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer
      id="footer"
      style={{
        background: "#050510",
        borderTop: "1px solid rgba(108, 59, 255, 0.2)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(108,59,255,0.6), rgba(0,212,200,0.5), transparent)",
        }}
      />

      {/* Newsletter strip */}
      <div
        style={{
          borderBottom: "1px solid rgba(108, 59, 255, 0.12)",
        }}
      >
        <div className="container" style={{ padding: "52px 24px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "32px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  marginBottom: "6px",
                }}
              >
                Stay in the <span className="gradient-text">Focus Loop</span>
              </h3>
              <p style={{ fontSize: "14px", color: "var(--text-muted)" }}>
                Get productivity tips, app updates, and focus science straight
                to your inbox.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
            >
              <input
                id="newsletter-email"
                type="email"
                placeholder="you@example.com"
                style={{
                  padding: "13px 20px",
                  borderRadius: "var(--radius-full)",
                  background: "var(--bg-surface)",
                  border: "1.5px solid var(--border-card)",
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  outline: "none",
                  minWidth: "240px",
                  transition: "border-color 0.25s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                onBlur={(e) =>
                  (e.target.style.borderColor = "var(--border-card)")
                }
              />
              <button
                id="newsletter-submit"
                type="submit"
                className="btn-primary"
                style={{ padding: "13px 28px" }}
              >
                <Mail size={16} />
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container" style={{ padding: "64px 24px 48px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "48px",
            marginBottom: "56px",
          }}
        >
          {/* Brand column */}
          <div>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "11px",
                  background: "linear-gradient(135deg, #6C3BFF, #00D4C8)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 20px rgba(108,59,255,0.45)",
                }}
              >
                <Zap size={20} color="#fff" fill="#fff" />
              </div>
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                }}
              >
                <span className="gradient-text">Neuro</span>
                <span style={{ color: "var(--text-primary)" }}>Track</span>
              </span>
            </Link>

            <p
              style={{
                fontSize: "14px",
                color: "var(--text-muted)",
                lineHeight: 1.75,
                maxWidth: 280,
                marginBottom: "28px",
              }}
            >
              NeuroTrack is an AI-powered focus & productivity app that helps
              you decode your brain's performance patterns and unlock your peak
              potential.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "10px" }}>
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "10px",
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--primary)";
                    el.style.color = "var(--accent)";
                    el.style.background = "rgba(108,59,255,0.15)";
                    el.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--border-subtle)";
                    el.style.color = "var(--text-muted)";
                    el.style.background = "var(--bg-surface)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            {/* App badges */}
            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "24px",
                flexWrap: "wrap",
              }}
            >
              {[{ label: "Google Play", icon: Smartphone }].map(
                ({ label, icon: Icon }) => (
                  <a
                    key={label}
                    href="#download"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo("#download");
                    }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "9px 16px",
                      background: "var(--bg-surface)",
                      border: "1px solid var(--border-card)",
                      borderRadius: "10px",
                      color: "var(--text-secondary)",
                      fontSize: "12px",
                      fontWeight: 600,
                      textDecoration: "none",
                      transition: "border-color 0.25s, color 0.25s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "var(--primary)";
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "var(--border-card)";
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--text-secondary)";
                    }}
                  >
                    <Icon size={14} />
                    {label}
                    <ArrowUpRight size={12} />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "20px",
                }}
              >
                {heading}
              </div>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      onClick={(e) => {
                        if (href.startsWith("#")) {
                          e.preventDefault();
                          scrollTo(href);
                        }
                      }}
                      style={{
                        color: "var(--text-muted)",
                        textDecoration: "none",
                        fontSize: "14px",
                        fontWeight: 500,
                        transition: "color 0.2s",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--accent)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--text-muted)")
                      }
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(108,59,255,0.12)",
            marginBottom: "28px",
          }}
        />

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div style={{ fontSize: "13px", color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} NeuroTrack. All rights reserved.
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "13px",
              color: "var(--text-muted)",
            }}
          >
            <span>Made with</span>
            <Heart size={13} style={{ color: "#FF4470", fill: "#FF4470" }} />
            <span>for peak performers worldwide</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "13px",
              color: "var(--text-muted)",
            }}
          >
            <MapPin size={12} style={{ color: "var(--accent)" }} />
            <span>India 🇮🇳</span>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div
        style={{
          height: "3px",
          background:
            "linear-gradient(90deg, transparent, var(--primary), var(--accent), transparent)",
        }}
      />

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          #footer .container > div:first-of-type {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 540px) {
          #footer .container > div:first-of-type {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
