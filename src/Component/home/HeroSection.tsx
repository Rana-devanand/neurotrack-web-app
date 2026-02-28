import React from "react";
import { Download, Play, Shield, Sparkles } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

const scrollTo = (id: string) => {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
};

const TRUST_BADGES = [
  { icon: Shield, label: "100% Private" },
];

/**
 * HeroSection
 * Full-viewport hero with headline, description, CTA buttons,
 * trust badges, and the PhoneMockup floating animation.
 */
const HeroSection: React.FC = () => (
  <section
    id="hero"
    className="bg-grid"
    style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      paddingTop: "90px",
      overflow: "hidden",
    }}
  >
    {/* Ambient orbs */}
    <div
      className="orb orb-primary"
      style={{ width: 600, height: 600, top: "-100px", left: "-200px" }}
    />
    <div
      className="orb orb-accent"
      style={{ width: 400, height: 400, bottom: "-80px", right: "-100px" }}
    />

    <div className="container" style={{ position: "relative", zIndex: 1 }}>
      <div className="hero-grid">
        {/* ── Left: Copy ── */}
        <div style={{ maxWidth: 620 }}>
          {/* Badge */}
          <div className="badge" style={{ marginBottom: "24px" }}>
            <Sparkles size={12} />
            AI-Powered Focus &amp; Productivity
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: "24px",
              color: "var(--text-primary)",
            }}
          >
            Train Your Brain.
            <br />
            <span className="gradient-text">Master Focus.</span>
            <br />
            Achieve More.
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.18rem)",
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              marginBottom: "40px",
              maxWidth: 520,
            }}
          >
            NeuroTrack is the AI-powered mobile app that decodes your brain's
            unique focus patterns, helps you build elite-level productivity
            habits, and turns your daily grind into peak performance — one
            session at a time.
          </p>

          {/* CTA buttons */}
          <div
            className="hero-ctas"
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              marginBottom: "56px",
            }}
          >
            <a
              href="#download"
              id="hero-download-btn"
              className="btn-primary"
              style={{ fontSize: "16px", padding: "16px 36px" }}
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#download");
              }}
            >
              <Download size={18} />
              Download for Free
            </a>
            <a
              href="#how-it-works"
              className="btn-outline"
              style={{ fontSize: "16px", padding: "15px 32px" }}
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#how-it-works");
              }}
            >
              <Play size={16} />
              See How It Works
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="hero-badges"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
              flexWrap: "wrap",
            }}
          >
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                style={{ display: "flex", alignItems: "center", gap: "7px" }}
              >
                <Icon size={14} style={{ color: "var(--accent)" }} />
                <span
                  style={{
                    fontSize: "13px",
                    color: "var(--text-muted)",
                    fontWeight: 600,
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Phone ── */}
        <div
          className="hero-phone"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <PhoneMockup />
        </div>
      </div>
    </div>

    {/* Bottom fade into next section */}
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "120px",
        background: "linear-gradient(to bottom, transparent, var(--bg-base))",
      }}
    />
  </section>
);

export default HeroSection;
