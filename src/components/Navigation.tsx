import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">
            🚀 Saas Dashboard
          </div>
          <div className="flex gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                  : "text-gray-600 hover:text-blue-600 transition pb-1"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                  : "text-gray-600 hover:text-blue-600 transition pb-1"
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
