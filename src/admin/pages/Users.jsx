import "./Users.css";

function Users() {
  return (
    <div className="users">

      <div className="users-header">

        <h1>User Management</h1>

        <button className="add-btn">
          + Add User
        </button>

      </div>

      <div className="search-box">

        <input
          type="text"
          placeholder="Search user..."
        />

      </div>

      <table>

        <thead>

          <tr>

            <th>ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>1</td>
            <td>Nguyễn Văn A</td>
            <td>admin@gmail.com</td>
            <td>Admin</td>

            <td>
              <span className="active">Active</span>
            </td>

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
            <td>Trần Văn B</td>
            <td>user@gmail.com</td>
            <td>User</td>

            <td>
              <span className="active">Active</span>
            </td>

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
            <td>Lê Văn C</td>
            <td>abc@gmail.com</td>
            <td>User</td>

            <td>
              <span className="lock">Locked</span>
            </td>

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

export default Users;