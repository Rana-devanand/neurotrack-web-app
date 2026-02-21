import React from "react";
import { Zap } from "lucide-react";
import { FEATURES } from "../../data/homeData";

/**
 * FeaturesSection
 * 8-card responsive grid showcasing all core app features.
 */
const FeaturesSection: React.FC = () => (
  <section id="features" className="section">
    <div className="container">
      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <div className="badge badge-accent" style={{ marginBottom: "16px" }}>
          <Zap size={12} /> Core Features
        </div>
        <h2
          style={{
            fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
            color: "var(--text-primary)",
            marginBottom: "16px",
          }}
        >
          Everything You Need to{" "}
          <span className="gradient-text">Perform at Peak</span>
        </h2>
        <p
          style={{
            fontSize: "1.05rem",
            color: "var(--text-secondary)",
            maxWidth: 520,
            margin: "0 auto",
          }}
        >
          A complete focus operating system built for the modern brain —
          intelligent, adaptive, and beautifully simple.
        </p>
      </div>

      {/* Cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
          gap: "20px",
        }}
      >
        {FEATURES.map(({ icon: Icon, title, desc, accent }) => (
          <article key={title} className="card" style={{ padding: "30px" }}>
            {/* Icon box */}
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: "14px",
                background: `${accent}22`,
                border: `1px solid ${accent}44`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <Icon size={24} style={{ color: accent }} />
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
                fontSize: "0.9rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
              }}
            >
              {desc}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
