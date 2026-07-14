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
      image: "https://via.placeholder.com/70x90",
    },
    {
      id: 2,
      title: "NodeJS",
      author: "Ryan Dahl",
      category: "Programming",
      quantity: 8,
      image: "https://via.placeholder.com/70x90",
    },
  ]);

  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    quantity: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setPreview(URL.createObjectURL(file));

    setForm({
      ...form,
      image: file,
    });
  };

  const saveBook = () => {
    if (
      !form.title ||
      !form.author ||
      !form.category ||
      !form.quantity
    ) {
      return;
    }

    if (editingId) {
      setBooks(
        books.map((book) =>
          book.id === editingId
            ? {
                ...book,
                ...form,
                image: preview || book.image,
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
          title: form.title,
          author: form.author,
          category: form.category,
          quantity: form.quantity,
          image: preview,
        },
      ]);
    }

    setForm({
      title: "",
      author: "",
      category: "",
      quantity: "",
      image: null,
    });

    setPreview(null);
  };

  const editBook = (book) => {
    setForm(book);
    setPreview(book.image);
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

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />

        {preview && (
          <img
            src={preview}
            alt="Preview"
            width="120"
            style={{
              marginTop: "10px",
              borderRadius: "8px",
              display: "block",
            }}
          />
        )}

        <button onClick={saveBook}>
          {editingId ? "Update" : "Add"}
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
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

              <td>
                {book.image ? (
                  <img
                    src={book.image}
                    alt={book.title}
                    width="70"
                    height="90"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  "No Image"
                )}
              </td>

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