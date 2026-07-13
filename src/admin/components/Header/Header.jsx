import "./Header.css";

function Header() {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <header className="header">

      <div>
        <input
          className="search"
          type="text"
          placeholder="Search..."
        />
      </div>

      <div className="right">

        <span className="bell">🔔</span>

        <img
          src="https://i.pravatar.cc/50"
          alt="avatar"
        />

        <div>
          <h4>Admin</h4>
          <p>Administrator</p>
        </div>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </header>
  );
}

export default Header;