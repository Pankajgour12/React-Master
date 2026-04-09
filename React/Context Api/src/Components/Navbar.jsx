import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 30px",
      background: "#111",
      color: "#fff"
    }}>
      <h2>MyApp</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "#fff" }}>Home</Link>
        <Link to="/users" style={{ color: "#fff" }}>Users</Link>
      </div>
    </nav>
  );
};

export default Navbar;