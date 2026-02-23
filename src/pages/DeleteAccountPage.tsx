import { Link } from "react-router-dom";
import {
  Trash2,
  Smartphone,
  Settings,
  UserX,
  AlertTriangle,
  CheckCircle2,
  Mail,
  ChevronRight,
} from "lucide-react";

/** Steps the user follows inside the app */
const STEPS = [
  {
    number: 1,
    icon: Smartphone,
    title: "Open NeuroTrack",
    desc: "Launch the NeuroTrack app on your Android device and make sure you are signed in to the account you wish to delete.",
    color: "var(--primary-light)",
  },
  {
    number: 2,
    icon: Settings,
    title: "Go to Profile",
    desc: "Tap the Profile icon in the bottom navigation bar, then tap the Settings (⚙️) icon in the top-right corner of the Profile screen.",
    color: "var(--accent)",
  },
  {
    number: 3,
    icon: UserX,
    title: "Select 'Delete Account'",
    desc: 'Scroll down to the Danger Zone section at the bottom of the Settings screen. Tap "Delete Account". You may be asked to re-enter your password or confirm via OTP for security.',
    color: "#ff6b6b",
  },
  {
    number: 4,
    icon: AlertTriangle,
    title: "Read the Warning",
    desc: "A confirmation dialog will appear listing everything that will be permanently deleted — your profile, focus history, productivity scores, AI insights, and subscription data. Read it carefully.",
    color: "#f59e0b",
  },
  {
    number: 5,
    icon: Trash2,
    title: "Confirm Deletion",
    desc: 'Type "DELETE" in the confirmation field and tap the red "Permanently Delete Account" button to proceed. This action cannot be undone.',
    color: "#ff6b6b",
  },
  {
    number: 6,
    icon: CheckCircle2,
    title: "Account Deleted",
    desc: "You will be signed out and redirected to the welcome screen. A confirmation email will be sent to your registered address. All personal data is erased within 30 days.",
    color: "#22c55e",
  },
];

/** What gets deleted vs what happens to external data */
const DELETED_ITEMS = [
  "Your profile (name, email, profile photo)",
  "All focus sessions and productivity history",
  "AI-generated insights and daily reports",
  "App usage analytics and usage patterns",
  "Mood & energy check-in logs",
  "Email metadata processed by the AI Assistant",
  "Custom goals and tasks",
  "Subscription and billing records (after legal retention period)",
];

const RETAINED_ITEMS = [
  {
    item: "Subscription billing records",
    reason: "Required by financial regulations (typically 7 years)",
  },
  {
    item: "Anonymised aggregate analytics",
    reason: "Cannot be linked back to you individually",
  },
  {
    item: "Legal correspondence",
    reason: "If you previously contacted support about a legal matter",
  },
];

