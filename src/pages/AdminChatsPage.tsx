import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../Component/admin/AdminSidebar";
import Table from "../Component/admin/Table";

const AdminChatsPage = () => {
  const [chats, setChats] = useState<any[]>([]);
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

    const fetchChats = async () => {
      setLoading(true);
      try {
        const apiUrl =
          import.meta.env.VITE_BE_URL || "http://localhost:8000/api";
        const response = await fetch(
          `${apiUrl}/admin/chats?page=${page}&limit=${limit}&search=${encodeURIComponent(search)}`,
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
          throw new Error("Failed to fetch chats");
        }

        const data = await response.json();
        if (data.data) {
          setChats(data.data.data || []);
          setTotalPages(data.data.totalPages || 1);
        }
      } catch (error) {
        console.error("Error loading chat data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchChats();
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
              row.role === "user"
                ? "rgba(0,212,200,0.15)"
                : "rgba(108,59,255,0.15)",
            border:
              row.role === "user"
                ? "1px solid rgba(0,212,200,0.3)"
                : "1px solid rgba(108,59,255,0.3)",
            color: row.role === "user" ? "#00D4C8" : "var(--primary-light)",
          }}
        >
          {row.role === "user" ? "User" : "AI"}
        </span>
      ),
    },
    {
      key: "message",
      label: "Message",
      render: (row: any) => (
        <div
          style={{
            maxWidth: "400px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          title={row.message}
        >
          {row.message || "-"}
        </div>
      ),
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
                Chat History
              </h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px" }}>
                View and filter AI chat history by user.
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
            data={chats}
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

export default AdminChatsPage;
