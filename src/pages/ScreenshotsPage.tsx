import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Smartphone } from "lucide-react";
import { APP_SCREENS } from "../data/screenshotData";

/**
 * ScreenshotsPage
 * Clean, minimal gallery — just a sticky header + one horizontal
 * scroll strip of the real app screenshots, nothing else.
 */
const ScreenshotsPage: React.FC = () => (
  <main
    style={{
      background: "var(--bg-base)",
      minHeight: "100vh",
      paddingTop: "90px",
      overflowX: "hidden",
    }}
  >
    {/* ── HEADER ── */}
    <section
      style={{
        position: "relative",
        padding: "64px 0 48px",
        overflow: "hidden",
        borderBottom: "1px solid var(--border-subtle)",
        textAlign: "center",
      }}
    >
      {/* Ambient orbs */}
      <div
        className="orb orb-primary"
        style={{ width: 480, height: 480, top: "-220px", left: "-80px" }}
      />
      <div
        className="orb orb-accent"
        style={{ width: 320, height: 320, top: "-120px", right: "-60px" }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Back link */}
        
        {/* Badge */}
        <div className="badge badge-accent" style={{ marginBottom: "20px" }}>
          <Smartphone size={12} /> App Gallery
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
            fontWeight: 900,
            color: "var(--text-primary)",
            marginBottom: "14px",
          }}
        >
          See NeuroTrack <span className="gradient-text">In Action</span>
        </h1>

        <p
          style={{
            fontSize: "1.05rem",
            color: "var(--text-secondary)",
            maxWidth: 460,
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Real screens from the app — scroll to explore every feature.
        </p>
      </div>
    </section>

    {/* ── HORIZONTAL SCROLL GALLERY ── */}
    <section style={{ padding: "60px 0 80px" }}>
      {/* Scroll track */}
      <div
        style={{
          overflowX: "auto",
          overflowY: "visible",
          paddingLeft: "max(32px, calc((100vw - 1200px) / 2))",
          paddingRight: "max(32px, calc((100vw - 1200px) / 2))",
          paddingBottom: "24px",
          paddingTop: "20px",
          /* hide scrollbar but keep scroll */
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          display: "flex",
          gap: "28px",
          alignItems: "flex-end",
        }}
        /* hide webkit scrollbar */
        className="screenshot-scroll"
      >
        {APP_SCREENS.map((screen) => (
          <div
            key={screen.id}
            style={{
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
              transition: "transform 0.35s ease",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.transform =
                "translateY(-12px)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.transform =
                "translateY(0)")
            }
          >
            {/* Phone image */}
            <div
              style={{
                width: 220,
                borderRadius: "36px",
                overflow: "hidden",
                border: "2px solid rgba(108,59,255,0.3)",
                boxShadow:
                  "0 20px 60px rgba(0,0,0,0.5), 0 0 0 6px rgba(108,59,255,0.08)",
                transition: "box-shadow 0.35s ease, border-color 0.35s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow =
                  "0 32px 90px rgba(108,59,255,0.45), 0 0 0 6px rgba(108,59,255,0.2)";
                el.style.borderColor = "rgba(108,59,255,0.7)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow =
                  "0 20px 60px rgba(0,0,0,0.5), 0 0 0 6px rgba(108,59,255,0.08)";
                el.style.borderColor = "rgba(108,59,255,0.3)";
              }}
            >
              <img
                src={screen.src}
                alt={screen.label}
                draggable={false}
                style={{ width: "100%", display: "block", userSelect: "none" }}
                loading="lazy"
              />
            </div>

            {/* Label */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  display: "inline-block",
                  padding: "3px 12px",
                  borderRadius: "var(--radius-full)",
                  fontSize: "10px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                  background: `${screen.tagColor}18`,
                  border: `1px solid ${screen.tagColor}40`,
                  color: screen.tagColor,
                  marginBottom: "6px",
                }}
              >
                {screen.tag}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "var(--text-secondary)",
                }}
              >
                {screen.label}
              </div>
            </div>
          </div>
        ))}
      </div>
        </section>

    {/* Hide webkit scrollbar globally for the track */}
    <style>{`
      .screenshot-scroll::-webkit-scrollbar { display: none; }
    `}</style>
  </main>
);

export default ScreenshotsPage;
