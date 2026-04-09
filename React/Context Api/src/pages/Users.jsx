import { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";


const Users = () => {
  const { users, loading } = useContext(UserContext);
  const [search, setSearch] = useState("");

  // Filter logic (dynamic UI)
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "30px" }}>
      <h1>Users</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          margin: "20px 0",
          width: "300px"
        }}
      />

      {/* Loading State */}
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px"
        }}>
          {filteredUsers.map(user => (
            <div key={user.id} style={{
              padding: "15px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              background: "#f9f9f9"
            }}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.company.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;