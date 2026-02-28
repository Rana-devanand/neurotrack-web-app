import { useState, useEffect } from "react";
import AdminSidebar from "../Component/admin/AdminSidebar";
import Table from "../Component/admin/Table";
import { useNavigate } from "react-router-dom";
import { UserCheck, ShieldOff } from "lucide-react";

const AdminTestersPage = () => {
  const [testers, setTesters] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchTesters = async () => {
    try {
      const token = localStorage.getItem("admin_token");
      if (!token) {
        navigate("/admin/login");
        return;
      }
      const apiUrl = import.meta.env.VITE_BE_URL || "http://localhost:8000/api";
      const response = await fetch(`${apiUrl}/testers`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch testers");
      }

      const data = await response.json();
      setTesters(data.data || []);
    } catch (error) {
      console.error("Error loading testers:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTesters();
  }, [navigate]);

  const toggleStatus = async (id: string, currentStatus: boolean) => {
    try {
      const token = localStorage.getItem("admin_token");
      const apiUrl = import.meta.env.VITE_BE_URL || "http://localhost:8000/api";
      const response = await fetch(`${apiUrl}/testers/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ active: !currentStatus }),
      });

      if (response.ok) {
        setTesters((prev) =>
          prev.map((t) => (t.id === id ? { ...t, active: !currentStatus } : t)),
        );
      } else {
        throw new Error("Failed to update status");
      }
    } catch (error) {
      alert("Error updating tester status");
    }
  };

  const columns = [
    { key: "name", label: "Name", render: (row: any) => row.name || "Unknown" },
    { key: "email", label: "Email" },
    { key: "message", label: "Message" },
    {
      key: "status",
      label: "Status",
      render: (row: any) => (
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "4px 10px",
            borderRadius: "6px",
            fontSize: "12px",
            fontWeight: 700,
            textTransform: "uppercase",
            background:
              row.active !== false
                ? "rgba(0, 212, 200, 0.1)"
                : "rgba(255, 78, 107, 0.1)",
            color: row.active !== false ? "#00D4C8" : "#FF4E6B",
          }}
        >
          {row.active !== false ? "Active" : "Blocked"}
        </div>
      ),
    },
    {
      key: "actions",
      label: "Actions",
      render: (row: any) => (
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            onClick={() => toggleStatus(row.id, row.active !== false)}
            title={row.active !== false ? "Block Tester" : "Unblock Tester"}
            style={{
              background: "transparent",
              border: "1px solid var(--border-card)",
              borderRadius: "8px",
              padding: "6px",
              cursor: "pointer",
              color: row.active !== false ? "#FF4E6B" : "#00D4C8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s",
            }}
          >
            {row.active !== false ? (
              <ShieldOff size={16} />
            ) : (
              <UserCheck size={16} />
            )}
          </button>
        </div>
      ),
    },
    {
      key: "created_at",
      label: "Applied At",
      render: (row: any) => new Date(row.created_at).toLocaleString(),
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
          <header style={{ marginBottom: "40px" }}>
            <h1
              style={{
                fontSize: "2rem",
                color: "var(--text-primary)",
                marginBottom: "8px",
              }}
            >
              Tester Applications
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "15px" }}>
              View all people who applied to be beta testers for NeuroTrack.
            </p>
          </header>

          <Table
            columns={columns}
            data={testers}
            loading={loading}
            page={1}
            totalPages={1}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminTestersPage;
