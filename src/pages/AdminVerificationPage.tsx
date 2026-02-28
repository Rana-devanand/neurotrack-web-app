import { useState, useEffect } from "react";
import AdminSidebar from "../Component/admin/AdminSidebar";
import Table from "../Component/admin/Table";
import { useNavigate } from "react-router-dom";
import { Send, CheckCircle, X, Sparkles } from "lucide-react";

const AdminVerificationPage = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailData, setEmailData] = useState({ subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10;

  const navigate = useNavigate();

  const handleGenerateAI = async () => {
    if (!emailData.subject) {
      alert("Please enter a subject first to guide the AI.");
      return;
    }
    setGenerating(true);
    try {
      const token = localStorage.getItem("admin_token");
      const apiUrl = import.meta.env.VITE_BE_URL || "http://localhost:8000/api";
      const response = await fetch(`${apiUrl}/verification/generate-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ subject: emailData.subject }),
      });

      if (!response.ok) throw new Error("Failed to generate content");
      const data = await response.json();
      setEmailData({ ...emailData, message: data.data.content });
    } catch (error) {
      alert("AI generation failed. Please try again.");
    } finally {
      setGenerating(false);
    }
  };

  const fetchInstallers = async () => {
    try {
      const token = localStorage.getItem("admin_token");
      if (!token) {
        navigate("/admin/login");
        return;
      }
      const apiUrl = import.meta.env.VITE_BE_URL || "http://localhost:8000/api";
      const skip = (page - 1) * limit;
      const response = await fetch(
        `${apiUrl}/verification/installers?skip=${skip}&limit=${limit}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error("Failed to fetch installers");
      }

      const data = await response.json();
      setUsers(data.data?.users || []);
      setTotalPages(Math.ceil((data.data?.count || 0) / limit));
    } catch (error) {
      console.error("Error loading installers:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInstallers();
  }, [navigate, page]);

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const selectAll = () => {
    if (selectedIds.length === users.length && users.length > 0) {
      setSelectedIds([]);
    } else {
      setSelectedIds(users.map((u: any) => u.id));
    }
  };

  const handleSendBulk = async () => {
    if (selectedIds.length === 0) return;
    setSending(true);
    try {
      const token = localStorage.getItem("admin_token");
      const apiUrl = import.meta.env.VITE_BE_URL || "http://localhost:8000/api";
      const response = await fetch(`${apiUrl}/verification/bulk-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userIds: selectedIds,
          subject: emailData.subject,
          messageBody: emailData.message,
        }),
      });

      if (response.ok) {
        alert("Bulk emails sent successfully!");
        setIsModalOpen(false);
        setSelectedIds([]);
        setEmailData({ subject: "", message: "" });
      } else {
        throw new Error("Failed to send bulk emails");
      }
    } catch (error) {
      alert("Error sending emails. Please check logs.");
    } finally {
      setSending(false);
    }
  };

  const columns: any[] = [
    {
      key: "select",
      label: (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <input
            type="checkbox"
            checked={selectedIds.length === users.length && users.length > 0}
            onChange={selectAll}
            style={{ cursor: "pointer", width: "16px", height: "16px" }}
          />
          <span>Select</span>
        </div>
      ),
      render: (row: any) => (
        <input
          type="checkbox"
          checked={selectedIds.includes(row.id)}
          onChange={() => toggleSelect(row.id)}
          style={{ cursor: "pointer", width: "18px", height: "18px" }}
        />
      ),
    },
    { key: "name", label: "Name", render: (row: any) => row.name || "Unknown" },
    { key: "email", label: "Email" },
    {
      key: "status",
      label: "App Status",
      render: () => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            color: "#00D4C8",
          }}
        >
          <CheckCircle size={14} />
          <span style={{ fontSize: "12px", fontWeight: 600 }}>Installed</span>
        </div>
      ),
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "var(--bg-default)",
      }}
    >
      <AdminSidebar />
      <div
        style={{
          marginLeft: "250px",
          flex: 1,
          padding: "40px",
          overflowY: "auto",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <header
            style={{
              marginBottom: "40px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "2rem",
                  color: "var(--text-primary)",
                  marginBottom: "8px",
                }}
              >
                14 Days Verification
              </h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px" }}>
                Send bulk emails to active users who have the application
                installed.
              </p>
            </div>
            {selectedIds.length > 0 && (
              <button
                onClick={() => setIsModalOpen(true)}
                style={{
                  padding: "12px 24px",
                  borderRadius: "12px",
                  background: "var(--primary)",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "0 10px 20px rgba(108,59,255,0.2)",
                }}
              >
                <Send size={18} /> Send Bulk Email ({selectedIds.length})
              </button>
            )}
          </header>

          <Table
            columns={columns}
            data={users}
            loading={loading}
            page={page}
            totalPages={totalPages}
            onPageChange={(p) => setPage(p)}
          />
        </div>
      </div>

      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            backdropFilter: "blur(4px)",
          }}
        >
          <div
            style={{
              background: "var(--bg-surface)",
              padding: "32px",
              borderRadius: "24px",
              width: "600px",
              border: "1px solid var(--border-card)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "24px",
              }}
            >
              <h2
                style={{
                  color: "var(--text-primary)",
                  fontSize: "1.5rem",
                  margin: 0,
                }}
              >
                Compose Bulk Email
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "var(--text-secondary)",
                  cursor: "pointer",
                }}
              >
                <X size={24} />
              </button>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
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
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="E.g. Action Required: Verification Update"
                  value={emailData.subject}
                  onChange={(e) =>
                    setEmailData({ ...emailData, subject: e.target.value })
                  }
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "10px",
                    background: "var(--bg-default)",
                    border: "1px solid var(--border-card)",
                    color: "var(--text-primary)",
                    fontSize: "15px",
                    outline: "none",
                  }}
                />
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <label
                    style={{
                      color: "var(--text-primary)",
                      fontWeight: 600,
                      fontSize: "14px",
                    }}
                  >
                    Message
                  </label>
                  <button
                    onClick={handleGenerateAI}
                    disabled={generating || !emailData.subject}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      background: "rgba(108, 59, 255, 0.1)",
                      border: "1px solid rgba(108, 59, 255, 0.3)",
                      padding: "6px 12px",
                      borderRadius: "8px",
                      color: "#6C3BFF",
                      fontSize: "12px",
                      fontWeight: 700,
                      cursor: generating ? "wait" : "pointer",
                      opacity: generating || !emailData.subject ? 0.6 : 1,
                    }}
                  >
                    <Sparkles size={14} />{" "}
                    {generating ? "Generating..." : "Generate with AI"}
                  </button>
                </div>
                <textarea
                  rows={8}
                  placeholder="Write your email content here..."
                  value={emailData.message}
                  onChange={(e) =>
                    setEmailData({ ...emailData, message: e.target.value })
                  }
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "10px",
                    background: "var(--bg-default)",
                    border: "1px solid var(--border-card)",
                    color: "var(--text-primary)",
                    fontSize: "15px",
                    outline: "none",
                    resize: "none",
                  }}
                />
              </div>

              <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
                <button
                  disabled={sending || !emailData.subject || !emailData.message}
                  onClick={handleSendBulk}
                  style={{
                    flex: 1,
                    padding: "14px",
                    borderRadius: "12px",
                    background: "var(--primary)",
                    color: "#fff",
                    border: "none",
                    cursor: sending ? "not-allowed" : "pointer",
                    fontWeight: 700,
                    fontSize: "1rem",
                    opacity:
                      sending || !emailData.subject || !emailData.message
                        ? 0.6
                        : 1,
                  }}
                >
                  {sending ? "Sending..." : "Send to All"}
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  style={{
                    padding: "14px 24px",
                    borderRadius: "12px",
                    background: "transparent",
                    border: "1px solid var(--border-card)",
                    color: "var(--text-primary)",
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminVerificationPage;
