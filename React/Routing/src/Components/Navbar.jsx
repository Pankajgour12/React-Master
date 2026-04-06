import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        
        <h1 className="text-2xl font-bold text-rose-500">MyApp</h1>

      
        <div className="flex gap-8 text-lg font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-rose-500 border-b-2 border-rose-500 pb-1"
                : "text-gray-700 hover:text-rose-400 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-rose-500 border-b-2 border-rose-500 pb-1"
                : "text-gray-700 hover:text-rose-400 transition"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-rose-500 border-b-2 border-rose-500 pb-1"
                : "text-gray-700 hover:text-rose-400 transition"
            }
          >
            Contact
          </NavLink>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;