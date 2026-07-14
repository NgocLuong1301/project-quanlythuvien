import { Link } from "react-router-dom";
import "./BookCard.css";

function BookCard({ book }) {

  return (

    <div className="book-card">

      <img
        src={`https://picsum.photos/200/300?random=${book.id}`}
        alt={book.title}
      />

      <div className="book-info">

        <h3>{book.title}</h3>

        <p>{book.author}</p>

        <span>{book.category}</span>

        <Link to={`/books/${book.id}`}>
          <button>View Detail</button>
        </Link>

      </div>

    </div>

  );

}

export default BookCard;