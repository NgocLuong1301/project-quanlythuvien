import "./Categories.css";

function Categories() {
  return (
    <div className="categories">

      <div className="page-header">

        <h1>Category Management</h1>

        <button className="add-btn">
          + Add Category
        </button>

      </div>

      <input
        className="search"
        placeholder="Search category..."
      />

      <table>

        <thead>

          <tr>

            <th>ID</th>

            <th>Category Name</th>

            <th>Description</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>1</td>

            <td>Programming</td>

            <td>Programming books</td>

            <td>

              <button className="edit">
                Edit
              </button>

              <button className="delete">
                Delete
              </button>

            </td>

          </tr>

          <tr>

            <td>2</td>

            <td>Science</td>

            <td>Science books</td>

            <td>

              <button className="edit">
                Edit
              </button>

              <button className="delete">
                Delete
              </button>

            </td>

          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default Categories;