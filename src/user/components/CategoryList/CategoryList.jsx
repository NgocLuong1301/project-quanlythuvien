import "./CategoryList.css";

const categories = [
  "Programming",
  "Novel",
  "Science",
  "History",
  "Fantasy",
  "Business",
];

function CategoryList() {
  return (
    <section className="category-list">

      <h2>Categories</h2>

      <div className="category-grid">

        {categories.map((item) => (
          <div className="category-card" key={item}>
            {item}
          </div>
        ))}

      </div>

    </section>
  );
}

export default CategoryList;