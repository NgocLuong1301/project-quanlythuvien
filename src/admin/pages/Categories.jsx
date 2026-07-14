import { useState } from "react";
import "./Categories.css";

function Categories() {
  const [categories, setCategories] = useState([
    { id: 1, name: "Programming" },
    { id: 2, name: "Novel" },
    { id: 3, name: "Science" },
  ]);

  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState(null);

  const saveCategory = () => {
    if (!name.trim()) return;

    if (editingId) {
      setCategories(
        categories.map((item) =>
          item.id === editingId
            ? { ...item, name }
            : item
        )
      );

      setEditingId(null);
    } else {
      setCategories([
        ...categories,
        {
          id: categories.length + 1,
          name,
        },
      ]);
    }

    setName("");
  };

  const editCategory = (item) => {
    setName(item.name);
    setEditingId(item.id);
  };

  const deleteCategory = (id) => {
    setCategories(
      categories.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="categories">

      <div className="page-header">
        <h2>Category Management</h2>
      </div>

      <div className="category-form">

        <input
          placeholder="Category name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={saveCategory}>
          {editingId ? "Update" : "Add"}
        </button>

      </div>

      <table>

        <thead>

          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {categories.map((item) => (

            <tr key={item.id}>

              <td>{item.id}</td>

              <td>{item.name}</td>

              <td>

                <button
                  className="edit-btn"
                  onClick={() => editCategory(item)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteCategory(item.id)}
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

export default Categories;