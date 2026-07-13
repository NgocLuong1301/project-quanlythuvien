import { useState } from "react";
import "./Users.css";

function Users() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Nguyễn Văn A",
      email: "vana@gmail.com",
      role: "Student",
      status: "Active",
    },
    {
      id: 2,
      name: "Trần Văn B",
      email: "vanb@gmail.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 3,
      name: "Lê Văn C",
      email: "vanc@gmail.com",
      role: "Student",
      status: "Blocked",
    },
  ]);

  const toggleStatus = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id
          ? {
              ...user,
              status:
                user.status === "Active"
                  ? "Blocked"
                  : "Active",
            }
          : user
      )
    );
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="users">

      <div className="page-header">
        <h2>User Management</h2>
      </div>

      <table>

        <thead>

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {users.map((user) => (

            <tr key={user.id}>

              <td>{user.id}</td>

              <td>{user.name}</td>

              <td>{user.email}</td>

              <td>{user.role}</td>

              <td>{user.status}</td>

              <td>

                <button
                  className="status-btn"
                  onClick={() => toggleStatus(user.id)}
                >
                  {user.status === "Active"
                    ? "Block"
                    : "Active"}
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteUser(user.id)}
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

export default Users;