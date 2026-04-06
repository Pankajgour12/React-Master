import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex gap-10 justify-center font-semibold text-2xl mt-10">
      <NavLink
        to="/"
        style={( e ) => ({
          color: e.isActive ? "oklch(64.6% 0.222 41.116) " : "black",
        })}
      >
        Home
      </NavLink>
       <NavLink
        to="/about"
        style={( e ) => ({
          color: e.isActive ? "oklch(64.6% 0.222 41.116) " : "black",
        })}
      >
       About
      </NavLink>
     <NavLink
        to="/contact"
        style={( e ) => ({
          color: e.isActive ? "oklch(64.6% 0.222 41.116) " : "black",
        })}
      >
        Contact
      </NavLink>
    </div>
  );
}

export default Navbar;
