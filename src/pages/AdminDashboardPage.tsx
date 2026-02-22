import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../Component/admin/AdminSidebar";
import Table from "../Component/admin/Table";

const AdminDashboardPage = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      navigate("/admin/login");
      return;
    }

    const fetchUsers = async () => {
      try {
        const apiUrl =
          import.meta.env.VITE_BE_URL || "http://localhost:8000/api";
        const skip = (page - 1) * limit;
        const response = await fetch(
          `${apiUrl}/users?skip=${skip}&limit=${limit}`,
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
        console.error("Error loading dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [navigate, page, limit]);

  const handleAction = (user: any) => {
    alert(`Action for user: ${user.email}`);
  };

  const columns = [
    { key: "name", label: "Name", render: (row: any) => row.name || "Unknown" },
    { key: "email", label: "Email" },
    {
      key: "role",
      label: "Role",
      render: (row: any) => (
        <span
          style={{
            padding: "4px 10px",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: 600,
            background:
              row.role === "ADMIN" ? "rgba(108,59,255,0.15)" : "rgba(0,0,0,0)",
            border:
              row.role === "ADMIN"
                ? "1px solid rgba(108,59,255,0.3)"
                : "1px solid var(--border-subtle)",
            color:
              row.role === "ADMIN"
                ? "var(--primary-light)"
                : "var(--text-secondary)",
          }}
        >
          {row.role}
        </span>
      ),
    },
    {
      key: "active",
      label: "Status",
      render: (row: any) => (
        <span
          style={{ color: row.active ? "#00D4C8" : "#ff4d4d", fontWeight: 600 }}
        >
          {row.active ? "Active" : "Inactive"}
        </span>
      ),
    },
    {
      key: "actions",
      label: "Actions",
      render: (row: any) => (
        <button
          onClick={() => handleAction(row)}
          style={{
            padding: "6px 14px",
            borderRadius: "8px",
            background: "var(--bg-default)",
            border: "1px solid var(--border-card)",
            color: "var(--text-primary)",
            cursor: "pointer",
            fontSize: "13px",
          }}
        >
          Manage
        </button>
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
          marginLeft: "250px", // matching sidebar width
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
              Users Management
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "15px" }}>
              Manage all registered users, roles and their activity status.
            </p>
          </header>

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
      </div>
    </div>
  );
};

export default AdminDashboardPage;
