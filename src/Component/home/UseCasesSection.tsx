import React, { useState } from "react";
import { Layers, CheckCircle2, Download } from "lucide-react";
import { USE_CASES } from "../../data/homeData";

/**
 * UseCasesSection
 * Tabbed panel showcasing how NeuroTrack serves 4 different personas.
 * Local state `activeId` drives which use-case panel is shown.
 */
const UseCasesSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("professionals");
  const active = USE_CASES.find((u) => u.id === activeId)!;
  const ActiveIcon = active.icon;

  return (
    <section
      id="use-cases"
      className="section"
      style={{
        background: "var(--bg-card)",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div className="container">
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="badge" style={{ marginBottom: "16px" }}>
            <Layers size={12} /> Use Cases
          </div>
          <h2
            style={{
              fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
              color: "var(--text-primary)",
              marginBottom: "16px",
            }}
          >
            Built for <span className="gradient-text">Every Achiever</span>
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              maxWidth: 480,
              margin: "0 auto",
            }}
          >
            NeuroTrack adapts to your lifestyle — whether you're closing deals,
            cramming for exams, or training for a championship.
          </p>
        </div>

        {/* Tab row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "48px",
          }}
        >
          {USE_CASES.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              id={`use-case-tab-${id}`}
              className={`use-tab ${activeId === id ? "active" : ""}`}
              onClick={() => setActiveId(id)}
            >
              <Icon
                size={14}
                style={{
                  display: "inline",
                  verticalAlign: "middle",
                  marginRight: 6,
                }}
              />
              {label}
            </button>
          ))}
        </div>

        {/* Active panel */}
        <div className="use-cases-panel">
          {/* Left — headline + description + CTA */}
          <div>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "18px",
                background:
                  "linear-gradient(135deg, rgba(108,59,255,0.25), rgba(0,212,200,0.15))",
                border: "1.5px solid rgba(108,59,255,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "24px",
              }}
            >
              <ActiveIcon size={30} style={{ color: "var(--primary-light)" }} />
            </div>

            <h3
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                fontWeight: 800,
                color: "var(--text-primary)",
                marginBottom: "14px",
              }}
            >
              {active.headline}
            </h3>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                marginBottom: "28px",
              }}
            >
              {active.desc}
            </p>

            <div
              className="btn-primary"
              style={{ display: "inline-flex", cursor: "default" }}
            >
              <Download size={17} />
              Get Started Free
            </div>
          </div>

          {/* Right — capability list + stat callout */}
          <div>
            {/* Capability list */}
            <div
              style={{
                background: "var(--bg-card)",
                borderRadius: "var(--radius-lg)",
                padding: "28px",
                border: "1px solid var(--border-card)",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  color: "var(--text-muted)",
                  fontWeight: 600,
                  marginBottom: "16px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Key Capabilities
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {active.points.map((pt) => (
                  <div
                    key={pt}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                    }}
                  >
                    <CheckCircle2
                      size={16}
                      style={{
                        color: "var(--accent)",
                        marginTop: 2,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: "0.92rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.6,
                      }}
                    >
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stat callout */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(108,59,255,0.18), rgba(0,212,200,0.1))",
                border: "1.5px solid rgba(108,59,255,0.3)",
                borderRadius: "var(--radius-lg)",
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div>
                <div className="stat-number" style={{ fontSize: "2.2rem" }}>
                  {active.stat}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "var(--text-muted)",
                    fontWeight: 600,
                  }}
                >
                  {active.statLabel}
                </div>
              </div>

              <div
                style={{
                  width: "1px",
                  height: "48px",
                  background: "var(--border-card)",
                }}
              />

              <div
                style={{
                  fontSize: "12.5px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                }}
              >
                Based on data from 250K+ active NeuroTrack users surveyed in
                2025.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
