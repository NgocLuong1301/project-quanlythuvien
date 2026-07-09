import "./FilterBar.css";

const categories = [
  "All",
  "Programming",
  "Novel",
  "Fantasy",
  "Science",
];

function FilterBar() {
  return (
    <div className="filter-bar">

      {categories.map((item) => (
        <button key={item}>
          {item}
        </button>
      ))}

    </div>
  );
}

export default FilterBar;