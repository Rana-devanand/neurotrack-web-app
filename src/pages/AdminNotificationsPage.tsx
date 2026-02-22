import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../Component/admin/AdminSidebar";
import Table from "../Component/admin/Table";
import { Sparkles, Send } from "lucide-react";

const AdminNotificationsPage = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [activeUsersFirst, setActiveUsersFirst] = useState(false);

  // Store user objects to display their names across paginated pages
  const [selectedUsers, setSelectedUsers] = useState<
    { id: string; name: string }[]
  >([]);

  const [prompt, setPrompt] = useState("");
  const [aiLoading, setAiLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [sending, setSending] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState({ text: "", type: "" });

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      navigate("/admin/login");
      return;
    }

    const fetchUsers = async () => {
      setLoading(true);
      try {
        const apiUrl =
          import.meta.env.VITE_BE_URL || "http://localhost:8000/api";
        const skip = (page - 1) * limit;
        const response = await fetch(
          `${apiUrl}/users?skip=${skip}&limit=${limit}&search=${encodeURIComponent(search)}&activePushFirst=${activeUsersFirst}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (!response.ok) {
          if (response.status === 401 || response.status === 403) {
            localStorage.removeItem("admin_token");
            navigate("/admin/login");
          }
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        if (data.data?.users) {
          setUsers(data.data.users);
          const count = data.data.count || 0;
          setTotalPages(Math.ceil(count / limit));
        } else {
          setUsers(Array.isArray(data.data) ? data.data : []);
        }
      } catch (error) {
        console.error("Error loading users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [navigate, page, limit, search, activeUsersFirst]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    setSearch(searchInput);
  };

  const toggleUserSelection = (userId: string, userName: string) => {
    setSelectedUsers((prev) =>
      prev.some((u) => u.id === userId)
        ? prev.filter((u) => u.id !== userId)
        : [...prev, { id: userId, name: userName }],
    );
  };

  const selectAllCurrentPage = () => {
    const validUsers = users
      .filter((u) => u.fcmToken)
      .map((u) => ({ id: u.id, name: u.name || "Unknown" }));

    const allSelected =
      validUsers.length > 0 &&
      validUsers.every((vu) => selectedUsers.some((su) => su.id === vu.id));

    if (allSelected) {
      setSelectedUsers((prev) =>
        prev.filter((su) => !validUsers.some((vu) => vu.id === su.id)),
      );
    } else {
      setSelectedUsers((prev) => {
        const newSelection = [...prev];
        validUsers.forEach((vu) => {
          if (!newSelection.some((su) => su.id === vu.id)) {
            newSelection.push(vu);
          }
        });
        return newSelection;
      });
    }
  };

  const generateNotification = async () => {
    if (!prompt.trim()) {
      setFeedbackMsg({ text: "Please enter a prompt first.", type: "error" });
      return;
    }

    setAiLoading(true);
    setFeedbackMsg({ text: "", type: "" });
    try {
      const token = localStorage.getItem("admin_token");
      const apiUrl = import.meta.env.VITE_BE_URL || "http://localhost:8000/api";
      const response = await fetch(`${apiUrl}/admin/notifications/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ prompt }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to generate notification");
      }

      if (result.data) {
        setTitle(result.data.title || "");
        setBody(result.data.body || "");
        setFeedbackMsg({
          text: "AI generated notification successfully!",
          type: "success",
        });
      }
    } catch (error: any) {
      console.error(error);
      setFeedbackMsg({
        text: error.message || "Failed to generate notification.",
        type: "error",
      });
    } finally {
      setAiLoading(false);
    }
  };

  const sendNotification = async () => {
    if (selectedUsers.length === 0) {
      setFeedbackMsg({
        text: "Please select at least one user.",
        type: "error",
      });
      return;
    }
    if (!title.trim() || !body.trim()) {
      setFeedbackMsg({
        text: "Please provide a title and body to send.",
        type: "error",
      });
      return;
    }

    setSending(true);
    setFeedbackMsg({ text: "", type: "" });
    try {
      const token = localStorage.getItem("admin_token");
      const apiUrl = import.meta.env.VITE_BE_URL || "http://localhost:8000/api";
      const response = await fetch(`${apiUrl}/admin/notifications/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userIds: selectedUsers.map((u) => u.id),
          title,
          body,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send notifications");
      }

      setFeedbackMsg({
        text:
          result.message ||
          `Notifications Sent! Successful: ${result.data?.success || 0}, Failed: ${result.data?.failed || 0}`,
        type: "success",
      });
      // Optionally clear selected user IDs after sending:
      // setSelectedUserIds([]);
    } catch (error: any) {
      console.error(error);
      setFeedbackMsg({
        text: error.message || "Failed to send notifications.",
        type: "error",
      });
    } finally {
      setSending(false);
    }
  };

  const columns = [
    {
      key: "select",
      label: "Select",
      render: (row: any) => (
        <input
          type="checkbox"
          checked={selectedUsers.some((su) => su.id === row.id)}
          onChange={() => toggleUserSelection(row.id, row.name || "Unknown")}
          disabled={!row.fcmToken} // Optionally disable if they cannot receive push anyway
          style={{
            width: "16px",
            height: "16px",
            cursor: row.fcmToken ? "pointer" : "not-allowed",
            accentColor: "var(--primary)",
          }}
        />
      ),
    },
    { key: "name", label: "Name", render: (row: any) => row.name || "Unknown" },
    { key: "email", label: "Email" },
    {
      key: "push_status",
      label: "Push Status",
      render: (row: any) => (
        <span
          style={{
            padding: "4px 10px",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: 600,
            background: row.fcmToken
              ? "rgba(0,212,200,0.15)"
              : "rgba(255, 77, 77, 0.15)",
            border: row.fcmToken
              ? "1px solid rgba(0,212,200,0.3)"
              : "1px solid rgba(255, 77, 77, 0.3)",
            color: row.fcmToken ? "#00D4C8" : "#ff4d4d",
          }}
        >
          {row.fcmToken ? "Active" : "No Device"}
        </span>
      ),
    },
  ];

  const currentPageValidUsers = users.filter((u) => u.fcmToken);
  const isAllCurrentSelected =
    currentPageValidUsers.length > 0 &&
    currentPageValidUsers.every((u) =>
      selectedUsers.some((su) => su.id === u.id),
    );

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "var(--bg-default)",
      }}
    >
      <style>{`
        @keyframes pulseGreen {
          0% { box-shadow: 0 0 0 0 rgba(0, 212, 200, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(0, 212, 200, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 212, 200, 0); }
        }
      `}</style>
      <AdminSidebar />
      <div
        style={{
          marginLeft: "250px", // matching sidebar width
          flex: 1,
          padding: "40px",
          overflowY: "auto",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <header
            style={{
              marginBottom: "30px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
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
                AI Notifications Hub
              </h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px" }}>
                Generate and send intelligent push notifications to selected
                users.
              </p>
            </div>
          </header>

          {/* Alert messages */}
          {feedbackMsg.text && (
            <div
              style={{
                padding: "16px",
                borderRadius: "12px",
                marginBottom: "20px",
                background:
                  feedbackMsg.type === "success"
                    ? "rgba(0,212,200,0.1)"
                    : "rgba(255, 77, 77, 0.1)",
                border:
                  feedbackMsg.type === "success"
                    ? "1px solid rgba(0,212,200,0.3)"
                    : "1px solid rgba(255, 77, 77, 0.3)",
                color: feedbackMsg.type === "success" ? "#00D4C8" : "#ff4d4d",
                fontWeight: 600,
              }}
            >
              {feedbackMsg.text}
            </div>
          )}

          <div
            style={{ display: "flex", gap: "30px", alignItems: "flex-start" }}
          >
            {/* Left Column: User Selection (60% width) */}
            <div
              style={{
                flex: 6,
                background: "var(--bg-surface)",
                padding: "20px",
                borderRadius: "16px",
                border: "1px solid var(--border-card)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "16px",
                  alignItems: "center",
                }}
              >
                <h2 style={{ fontSize: "18px", color: "var(--text-primary)" }}>
                  Select Users ({selectedUsers.length} Selected)
                </h2>
                <div
                  style={{ display: "flex", gap: "16px", alignItems: "center" }}
                >
                  <form
                    onSubmit={handleSearch}
                    style={{ display: "flex", gap: "8px" }}
                  >
                    <input
                      type="text"
                      placeholder="Search users..."
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      style={{
                        padding: "8px 12px",
                        borderRadius: "8px",
                        border: "1px solid var(--border-card)",
                        background: "var(--bg-default)",
                        color: "var(--text-primary)",
                        minWidth: "200px",
                      }}
                    />
                    <button
                      type="submit"
                      style={{
                        padding: "8px 16px",
                        borderRadius: "8px",
                        background: "var(--bg-default)",
                        border: "1px solid var(--border-card)",
                        color: "var(--text-primary)",
                        cursor: "pointer",
                      }}
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>

              {/* Selected Users List displayed in UI */}
              {selectedUsers.length > 0 && (
                <div
                  style={{
                    marginBottom: "16px",
                    padding: "16px",
                    background: "var(--bg-default)",
                    borderRadius: "12px",
                    border: "1px solid var(--border-card)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "12px",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "14px",
                        color: "var(--text-primary)",
                        margin: 0,
                      }}
                    >
                      Selected List:
                    </h3>
                    <button
                      onClick={() => setSelectedUsers([])}
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "var(--text-secondary)",
                        cursor: "pointer",
                        fontSize: "12px",
                        textDecoration: "underline",
                      }}
                    >
                      Clear All
                    </button>
                  </div>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
                  >
                    {selectedUsers.map((su) => (
                      <span
                        key={su.id}
                        style={{
                          padding: "6px 12px",
                          background: "rgba(108,59,255,0.1)",
                          color: "var(--primary-light)",
                          borderRadius: "16px",
                          fontSize: "12px",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          fontWeight: 500,
                        }}
                      >
                        {su.name}
                        <button
                          onClick={() => toggleUserSelection(su.id, su.name)}
                          style={{
                            background: "transparent",
                            border: "none",
                            color: "var(--primary)",
                            cursor: "pointer",
                            padding: 0,
                            fontSize: "16px",
                            lineHeight: 1,
                          }}
                        >
                          &times;
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div
                style={{
                  marginBottom: "16px",
                  display: "flex",
                  gap: "16px",
                  alignItems: "center",
                }}
              >
                <button
                  onClick={selectAllCurrentPage}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "8px",
                    background: isAllCurrentSelected
                      ? "rgba(108,59,255,0.1)"
                      : "var(--bg-default)",
                    border: "1px solid",
                    borderColor: isAllCurrentSelected
                      ? "var(--primary-light)"
                      : "var(--border-card)",
                    color: isAllCurrentSelected
                      ? "var(--primary-light)"
                      : "var(--text-secondary)",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  {isAllCurrentSelected
                    ? "Deselect Page"
                    : "Select Active Devices on Page"}
                </button>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    background: activeUsersFirst
                      ? "rgba(0, 212, 200, 0.1)"
                      : "var(--bg-default)",
                    border: activeUsersFirst
                      ? "1px solid rgba(0, 212, 200, 0.3)"
                      : "1px solid var(--border-card)",
                    padding: "6px 14px",
                    borderRadius: "20px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    userSelect: "none",
                    gap: "8px",
                    color: activeUsersFirst
                      ? "#00D4C8"
                      : "var(--text-secondary)",
                    fontWeight: 600,
                  }}
                  onClick={() => {
                    setActiveUsersFirst(!activeUsersFirst);
                    setPage(1);
                  }}
                >
                  <div
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      border: activeUsersFirst
                        ? "5px solid #00D4C8"
                        : "2px solid var(--border-card)",
                      background: activeUsersFirst ? "#fff" : "transparent",
                      transition: "all 0.2s",
                      animation: activeUsersFirst
                        ? "pulseGreen 1.5s infinite"
                        : "none",
                    }}
                  />
                  Active First
                </div>
              </div>

              <Table
                columns={columns}
                data={users}
                loading={loading}
                page={page}
                totalPages={totalPages}
                onPageChange={(newPage) => setPage(newPage)}
                limit={limit}
                onLimitChange={(newLimit) => setLimit(newLimit)}
              />
            </div>

            {/* Right Column: AI Generation Playground (40% width) */}
            <div
              style={{
                flex: 4,
                position: "sticky",
                top: "40px",
                height: "max-content", // To allow sticky to track purely with scroll limits natively.
                background: "var(--bg-surface)",
                padding: "24px",
                borderRadius: "16px",
                border: "1px solid var(--border-card)",
              }}
            >
              <h2
                style={{
                  fontSize: "18px",
                  color: "var(--text-primary)",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Sparkles size={20} color="var(--primary)" />
                AI Generator
              </h2>

              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    fontWeight: 500,
                  }}
                >
                  Prompt AI to write a notification
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g. 'Tell active users that the new passive intelligence update is out and they should check the home tab...'"
                  style={{
                    width: "100%",
                    minHeight: "100px",
                    padding: "16px",
                    borderRadius: "12px",
                    background: "var(--bg-default)",
                    border: "1px solid var(--border-card)",
                    color: "var(--text-primary)",
                    fontFamily: "inherit",
                    resize: "vertical",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
                <button
                  onClick={generateNotification}
                  disabled={aiLoading}
                  style={{
                    marginTop: "12px",
                    width: "100%",
                    padding: "12px",
                    borderRadius: "12px",
                    background: aiLoading
                      ? "var(--border-subtle)"
                      : "linear-gradient(135deg, #6C3BFF, #00D4C8)",
                    color: "#fff",
                    border: "none",
                    fontWeight: 600,
                    cursor: aiLoading ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    transition: "opacity 0.2s",
                  }}
                >
                  {aiLoading ? "Generating Magic..." : "Generate Magic"}
                  {!aiLoading && <Sparkles size={16} />}
                </button>
              </div>

              <div
                style={{
                  borderTop: "1px solid var(--border-card)",
                  paddingTop: "20px",
                  marginBottom: "30px",
                }}
              >
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    fontWeight: 500,
                  }}
                >
                  Notification Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Update Alert!"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "12px",
                    background: "var(--bg-default)",
                    border: "1px solid var(--border-card)",
                    color: "var(--text-primary)",
                    fontSize: "15px",
                    marginBottom: "16px",
                    outline: "none",
                  }}
                />

                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    fontWeight: 500,
                  }}
                >
                  Notification Body
                </label>
                <textarea
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="e.g. Please checkout the new dashboard!"
                  style={{
                    width: "100%",
                    minHeight: "80px",
                    padding: "16px",
                    borderRadius: "12px",
                    background: "var(--bg-default)",
                    border: "1px solid var(--border-card)",
                    color: "var(--text-primary)",
                    fontFamily: "inherit",
                    resize: "vertical",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
              </div>

              <button
                onClick={sendNotification}
                disabled={sending}
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "12px",
                  background: sending
                    ? "var(--border-subtle)"
                    : "var(--primary)",
                  color: "#fff",
                  border: "none",
                  fontWeight: 700,
                  fontSize: "16px",
                  cursor: sending ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  boxShadow: sending
                    ? "none"
                    : "0 4px 15px rgba(108,59,255,0.3)",
                }}
              >
                {sending
                  ? "Sending..."
                  : `Send to ${selectedUsers.length} users`}
                {!sending && <Send size={18} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNotificationsPage;
