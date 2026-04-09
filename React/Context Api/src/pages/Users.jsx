import { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";

const Users = () => {
  const { users, loading } = useContext(UserContext);
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{
      padding: "40px",
      background: "#0f172a",
      minHeight: "100vh",
      color: "#fff"
    }}>
      {/* Heading */}
      <h1 style={{
        fontSize: "32px",
        marginBottom: "20px",
        fontWeight: "600"
      }}>
        Users Dashboard 🚀
      </h1>

      {/* Search Box */}
      <div style={{
        marginBottom: "30px"
      }}>
        <input
          type="text"
          placeholder="🔍 Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "12px 16px",
            width: "300px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            background: "#1e293b",
            color: "#fff",
            fontSize: "14px"
          }}
        />
      </div>

      {/* Loading */}
      {loading ? (
        <div style={{
          fontSize: "18px",
          opacity: 0.7
        }}>
          Loading users...
        </div>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "25px"
        }}>
          {filteredUsers.map(user => (
            <div
              key={user.id}
              style={{
                background: "#1e293b",
                padding: "20px",
                borderRadius: "12px",
                transition: "0.3s",
                cursor: "pointer",
                border: "1px solid transparent"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.border = "1px solid #38bdf8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.border = "1px solid transparent";
              }}
            >
              <h3 style={{
                marginBottom: "10px",
                fontSize: "18px",
                fontWeight: "600"
              }}>
                {user.name}
              </h3>

              <p style={{
                fontSize: "14px",
                opacity: 0.8
              }}>
                📧 {user.email}
              </p>

              <p style={{
                fontSize: "13px",
                marginTop: "10px",
                color: "#38bdf8"
              }}>
                🏢 {user.company.name}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* No Results */}
      {!loading && filteredUsers.length === 0 && (
        <p style={{ marginTop: "20px", opacity: 0.6 }}>
          No users found...
        </p>
      )}
    </div>
  );
};

export default Users;