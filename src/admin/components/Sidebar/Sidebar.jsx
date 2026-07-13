import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const menuItems = [
  { to: "/admin/dashboard", label: "📊 Dashboard" },
  { to: "/admin/books", label: "📚 Books" },
  { to: "/admin/authors", label: "✍ Authors" },
  { to: "/admin/categories", label: "🗂 Categories" },
  { to: "/admin/publishers", label: "🏢 Publishers" },
  { to: "/admin/borrow-requests", label: "📩 Borrow Requests" },
  { to: "/admin/borrows", label: "📖 Borrows" },
  { to: "/admin/users", label: "👤 Users" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>📚 LIBRARY</h2>
        <p>Management</p>
      </div>
      <nav>
        {menuItems.map((item) => (
          <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? "active" : "")}>{item.label}</NavLink>
        ))}
      </nav>
    </aside>
  );
}