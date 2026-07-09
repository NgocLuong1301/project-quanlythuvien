import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <h1>Dashboard</h1>

      <div className="cards">

        <div className="card blue">
          <h3>Total Books</h3>
          <h1>1,250</h1>
        </div>

        <div className="card green">
          <h3>Users</h3>
          <h1>385</h1>
        </div>

        <div className="card orange">
          <h3>Borrowing</h3>
          <h1>86</h1>
        </div>

        <div className="card red">
          <h3>Late Return</h3>
          <h1>12</h1>
        </div>

      </div>

      <div className="table-box">

        <div className="table-title">
          New Books
        </div>

        <table>

          <thead>

            <tr>

              <th>ID</th>

              <th>Name</th>

              <th>Author</th>

              <th>Status</th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td>1</td>

              <td>ReactJS</td>

              <td>Facebook</td>

              <td className="available">Available</td>

            </tr>

            <tr>

              <td>2</td>

              <td>NodeJS</td>

              <td>Ryan Dahl</td>

              <td className="borrow">Borrowed</td>

            </tr>

            <tr>

              <td>3</td>

              <td>Java</td>

              <td>Oracle</td>

              <td className="available">Available</td>

            </tr>

            <tr>

              <td>4</td>

              <td>Database</td>

              <td>MySQL</td>

              <td className="available">Available</td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Dashboard;