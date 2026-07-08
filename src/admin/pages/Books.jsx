import "./Books.css";

function Books() {
  return (
    <div className="books">

      <div className="books-header">

        <h1>Book Management</h1>

        <button className="add-btn">
          + Add Book
        </button>

      </div>

      <div className="search-box">

        <input
          type="text"
          placeholder="Search book..."
        />

      </div>

      <table>

        <thead>

          <tr>

            <th>ID</th>

            <th>Title</th>

            <th>Author</th>

            <th>Category</th>

            <th>Quantity</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>1</td>

            <td>ReactJS</td>

            <td>Facebook</td>

            <td>Programming</td>

            <td>25</td>

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

            <td>NodeJS</td>

            <td>Ryan Dahl</td>

            <td>Programming</td>

            <td>10</td>

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

            <td>3</td>

            <td>Java Core</td>

            <td>Oracle</td>

            <td>Programming</td>

            <td>18</td>

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

export default Books;