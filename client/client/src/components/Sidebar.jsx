import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard"
    },
    {
      name: "Tickets",
      path: "/tickets"
    },
    {
      name: "Create Ticket",
      path: "/tickets/new"
    }
  ];

  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white p-6">

      <h1 className="text-2xl font-bold text-blue-400 mb-10">
        CRM System
      </h1>

      <nav className="space-y-3">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block px-4 py-3 rounded-lg transition duration-200 ${
              location.pathname === item.path
                ? "bg-blue-600"
                : "hover:bg-gray-800"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

    </div>
  );
}

export default Sidebar;