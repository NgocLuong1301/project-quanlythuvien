import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const menuItems = [
  { to: "/admin/dashboard", label: "📊 Dashboard" },
  { to: "/admin/books", label: "📚 Books" },
  { to: "/admin/categories", label: "🗂 Categories" },
  { to: "/admin/authors", label: "✍ Authors" },
  { to: "/admin/borrow", label: "📖 Borrow" },
  { to: "/admin/users", label: "👤 Users" },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>📚 LIBRARY</h2>
        <p>Management</p>
      </div>

      <nav>
        {menuItems.map((item) => (
          <NavLink key={item.to} to={item.to}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;