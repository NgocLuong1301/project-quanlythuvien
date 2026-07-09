import "./BookDetail.css";

function BookDetail() {
  return (
    <div className="book-detail">

      <div className="book-image">
        📚
      </div>

      <div className="book-info">

        <h1>Clean Code</h1>

        <p>
          <strong>Author:</strong> Robert C. Martin
        </p>

        <p>
          <strong>Category:</strong> Programming
        </p>

        <p>
          <strong>Status:</strong> Available
        </p>

        <p className="description">
          Clean Code is one of the best books for learning software craftsmanship.
        </p>

        <button>Borrow Book</button>

      </div>

    </div>
  );
}

export default BookDetail;