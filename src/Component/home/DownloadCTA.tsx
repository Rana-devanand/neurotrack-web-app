import React from "react";
import { Download, CheckCircle2, Smartphone, Apple } from "lucide-react";

const TRUST_BULLETS = [
  "Free to download",
  "No ads",
  "Cancel anytime",
  "Your data stays private",
];

/**
 * DownloadCTA
 * Full-width download call-to-action with Play Store & App Store buttons.
 */
const DownloadCTA: React.FC = () => (
  <section
    id="download"
    className="section"
    style={{ position: "relative", overflow: "hidden" }}
  >
    {/* Ambient orb */}
    <div
      className="orb orb-primary"
      style={{
        width: 500,
        height: 500,
        top: "-150px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    />

    <div
      className="container"
      style={{ position: "relative", zIndex: 1, textAlign: "center" }}
    >
      {/* Badge */}
      <div className="badge badge-accent" style={{ marginBottom: "24px" }}>
        <Download size={12} /> Get the App
      </div>

      {/* Headline */}
      <h2
        style={{
          fontSize: "clamp(2rem, 4vw, 3.2rem)",
          fontWeight: 900,
          color: "var(--text-primary)",
          marginBottom: "16px",
        }}
      >
        Your Peak Performance{" "}
        <span className="gradient-text">Starts Today</span>
      </h2>

      {/* Subtext */}
      <p
        style={{
          fontSize: "1.1rem",
          color: "var(--text-secondary)",
          maxWidth: 480,
          margin: "0 auto 40px",
        }}
      >
        Download NeuroTrack free. No credit card required. Start your
        transformation in under 3 minutes.
      </p>

      {/* Download buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
     
        <a
          href="#"
          id="download-appstore-btn"
          className="btn-outline"
          style={{ fontSize: "16px", padding: "15px 32px" }}
        >
         <Smartphone size={20} />
          Google Play Store
        </a>
      </div>

      {/* Trust bullets */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "32px",
          marginTop: "48px",
          flexWrap: "wrap",
        }}
      >
        {TRUST_BULLETS.map((t) => (
          <div
            key={t}
            style={{ display: "flex", alignItems: "center", gap: "7px" }}
          >
            <CheckCircle2 size={14} style={{ color: "var(--accent)" }} />
            <span
              style={{
                fontSize: "13px",
                color: "var(--text-muted)",
                fontWeight: 500,
              }}
            >
              {t}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DownloadCTA;
