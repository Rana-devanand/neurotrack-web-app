import React, { useState, useEffect } from "react";

/**
 * PhoneMockup
 * An inline SVG-style phone UI showing a NeuroTrack focus dashboard.
 * Kept as a pure presentational component with no props / state.
 */
const PhoneMockup: React.FC = () => {
  const [greeting, setGreeting] = useState("Good morning");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  return (
    <div className="animate-float" style={{ position: "relative" }}>
      {/* Ambient glow behind the phone */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "-40px",
          background:
            "radial-gradient(ellipse at center, rgba(108,59,255,0.35) 0%, rgba(0,212,200,0.15) 55%, transparent 75%)",
          borderRadius: "50%",
          filter: "blur(30px)",
          zIndex: 0,
        }}
      />

      <div className="phone-frame" style={{ position: "relative", zIndex: 1 }}>
        {/* Notch */}
        <div className="phone-notch" />

        <div className="phone-screen-content">
          {/* Status bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "10px",
              color: "var(--text-muted)",
              marginBottom: "14px",
            }}
          >
            <span>9:41</span>
            <span>●●●●</span>
          </div>

          {/* Greeting */}
          <div style={{ marginBottom: "16px" }}>
            <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>
              {greeting} 👋
            </div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: 800,
                color: "var(--text-primary)",
              }}
            >
              Your Focus Score
            </div>
          </div>

          {/* Circular score ring */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                width: 90,
                height: 90,
                borderRadius: "50%",
                background:
                  "conic-gradient(#6C3BFF 0% 78%, rgba(108,59,255,0.15) 78% 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 30px rgba(108,59,255,0.5)",
              }}
            >
              <div
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  background: "var(--bg-card)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "22px",
                    fontWeight: 900,
                    color: "#6C3BFF",
                  }}
                >
                  78
                </span>
                <span style={{ fontSize: "9px", color: "var(--text-muted)" }}>
                  / 100
                </span>
              </div>
            </div>
          </div>

          {/* Mini stats grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8px",
              marginBottom: "14px",
            }}
          >
            {[
              { l: "Focus Time", v: "4h 22m", c: "#6C3BFF" },
              { l: "Sessions", v: "6 today", c: "#00D4C8" },
              { l: "Streak", v: "12 days 🔥", c: "#00D4C8" },
              { l: "Deep Work", v: "2h 10m", c: "#6C3BFF" },
            ].map((s) => (
              <div
                key={s.l}
                style={{
                  background: "var(--bg-surface)",
                  borderRadius: "10px",
                  padding: "9px",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div
                  style={{
                    fontSize: "9px",
                    color: "var(--text-muted)",
                    marginBottom: "3px",
                  }}
                >
                  {s.l}
                </div>
                <div style={{ fontSize: "12px", fontWeight: 700, color: s.c }}>
                  {s.v}
                </div>
              </div>
            ))}
          </div>

          {/* AI Insight chip */}
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(108,59,255,0.2), rgba(0,212,200,0.15))",
              border: "1px solid rgba(108,59,255,0.3)",
              borderRadius: "12px",
              padding: "10px",
            }}
          >
            <div
              style={{
                fontSize: "9px",
                color: "var(--accent)",
                fontWeight: 600,
                marginBottom: "4px",
              }}
            >
              ⚡ AI Insight
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "var(--text-secondary)",
                lineHeight: 1.5,
              }}
            >
              Your peak focus is 9–11 AM. Start your hardest task now!
            </div>
          </div>

          {/* Weekly bar chart */}
          <div style={{ marginTop: "14px" }}>
            <div
              style={{
                fontSize: "9px",
                color: "var(--text-muted)",
                marginBottom: "6px",
              }}
            >
              Weekly Focus
            </div>
            <div
              style={{
                display: "flex",
                gap: "5px",
                alignItems: "flex-end",
                height: "36px",
              }}
            >
              {[40, 65, 50, 80, 72, 60, 78].map((h, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: `${h}%`,
                    borderRadius: "3px",
                    background:
                      i === 6
                        ? "linear-gradient(180deg, #6C3BFF, #00D4C8)"
                        : "rgba(108,59,255,0.3)",
                  }}
                />
              ))}
            </div>
            <div style={{ display: "flex", gap: "5px", marginTop: "3px" }}>
              {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    textAlign: "center",
                    fontSize: "8px",
                    color: i === 6 ? "var(--accent)" : "var(--text-muted)",
                  }}
                >
                  {d}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
