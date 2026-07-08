import "./Authors.css";

function Authors() {
  return (
    <div className="authors">

      <div className="page-header">

        <h1>Author Management</h1>

        <button className="add-btn">
          + Add Author
        </button>

      </div>

      <input
        className="search"
        type="text"
        placeholder="Search author..."
      />

      <table>

        <thead>

          <tr>

            <th>ID</th>

            <th>Author Name</th>

            <th>Nationality</th>

            <th>Books</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>1</td>

            <td>Robert C. Martin</td>

            <td>USA</td>

            <td>35</td>

            <td>

              <button className="edit">Edit</button>

              <button className="delete">Delete</button>

            </td>

          </tr>

          <tr>

            <td>2</td>

            <td>Martin Fowler</td>

            <td>UK</td>

            <td>18</td>

            <td>

              <button className="edit">Edit</button>

              <button className="delete">Delete</button>

            </td>

          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default Authors;