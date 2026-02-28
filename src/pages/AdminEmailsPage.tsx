import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../Component/admin/AdminSidebar";
import Table from "../Component/admin/Table";

const AdminEmailsPage = () => {
  const [emails, setEmails] = useState<any[]>([]);
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

    const fetchEmails = async () => {
      setLoading(true);
      try {
        const apiUrl =
          import.meta.env.VITE_BE_URL || "http://localhost:8000/api";
        const response = await fetch(
          `${apiUrl}/admin/emails?page=${page}&limit=${limit}&search=${encodeURIComponent(search)}`,
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
          throw new Error("Failed to fetch emails");
        }

        const data = await response.json();
        if (data.data) {
          setEmails(data.data.data || []);
          setTotalPages(data.data.totalPages || 1);
        }
      } catch (error) {
        console.error("Error loading email data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmails();
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
      key: "subject",
      label: "Subject",
      render: (row: any) => row.subject || "-",
    },
    { key: "status", label: "Status" },
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
                Emails Management
              </h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px" }}>
                View and filter user emails with pagination.
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
            data={emails}
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

export default AdminEmailsPage;
