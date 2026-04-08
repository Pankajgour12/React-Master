import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        
        <h1 className="text-2xl font-bold text-orange-500">MyApp</h1>

      
        <div className="flex gap-8 text-lg font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 border-b-2 border-orange-500 pb-1"
                : "text-gray-700 hover:text-orange-400 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/service"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 border-b-2 border-orange-500 pb-1"
                : "text-gray-700 hover:text-orange-400 transition"
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/show"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 border-b-2 border-orange-500 pb-1"
                : "text-gray-700 hover:text-orange-400 transition"
            }
          >
          Show
          </NavLink>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;