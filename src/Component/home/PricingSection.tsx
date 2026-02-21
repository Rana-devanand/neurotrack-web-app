import React from "react";
import { Star, CheckCircle2, ArrowRight } from "lucide-react";
import { PRICING } from "../../data/homeData";

/**
 * PricingSection
 * Three-column pricing cards: Free, Pro (highlighted), and Team.
 */
const PricingSection: React.FC = () => (
  <section
    id="pricing"
    className="section"
    style={{
      background: "var(--bg-card)",
      borderTop: "1px solid var(--border-subtle)",
    }}
  >
    <div className="container">
      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <div className="badge" style={{ marginBottom: "16px" }}>
          <Star size={12} /> Pricing
        </div>
        <h2
          style={{
            fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
            color: "var(--text-primary)",
            marginBottom: "16px",
          }}
        >
          Simple, <span className="gradient-text">Transparent Pricing</span>
        </h2>
        <p
          style={{
            fontSize: "1.05rem",
            color: "var(--text-secondary)",
            maxWidth: 420,
            margin: "0 auto",
          }}
        >
          Start for free. Upgrade when you're ready to unlock your full
          potential.
        </p>
      </div>

      {/* Cards */}
      <div className="pricing-grid">
        {PRICING.map(
          ({ name, price, period, desc, features, cta, highlighted }) => (
            <div
              key={name}
              className={highlighted ? "pricing-card-featured" : ""}
              style={{
                background: highlighted
                  ? "linear-gradient(160deg, rgba(108,59,255,0.25) 0%, rgba(0,212,200,0.12) 100%)"
                  : "var(--bg-surface)",
                border: highlighted
                  ? "1.5px solid rgba(108,59,255,0.6)"
                  : "1px solid var(--border-card)",
                borderRadius: "var(--radius-xl)",
                padding: "36px 28px",
                position: "relative",
                boxShadow: highlighted
                  ? "0 30px 80px rgba(108,59,255,0.25)"
                  : "none",
                transform: highlighted ? "scale(1.04)" : "none",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
            >
              {/* "Most Popular" pill */}
              {highlighted && (
                <div
                  style={{
                    position: "absolute",
                    top: -14,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background:
                      "linear-gradient(90deg, var(--primary), var(--accent))",
                    color: "#fff",
                    fontSize: "11px",
                    fontWeight: 700,
                    padding: "5px 18px",
                    borderRadius: "var(--radius-full)",
                    letterSpacing: "0.06em",
                    whiteSpace: "nowrap",
                  }}
                >
                  MOST POPULAR
                </div>
              )}

              {/* Plan header */}
              <div style={{ marginBottom: "24px" }}>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "var(--text-muted)",
                    marginBottom: "6px",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {name}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "4px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "2.6rem",
                      fontWeight: 900,
                      color: highlighted
                        ? "var(--primary-light)"
                        : "var(--text-primary)",
                    }}
                  >
                    {price}
                  </span>
                  <span
                    style={{ fontSize: "14px", color: "var(--text-muted)" }}
                  >
                    {period}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "var(--text-muted)",
                    marginTop: "4px",
                  }}
                >
                  {desc}
                </div>
              </div>

              {/* Feature list */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginBottom: "28px",
                }}
              >
                {features.map((f) => (
                  <div
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <CheckCircle2
                      size={14}
                      style={{
                        color: highlighted ? "var(--accent)" : "var(--primary)",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: "13.5px",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA button */}
              {highlighted ? (
                <a
                  href="#download"
                  className="btn-primary"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                >
                  {cta} <ArrowRight size={16} />
                </a>
              ) : (
                <a
                  href="#download"
                  className="btn-outline"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                >
                  {cta}
                </a>
              )}
            </div>
          ),
        )}
      </div>
    </div>
  </section>
);

export default PricingSection;