const DeleteAccountPage = () => (
  <main
    style={{
      background: "var(--bg-base)",
      minHeight: "100vh",
      paddingTop: "90px",
      color: "var(--text-primary)",
    }}
  >
    {/* ── HERO ── */}
    <section
      style={{
        position: "relative",
        padding: "60px 0 48px",
        borderBottom: "1px solid var(--border-subtle)",
        overflow: "hidden",
      }}
    >
      <div
        className="orb"
        style={{
          width: 360,
          height: 360,
          top: "-140px",
          left: "-60px",
          background: "rgba(255,107,107,0.12)",
          filter: "blur(80px)",
          position: "absolute",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 16px",
            borderRadius: "var(--radius-full)",
            background: "rgba(255,107,107,0.1)",
            border: "1px solid rgba(255,107,107,0.35)",
            color: "#ff6b6b",
            fontSize: 12,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.07em",
            marginBottom: 20,
          }}
        >
          <Trash2 size={12} /> Account Deletion
        </div>

        <h1
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 900,
            marginBottom: 12,
          }}
        >
          How to <span className="gradient-text">Delete Your Account</span>
        </h1>
        <p
          style={{
            fontSize: "1.05rem",
            color: "var(--text-secondary)",
            maxWidth: 540,
            lineHeight: 1.7,
            marginBottom: 16,
          }}
        >
          You can permanently delete your NeuroTrack account directly from the
          mobile app in under a minute. This page walks you through every step.
        </p>

        {/* Warning callout */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 18px",
            borderRadius: "var(--radius-md)",
            background: "rgba(245,158,11,0.1)",
            border: "1px solid rgba(245,158,11,0.35)",
            color: "#f59e0b",
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          <AlertTriangle size={15} />
          Account deletion is permanent and cannot be reversed.
        </div>
      </div>
    </section>

    {/* ── STEPS ── */}
    <section style={{ padding: "72px 0 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 800,
              marginBottom: 12,
            }}
          >
            Step-by-Step Guide
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-secondary)",
              maxWidth: 440,
              margin: "0 auto",
            }}
          >
            Follow these 6 steps inside the NeuroTrack app to permanently delete
            your account.
          </p>
        </div>

        <div
          style={{
            maxWidth: 720,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 0,
            position: "relative",
          }}
        >
          {/* Vertical connector line */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              left: 35,
              top: 70,
              bottom: 70,
              width: 2,
              background:
                "linear-gradient(to bottom, var(--primary), rgba(255,107,107,0.4))",
              opacity: 0.3,
              zIndex: 0,
            }}
          />

          {STEPS.map(({ number, icon: Icon, title, desc, color }, i) => (
            <div
              key={number}
              style={{
                display: "flex",
                gap: 24,
                paddingBottom: i < STEPS.length - 1 ? 32 : 0,
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Step circle */}
              <div style={{ flexShrink: 0 }}>
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: "20px",
                    background: "var(--bg-card)",
                    border: `1.5px solid ${color}55`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    boxShadow: `0 8px 32px ${color}22`,
                  }}
                >
                  <Icon size={28} style={{ color }} />
                  {/* Step number badge */}
                  <span
                    style={{
                      position: "absolute",
                      top: -8,
                      right: -8,
                      background: color,
                      color: "#fff",
                      fontSize: 11,
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
                    {number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-card)",
                  borderRadius: "var(--radius-lg)",
                  padding: "20px 24px",
                  flex: 1,
                  transition: "border-color 0.2s",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: 8,
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── WHAT GETS DELETED + RETAINED ── */}
    <section style={{ padding: "72px 0" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            maxWidth: 900,
            margin: "0 auto",
          }}
          className="delete-info-grid"
        >
          {/* Deleted data */}
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid rgba(255,107,107,0.25)",
              borderRadius: "var(--radius-xl)",
              padding: "28px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "10px",
                  background: "rgba(255,107,107,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Trash2 size={18} style={{ color: "#ff6b6b" }} />
              </div>
              <h3
                style={{ fontSize: "1rem", fontWeight: 800, color: "#ff6b6b" }}
              >
                What Gets Deleted
              </h3>
            </div>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {DELETED_ITEMS.map((item) => (
                <li
                  key={item}
                  style={{ display: "flex", alignItems: "flex-start", gap: 8 }}
                >
                  <CheckCircle2
                    size={14}
                    style={{ color: "#ff6b6b", marginTop: 3, flexShrink: 0 }}
                  />
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.5,
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p
              style={{
                fontSize: "12px",
                color: "var(--text-muted)",
                marginTop: 16,
              }}
            >
              Data is permanently erased within <strong>30 days</strong> of
              deletion request.
            </p>
          </div>

          {/* Retained data */}
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-card)",
              borderRadius: "var(--radius-xl)",
              padding: "28px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "10px",
                  background: "rgba(245,158,11,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AlertTriangle size={18} style={{ color: "#f59e0b" }} />
              </div>
              <h3
                style={{ fontSize: "1rem", fontWeight: 800, color: "#f59e0b" }}
              >
                What May Be Retained
              </h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {RETAINED_ITEMS.map(({ item, reason }) => (
                <div
                  key={item}
                  style={{
                    padding: "12px 14px",
                    background: "var(--bg-surface)",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      marginBottom: 4,
                    }}
                  >
                    {item}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.5,
                    }}
                  >
                    {reason}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── CAN'T ACCESS APP? ── */}
    <section
      style={{
        padding: "48px 0 80px",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div className="container">
        <div
          style={{
            maxWidth: 600,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "16px",
              background: "rgba(108,59,255,0.15)",
              border: "1.5px solid rgba(108,59,255,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
            }}
          >
            <Mail size={24} style={{ color: "var(--primary-light)" }} />
          </div>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 12 }}>
            Can't Access the App?
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              marginBottom: 24,
            }}
          >
            If you cannot access your account or the app, you can request
            account deletion by email. Include your registered email address in
            the request.
          </p>
          <a
            href="mailto:helpdesk.neurotrack@gmail.com?subject=Account Deletion Request"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "13px 28px",
              borderRadius: "var(--radius-full)",
              background:
                "linear-gradient(135deg, var(--primary), var(--primary-light))",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "0.95rem",
              boxShadow: "0 8px 32px var(--primary-glow)",
            }}
          >
            <Mail size={16} />
            helpdesk.neurotrack@gmail.com
          </a>

          {/* Back links */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 24,
              marginTop: 40,
              flexWrap: "wrap",
            }}
          >
            {[
              { label: "Privacy Policy", to: "/privacy-policy" },
              { label: "Terms of Service", to: "/terms-and-condition" },
              { label: "Back to Home", to: "/" },
            ].map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  fontSize: 13,
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  fontWeight: 600,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "var(--accent)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "var(--text-muted)")
                }
              >
                <ChevronRight size={12} /> {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>

    <style>{`
      @media (max-width: 640px) {
        .delete-info-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </main>
);

export default DeleteAccountPage;
