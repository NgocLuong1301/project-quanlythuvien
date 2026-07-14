import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        📚 LIBRARY
      </div>

      <nav>

        <NavLink to="/">
          Home
        </NavLink>

        <NavLink to="/books">
          Books
        </NavLink>

        <NavLink to="/favorite">
          Favorite
        </NavLink>

        <NavLink to="/borrow-request">
          Borrow Request
        </NavLink>

        <NavLink to="/borrow-history">
          Borrow History
        </NavLink>

        <NavLink to="/profile">
          Profile
        </NavLink>

        <NavLink to="/login">
          Login
        </NavLink>

        <NavLink to="/register">
          Register
        </NavLink>

      </nav>

    </header>
  );
}

export default Navbar;