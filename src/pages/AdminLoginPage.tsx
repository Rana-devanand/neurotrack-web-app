import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const apiUrl = import.meta.env.VITE_BE_URL || "http://localhost:8000/api";
      const response = await fetch(`${apiUrl}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to login");
      }

      // Check role or assume backend login returns token
      // We'll store tokens
      localStorage.setItem("admin_token", data.data.accessToken);
      localStorage.setItem("admin_refresh_token", data.data.refreshToken);

      navigate("/admin/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "var(--bg-default)",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "var(--bg-surface)",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 8px 32px rgba(108,59,255,0.1)",
          border: "1px solid var(--border-card)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            marginBottom: "10px",
            color: "var(--text-primary)",
          }}
        >
          <span className="gradient-text">Admin</span> Login
        </h1>
        <p
          style={{
            color: "var(--text-secondary)",
            marginBottom: "30px",
            fontSize: "14px",
          }}
        >
          Connect to manage NeuroTrack platform
        </p>

        {error && (
          <div
            style={{
              padding: "12px",
              background: "rgba(255, 60, 60, 0.1)",
              border: "1px solid rgba(255, 60, 60, 0.3)",
              color: "#ff4d4d",
              borderRadius: "10px",
              marginBottom: "20px",
              fontSize: "14px",
            }}
          >
            {error}
          </div>
        )}

        <form
          onSubmit={handleLogin}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <div>
            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "14px 20px",
                borderRadius: "12px",
                border: "1px solid var(--border-subtle)",
                background: "var(--bg-default)",
                color: "var(--text-primary)",
                fontSize: "15px",
                outline: "none",
                transition: "border 0.3s",
              }}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "14px 20px",
                borderRadius: "12px",
                border: "1px solid var(--border-subtle)",
                background: "var(--bg-default)",
                color: "var(--text-primary)",
                fontSize: "15px",
                outline: "none",
                transition: "border 0.3s",
              }}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="btn-primary"
            style={{
              width: "100%",
              padding: "14px",
              justifyContent: "center",
              fontSize: "16px",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "Authenticating..." : "Login to Dashboard"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
