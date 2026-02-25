import React from "react";
import { ShieldCheck, Lock, Eye, CheckCircle } from "lucide-react";

/**
 * DataTransparencySection
 * Section dedicated to explaining how and why user data is collected,
 * specifically to satisfy Google verification requirements.
 */
const DataTransparencySection: React.FC = () => (
  <section
    id="data-transparency"
    className="section"
    style={{ background: "var(--bg-surface)" }}
  >
    <div className="container">
      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <div
          className="badge badge-primary"
          style={{
            marginBottom: "16px",
            background: "rgba(108, 59, 255, 0.1)",
            color: "#6C3BFF",
          }}
        >
          <ShieldCheck size={12} /> Privacy First
        </div>
        <h2
          style={{
            fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
            color: "var(--text-primary)",
            marginBottom: "16px",
          }}
        >
          Your Data, <span className="gradient-text">Fully Protected</span>
        </h2>
        <p
          style={{
            fontSize: "1.05rem",
            color: "var(--text-secondary)",
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          At NeuroTrack, we strictly adhere to Google's rigorous user data
          policies. We believe in absolute transparency about what we collect,
          why we need it, and how we protect it.
        </p>
      </div>

      {/* Cards container */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "24px",
          marginBottom: "48px",
        }}
      >
        {/* Why we request data card */}
        <article
          className="card"
          style={{ padding: "30px", borderTop: "3px solid #6C3BFF" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "16px",
            }}
          >
            <Eye size={24} color="#6C3BFF" />
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "var(--text-primary)",
              }}
            >
              Why We Request Your Data
            </h3>
          </div>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              marginBottom: "16px",
            }}
          >
            NeuroTrack requests minimal user data strictly to provide core
            functionalities to you. We only collect data that directly benefits
            your productivity experience:
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <li
              style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
            >
              <CheckCircle
                size={16}
                color="#6C3BFF"
                style={{ marginTop: "3px" }}
              />
              <div
                style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}
              >
                <strong style={{ color: "var(--text-primary)" }}>
                  Core App Functionality:
                </strong>{" "}
                Used for creating your account, facilitating secure login, and
                syncing your preferences across devices.
              </div>
            </li>
            <li
              style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
            >
              <CheckCircle
                size={16}
                color="#6C3BFF"
                style={{ marginTop: "3px" }}
              />
              <div
                style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}
              >
                <strong style={{ color: "var(--text-primary)" }}>
                  AI Insights & Analytics:
                </strong>{" "}
                Your usage statistics and focus session durations are analyzed
                to calculate focus streaks and identify your peak performance
                periods.
              </div>
            </li>
            <li
              style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
            >
              <CheckCircle
                size={16}
                color="#6C3BFF"
                style={{ marginTop: "3px" }}
              />
              <div
                style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}
              >
                <strong style={{ color: "var(--text-primary)" }}>
                  Calendar Integration:
                </strong>{" "}
                Needed only to sync your events with NeuroTrack so you can block
                out focus time seamlessly.
              </div>
            </li>
          </ul>
        </article>

        {/* How we protect it card */}
        <article
          className="card"
          style={{ padding: "30px", borderTop: "3px solid #00D4C8" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "16px",
            }}
          >
            <Lock size={24} color="#00D4C8" />
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "var(--text-primary)",
              }}
            >
              How We Protect It
            </h3>
          </div>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              marginBottom: "16px",
            }}
          >
            Your data is yours. We implement industry-leading security measures
            to ensure your information remains confidential and completely under
            your control:
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <li
              style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
            >
              <CheckCircle
                size={16}
                color="#00D4C8"
                style={{ marginTop: "3px" }}
              />
              <div
                style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}
              >
                <strong style={{ color: "var(--text-primary)" }}>
                  End-to-End Encryption:
                </strong>{" "}
                All sensitive data is encrypted dynamically in transit and
                securely at rest.
              </div>
            </li>
            <li
              style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
            >
              <CheckCircle
                size={16}
                color="#00D4C8"
                style={{ marginTop: "3px" }}
              />
              <div
                style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}
              >
                <strong style={{ color: "var(--text-primary)" }}>
                  Zero Third-Party Selling:
                </strong>{" "}
                We never sell, share, or broker your personal information. Our
                business model relies purely on protecting your focus, not
                exploiting your data.
              </div>
            </li>
            <li
              style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
            >
              <CheckCircle
                size={16}
                color="#00D4C8"
                style={{ marginTop: "3px" }}
              />
              <div
                style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}
              >
                <strong style={{ color: "var(--text-primary)" }}>
                  Complete Data Control:
                </strong>{" "}
                Built with privacy-by-design, you can instantly request complete
                account deletion or export your data at any time via your
                settings.
              </div>
            </li>
          </ul>
        </article>
      </div>

      {/* Privacy Policy Link */}
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            fontSize: "1rem",
            color: "var(--text-secondary)",
            marginBottom: "16px",
          }}
        >
          For complete transparency, please review our detailed policies.
        </p>
        <a
          href="/privacy-policy"
          className="btn-primary"
          style={{
            display: "inline-flex",
            textDecoration: "none",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Read Our Privacy Policy
        </a>
      </div>
    </div>
  </section>
);

export default DataTransparencySection;
