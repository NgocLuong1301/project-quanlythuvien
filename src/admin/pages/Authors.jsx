import { useState } from "react";
import "./Authors.css";

function Authors() {
  const [authors, setAuthors] = useState([
    { id: 1, name: "Nguyễn Nhật Ánh" },
    { id: 2, name: "Nam Cao" },
    { id: 3, name: "Tô Hoài" },
  ]);

  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState(null);

  const saveAuthor = () => {
    if (!name.trim()) return;

    if (editingId) {
      setAuthors(
        authors.map((item) =>
          item.id === editingId
            ? { ...item, name }
            : item
        )
      );
      setEditingId(null);
    } else {
      setAuthors([
        ...authors,
        {
          id: authors.length + 1,
          name,
        },
      ]);
    }

    setName("");
  };

  const editAuthor = (author) => {
    setName(author.name);
    setEditingId(author.id);
  };

  const deleteAuthor = (id) => {
    setAuthors(authors.filter((item) => item.id !== id));
  };

  return (
    <div className="authors">

      <div className="page-header">
        <h2>Author Management</h2>
      </div>

      <div className="author-form">

        <input
          type="text"
          placeholder="Author name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={saveAuthor}>
          {editingId ? "Update" : "Add"}
        </button>

      </div>

      <table>

        <thead>

          <tr>
            <th>ID</th>
            <th>Author</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {authors.map((author) => (

            <tr key={author.id}>

              <td>{author.id}</td>

              <td>{author.name}</td>

              <td>

                <button
                  className="edit-btn"
                  onClick={() => editAuthor(author)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteAuthor(author.id)}
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

export default Authors;