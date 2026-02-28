import React, { useState } from "react";
import { Zap, Send, CheckCircle } from "lucide-react";

const TesterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const apiUrl = import.meta.env.VITE_BE_URL || "http://localhost:8000/api";
      const response = await fetch(`${apiUrl}/testers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit information. Please try again.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--bg-base)",
          padding: "20px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            maxWidth: "500px",
            padding: "48px",
            background: "var(--bg-surface)",
            borderRadius: "24px",
            border: "1px solid var(--border-card)",
            boxShadow: "0 20px 40px rgba(108,59,255,0.1)",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              background: "rgba(0, 212, 200, 0.1)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
            }}
          >
            <CheckCircle size={40} color="#00D4C8" />
          </div>
          <h1
            style={{
              fontSize: "2rem",
              color: "var(--text-primary)",
              marginBottom: "16px",
            }}
          >
            Thank You!
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
            Your information has been submitted. We'll be in touch soon with
            testing instructions.
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            style={{
              marginTop: "32px",
              padding: "12px 32px",
              borderRadius: "12px",
              background: "var(--primary)",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "1rem",
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg-base)",
        padding: "120px 20px 60px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: "800px", width: "100%", textAlign: "center" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 16px",
            background: "rgba(108,59,255,0.1)",
            borderRadius: "30px",
            color: "var(--primary-light)",
            fontSize: "14px",
            fontWeight: 700,
            marginBottom: "24px",
            border: "1px solid rgba(108,59,255,0.2)",
          }}
        >
          <Zap size={14} fill="currentColor" />
          JOIN THE REVOLUTION
        </div>
        <h1
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 800,
            color: "var(--text-primary)",
            lineHeight: 1.1,
            marginBottom: "20px",
            letterSpacing: "-0.02em",
          }}
        >
          Become a <span className="gradient-text">Beta Tester</span>
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            color: "var(--text-secondary)",
            maxWidth: "600px",
            margin: "0 auto 60px",
            lineHeight: 1.6,
          }}
        >
          Help us shape the future of focus. Get early access to NeuroTrack
          features and share your feedback directly with our engineering team.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            background: "var(--bg-surface)",
            padding: "40px",
            borderRadius: "24px",
            border: "1px solid var(--border-card)",
            textAlign: "left",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          }}
        >
          <div style={{ display: "grid", gap: "24px" }}>
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "var(--text-primary)",
                  fontWeight: 600,
                  fontSize: "14px",
                }}
              >
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "12px",
                  background: "var(--bg-default)",
                  border: "1px solid var(--border-card)",
                  color: "var(--text-primary)",
                  fontSize: "16px",
                  outline: "none",
                }}
              />
            </div>
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "var(--text-primary)",
                  fontWeight: 600,
                  fontSize: "14px",
                }}
              >
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "12px",
                  background: "var(--bg-default)",
                  border: "1px solid var(--border-card)",
                  color: "var(--text-primary)",
                  fontSize: "16px",
                  outline: "none",
                }}
              />
            </div>
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "var(--text-primary)",
                  fontWeight: 600,
                  fontSize: "14px",
                }}
              >
                Why do you want to test NeuroTrack?
              </label>
              <textarea
                required
                rows={4}
                placeholder="Tell us a bit about your goals..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "12px",
                  background: "var(--bg-default)",
                  border: "1px solid var(--border-card)",
                  color: "var(--text-primary)",
                  fontSize: "16px",
                  outline: "none",
                  resize: "vertical",
                }}
              />
            </div>

            {error && (
              <div
                style={{
                  padding: "12px",
                  background: "rgba(255, 77, 77, 0.1)",
                  border: "1px solid rgba(255, 77, 77, 0.2)",
                  borderRadius: "10px",
                  color: "#ff4d4d",
                  fontSize: "14px",
                }}
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                marginTop: "12px",
                padding: "16px",
                borderRadius: "12px",
                background: "var(--primary)",
                color: "#fff",
                border: "none",
                cursor: loading ? "not-allowed" : "pointer",
                fontWeight: 700,
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                transition: "all 0.2s",
                opacity: loading ? 0.7 : 1,
              }}
            >
              {loading ? (
                "Submitting..."
              ) : (
                <>
                  Submit Application <Send size={18} />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TesterPage;
