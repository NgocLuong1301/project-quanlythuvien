import BookCard from "../BookCard/BookCard";
import "./NewArrival.css";

const books = [
  {
    id: 7,
    title: "NodeJS",
    author: "Ryan Dahl",
    category: "Programming",
  },
  {
    id: 8,
    title: "Python",
    author: "Guido van Rossum",
    category: "Programming",
  },
  {
    id: 9,
    title: "Docker",
    author: "Docker Inc.",
    category: "Technology",
  },
];

function NewArrival() {
  return (
    <section className="new-arrival">

      <h2>New Arrivals</h2>

      <div className="books-grid">

        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}

      </div>

    </section>
  );
}

export default NewArrival;