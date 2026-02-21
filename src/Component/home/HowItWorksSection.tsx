import React from "react";
import { Cpu } from "lucide-react";
import { HOW_IT_WORKS } from "../../data/homeData";

/**
 * HowItWorksSection
 * 4-step horizontal timeline showing the NeuroTrack user journey.
 */
const HowItWorksSection: React.FC = () => (
  <section id="how-it-works" className="section">
    <div className="container">
      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <div className="badge badge-accent" style={{ marginBottom: "16px" }}>
          <Cpu size={12} /> How It Works
        </div>
        <h2
          style={{
            fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
            color: "var(--text-primary)",
            marginBottom: "16px",
          }}
        >
          From Setup to <span className="gradient-text">Peak Performance</span>
        </h2>
        <p
          style={{
            fontSize: "1.05rem",
            color: "var(--text-secondary)",
            maxWidth: 480,
            margin: "0 auto",
          }}
        >
          Four intelligent steps — and you're performing like a top 1% achiever.
        </p>
      </div>

      {/* Steps grid */}
      <div style={{ position: "relative" }}>
        {/* Horizontal connector line */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "52px",
            left: "calc(12.5% + 24px)",
            right: "calc(12.5% + 24px)",
            height: "2px",
            background: "linear-gradient(90deg, var(--primary), var(--accent))",
            opacity: 0.35,
            zIndex: 0,
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {HOW_IT_WORKS.map(({ step, icon: Icon, title, desc }) => (
            <div key={step} style={{ textAlign: "center" }}>
              {/* Icon circle with step badge */}
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "22px",
                  background:
                    "linear-gradient(135deg, var(--primary), var(--primary-light))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  boxShadow: "0 12px 40px var(--primary-glow)",
                  position: "relative",
                }}
              >
                <Icon size={30} color="#fff" />
                {/* Step number badge */}
                <span
                  style={{
                    position: "absolute",
                    top: -8,
                    right: -8,
                    background: "var(--accent)",
                    color: "var(--bg-base)",
                    fontSize: "10px",
                    fontWeight: 800,
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {step}
                </span>
              </div>

              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "10px",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
