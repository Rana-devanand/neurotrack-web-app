import React from "react";
import { STATS } from "../../data/homeData";

/**
 * StatsBar
 * A horizontal grid of 4 key metric tiles rendered just below the hero.
 */
const StatsBar: React.FC = () => (
  <section id="stats" style={{ padding: "0 0 80px" }}>
    <div className="container">
      <div className="stats-grid">
        {STATS.map(({ value, label, icon: Icon }) => (
          <div
            key={label}
            style={{
              background: "var(--bg-card)",
              padding: "36px 24px",
              textAlign: "center",
              transition: "background 0.25s",
              cursor: "default",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background =
                "var(--bg-surface)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background =
                "var(--bg-card)")
            }
          >
            {/* Icon pill */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "12px",
                  background: "rgba(108,59,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon size={20} style={{ color: "var(--accent)" }} />
              </div>
            </div>

            {/* Number */}
            <div className="stat-number">{value}</div>

            {/* Label */}
            <div
              style={{
                fontSize: "13px",
                color: "var(--text-muted)",
                marginTop: "4px",
                fontWeight: 500,
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBar;
