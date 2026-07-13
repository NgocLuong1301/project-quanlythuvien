import { useState } from "react";
import "./Books.css";

function Books() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "ReactJS",
      author: "Facebook",
      category: "Programming",
      quantity: 10,
    },
    {
      id: 2,
      title: "NodeJS",
      author: "Ryan Dahl",
      category: "Programming",
      quantity: 8,
    },
  ]);

  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    quantity: "",
  });

  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const saveBook = () => {
    if (
      !form.title ||
      !form.author ||
      !form.category ||
      !form.quantity
    )
      return;

    if (editingId) {
      setBooks(
        books.map((book) =>
          book.id === editingId
            ? {
                ...book,
                ...form,
              }
            : book
        )
      );

      setEditingId(null);
    } else {
      setBooks([
        ...books,
        {
          id: books.length + 1,
          ...form,
        },
      ]);
    }

    setForm({
      title: "",
      author: "",
      category: "",
      quantity: "",
    });
  };

  const editBook = (book) => {
    setForm(book);
    setEditingId(book.id);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="books">

      <div className="page-header">
        <h2>Book Management</h2>
      </div>

      <div className="book-form">

        <input
          name="title"
          placeholder="Book name"
          value={form.title}
          onChange={handleChange}
        />

        <input
          name="author"
          placeholder="Author"
          value={form.author}
          onChange={handleChange}
        />

        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
        />

        <input
          name="quantity"
          placeholder="Quantity"
          value={form.quantity}
          onChange={handleChange}
        />

        <button onClick={saveBook}>
          {editingId ? "Update" : "Add"}
        </button>

      </div>

      <table>

        <thead>

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Author</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {books.map((book) => (

            <tr key={book.id}>

              <td>{book.id}</td>

              <td>{book.title}</td>

              <td>{book.author}</td>

              <td>{book.category}</td>

              <td>{book.quantity}</td>

              <td>

                <button
                  className="edit-btn"
                  onClick={() => editBook(book)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteBook(book.id)}
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Books;