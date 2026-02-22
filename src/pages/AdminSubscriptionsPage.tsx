import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../Component/admin/AdminSidebar";
import Table from "../Component/admin/Table";

const AdminSubscriptionsPage = () => {
  const [subscriptions, setSubscriptions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      navigate("/admin/login");
      return;
    }

    const fetchSubscriptions = async () => {
      setLoading(true);
      try {
        const apiUrl =
          import.meta.env.VITE_BE_URL || "http://localhost:8000/api";
        const response = await fetch(
          `${apiUrl}/admin/subscriptions?page=${page}&limit=${limit}&search=${encodeURIComponent(search)}`,
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
          throw new Error("Failed to fetch subscriptions");
        }

        const data = await response.json();
        if (data.data) {
          setSubscriptions(data.data.data || []);
          setTotalPages(data.data.totalPages || 1);
        }
      } catch (error) {
        console.error("Error loading subscription data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscriptions();
  }, [navigate, page, limit, search]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    setSearch(searchInput);
  };

  const columns = [
    {
      key: "user_name",
      label: "User Name",
      render: (row: any) => row.user_name || "Unknown",
    },
    { key: "user_email", label: "User Email" },
    { key: "plan_id", label: "Plan", render: (row: any) => row.plan_id || "-" },
    {
      key: "status",
      label: "Status",
      render: (row: any) => (
        <span
          style={{
            padding: "4px 10px",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: 600,
            background:
              row.status === "active"
                ? "rgba(0,212,200,0.15)"
                : "rgba(255, 77, 77, 0.15)",
            border:
              row.status === "active"
                ? "1px solid rgba(0,212,200,0.3)"
                : "1px solid rgba(255, 77, 77, 0.3)",
            color: row.status === "active" ? "#00D4C8" : "#ff4d4d",
          }}
        >
          {row.status || "Unknown"}
        </span>
      ),
    },
    {
      key: "current_period_end",
      label: "Period End",
      render: (row: any) =>
        row.current_period_end
          ? new Date(row.current_period_end).toLocaleDateString()
          : "-",
    },
    {
      key: "created_at",
      label: "Created At",
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
          marginLeft: "250px", // matching sidebar width
          flex: 1,
          padding: "40px",
          overflowY: "auto",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
                Subscriptions
              </h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px" }}>
                View and manage user subscriptions and plans.
              </p>
            </div>

            <form
              onSubmit={handleSearch}
              style={{ display: "flex", gap: "8px" }}
            >
              <input
                type="text"
                placeholder="Search by User Name or Email"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                style={{
                  padding: "10px 16px",
                  borderRadius: "8px",
                  border: "1px solid var(--border-card)",
                  background: "var(--bg-surface)",
                  color: "var(--text-primary)",
                  minWidth: "250px",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "10px 20px",
                  borderRadius: "8px",
                  background: "var(--primary)",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Search
              </button>
            </form>
          </header>

          <Table
            columns={columns}
            data={subscriptions}
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

export default AdminSubscriptionsPage;
