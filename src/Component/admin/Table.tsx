import React from "react";

interface Column<T> {
  key: keyof T | "actions";
  label: string;
  render?: (row: T) => React.ReactNode;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  loading?: boolean;
  page?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  limit?: number;
  onLimitChange?: (limit: number) => void;
}

const Table = <T extends Record<string, any>>({
  columns,
  data,
  loading,
  page,
  totalPages,
  onPageChange,
  limit,
  onLimitChange,
}: TableProps<T>) => {
  return (
    <div style={{ overflowX: "auto" }}>
      <style>
        {`
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
          }
          .skeleton-box {
            height: 16px;
            width: 80%;
            background: var(--border-subtle, rgba(0,0,0,0.05));
            border-radius: 4px;
            animation: pulse 1.5s infinite ease-in-out;
          }
        `}
      </style>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "var(--bg-surface)",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          border: "1px solid var(--border-card)",
          minWidth: "600px",
        }}
      >
        <thead>
          <tr
            style={{
              background: "var(--bg-default)",
              borderBottom: "1px solid var(--border-card)",
            }}
          >
            {columns.map((col, idx) => (
              <th
                key={String(col.key) + idx}
                style={{
                  padding: "16px",
                  textAlign: "left",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                }}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            Array.from({ length: limit || 5 }).map((_, rowIndex) => (
              <tr
                key={`skeleton-${rowIndex}`}
                style={{
                  borderBottom: "1px solid var(--border-subtle)",
                }}
              >
                {columns.map((_, colIndex) => (
                  <td
                    key={`skeleton-col-${colIndex}`}
                    style={{
                      padding: "16px",
                      verticalAlign: "middle",
                    }}
                  >
                    <div
                      className="skeleton-box"
                      style={{
                        width:
                          colIndex === 0
                            ? "60%"
                            : colIndex === columns.length - 1
                              ? "40%"
                              : "80%",
                      }}
                    />
                  </td>
                ))}
              </tr>
            ))
          ) : data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                style={{
                  padding: "40px",
                  textAlign: "center",
                  color: "var(--text-secondary)",
                }}
              >
                No records found.
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                style={{
                  borderBottom: "1px solid var(--border-subtle)",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "var(--bg-default)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                {columns.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    style={{
                      padding: "16px",
                      fontSize: "14px",
                      color: "var(--text-primary)",
                      verticalAlign: "middle",
                    }}
                  >
                    {col.render
                      ? col.render(row)
                      : (row[col.key as keyof T] as React.ReactNode)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>

      {((totalPages && totalPages > 1) || onLimitChange) && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px",
            borderTop: "1px solid var(--border-card)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {onLimitChange && (
              <>
                <span
                  style={{ fontSize: "14px", color: "var(--text-secondary)" }}
                >
                  Items per page:
                </span>
                <select
                  value={limit || 10}
                  onChange={(e) => {
                    const newLimit = Number(e.target.value);
                    onLimitChange(newLimit);
                    if (onPageChange) onPageChange(1); // Reset to page 1
                  }}
                  style={{
                    padding: "6px 10px",
                    borderRadius: "8px",
                    border: "1px solid var(--border-card)",
                    background: "var(--bg-default)",
                    color: "var(--text-primary)",
                    cursor: "pointer",
                    outline: "none",
                    fontFamily: "inherit",
                    fontSize: "14px",
                  }}
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              </>
            )}
          </div>

          {totalPages && totalPages > 1 ? (
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <button
                onClick={() => onPageChange && page && onPageChange(page - 1)}
                disabled={page === 1}
                style={{
                  padding: "6px 12px",
                  borderRadius: "8px",
                  border: "1px solid var(--border-card)",
                  background: "var(--bg-default)",
                  color:
                    page === 1
                      ? "var(--text-secondary)"
                      : "var(--text-primary)",
                  cursor: page === 1 ? "not-allowed" : "pointer",
                  opacity: page === 1 ? 0.5 : 1,
                }}
              >
                Prev
              </button>
              <span
                style={{ fontSize: "14px", color: "var(--text-secondary)" }}
              >
                Page {page} of {totalPages}
              </span>
              <button
                onClick={() => onPageChange && page && onPageChange(page + 1)}
                disabled={page === totalPages}
                style={{
                  padding: "6px 12px",
                  borderRadius: "8px",
                  border: "1px solid var(--border-card)",
                  background: "var(--bg-default)",
                  color:
                    page === totalPages
                      ? "var(--text-secondary)"
                      : "var(--text-primary)",
                  cursor: page === totalPages ? "not-allowed" : "pointer",
                  opacity: page === totalPages ? 0.5 : 1,
                }}
              >
                Next
              </button>
            </div>
          ) : (
            <div />
          )}
        </div>
      )}
    </div>
  );
};

export default Table;
