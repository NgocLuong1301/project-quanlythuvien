import "./Header.css";

function Header() {
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

      </div>

    </header>
  );
}

export default Header;