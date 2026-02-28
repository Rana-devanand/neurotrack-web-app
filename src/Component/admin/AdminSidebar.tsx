import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Users,
  Mail,
  LogOut,
  Zap,
  MessageSquare,
  CreditCard,
  Bell,
  FlaskConical,
  ShieldCheck,
} from "lucide-react";

const AdminSidebar = () => {
  const location = useLocation();
  const [adminUser, setAdminUser] = useState<{
    name?: string;
    email?: string;
  } | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        setAdminUser({
          name: payload.name || "Admin User",
          email: payload.email,
        });
      } catch (e) {
        console.error("Failed to parse admin token");
      }
    }
  }, []);

  const menuItems = [
    { label: "Users", path: "/admin/dashboard", icon: <Users size={18} /> },
    { label: "Emails", path: "/admin/emails", icon: <Mail size={18} /> },
    { label: "Chats", path: "/admin/chats", icon: <MessageSquare size={18} /> },
    {
      label: "Subscriptions",
      path: "/admin/subscriptions",
      icon: <CreditCard size={18} />,
    },
    {
      label: "Testers",
      path: "/admin/testers",
      icon: <FlaskConical size={18} />,
    },
    {
      label: "14 Days Verification",
      path: "/admin/verification",
      icon: <ShieldCheck size={18} />,
    },
    {
      label: "Notifications",
      path: "/admin/notifications",
      icon: <Bell size={18} />,
    },
  ];

  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        background: "var(--bg-surface)",
        borderRight: "1px solid var(--border-card)",
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        top: 0,
        left: 0,
        padding: "24px 16px",
        zIndex: 100,
      }}
    >
      <div style={{ padding: "0 8px", marginBottom: "40px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "8px",
              background: "linear-gradient(135deg, #6C3BFF, #00D4C8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Zap size={16} color="#fff" fill="#fff" />
          </div>
          <span style={{ fontSize: "18px", fontWeight: 800 }}>
            <span className="gradient-text">Neuro</span>
            <span style={{ color: "var(--text-primary)" }}>Admin</span>
          </span>
        </div>
      </div>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          flex: 1,
        }}
      >
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 16px",
                borderRadius: "12px",
                color: isActive
                  ? "var(--primary-light)"
                  : "var(--text-secondary)",
                background: isActive ? "rgba(108,59,255,0.1)" : "transparent",
                borderLeft: isActive
                  ? "3px solid var(--primary)"
                  : "3px solid transparent",
                textDecoration: "none",
                fontWeight: isActive ? 600 : 500,
                fontSize: "15px",
                transition: "all 0.2s",
              }}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div style={{ marginTop: "auto" }}>
        {adminUser && (
          <div
            style={{
              marginBottom: "16px",
              padding: "12px",
              background: "rgba(108,59,255,0.05)",
              borderRadius: "12px",
              border: "1px solid rgba(108,59,255,0.1)",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "var(--text-primary)",
                marginBottom: "4px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {adminUser.name}
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "var(--text-secondary)",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {adminUser.email}
            </div>
          </div>
        )}

        <button
          onClick={() => {
            localStorage.removeItem("admin_token");
            window.location.href = "/admin/login";
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px 16px",
            borderRadius: "12px",
            color: "#ff4d4d",
            background: "rgba(255, 77, 77, 0.05)",
            border: "none",
            width: "100%",
            cursor: "pointer",
            fontWeight: 500,
            fontSize: "15px",
            transition: "all 0.2s",
          }}
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
