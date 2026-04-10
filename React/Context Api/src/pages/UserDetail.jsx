import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const UserDetail = () => {
  const { id } = useParams(); // 🔥 URL se id
  const navigate = useNavigate();
  const { users, loading } = useContext(UserContext);

  const user = users.find(u => u.id === Number(id));

  if (loading) return <h2>Loading...</h2>;

  if (!user) return <h2>User not found</h2>;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f172a",
      color: "#fff",
      padding: "40px"
    }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: "20px",
          padding: "8px 12px",
          background: "#38bdf8",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        ⬅ Back
      </button>

      <h1 style={{ fontSize: "32px" }}>{user.name}</h1>

      <div style={{
        marginTop: "20px",
        background: "#1e293b",
        padding: "20px",
        borderRadius: "10px"
      }}>
        <p>📧 {user.email}</p>
        <p>📞 {user.phone}</p>
        <p>🌐 {user.website}</p>
        <p style={{ marginTop: "10px", color: "#38bdf8" }}>
          🏢 {user.company.name}
        </p>
      </div>
    </div>
  );
};

export default UserDetail;