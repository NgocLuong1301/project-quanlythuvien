import "./SearchBar.css";

function SearchBar({ keyword, setKeyword }) {
  return (
    <div className="search-bar">

      <input
        type="text"
        placeholder="Search books..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

    </div>
  );
}

export default SearchBar;