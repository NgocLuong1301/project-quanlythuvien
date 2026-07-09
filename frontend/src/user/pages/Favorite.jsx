import "./Favorite.css";

const favorites = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
  },
  {
    id: 2,
    title: "Spring Boot",
    author: "Craig Walls",
  },
  {
    id: 3,
    title: "Harry Potter",
    author: "J.K. Rowling",
  },
];

function Favorite() {
  return (
    <div className="favorite-page">

      <h2>My Favorite Books</h2>

      <div className="favorite-grid">

        {favorites.map((book) => (

          <div className="favorite-card" key={book.id}>

            <h3>{book.title}</h3>

            <p>{book.author}</p>

            <button>Remove</button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Favorite;