import "./Borrow.css";

function Borrow() {
  return (
    <div className="borrow">

      <div className="borrow-header">

        <h1>Borrow Management</h1>

      </div>

      <table>

        <thead>

          <tr>

            <th>ID</th>
            <th>Reader</th>
            <th>Book</th>
            <th>Borrow Date</th>
            <th>Return Date</th>
            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>1</td>
            <td>Nguyễn Văn A</td>
            <td>ReactJS</td>
            <td>10/06/2026</td>
            <td>17/06/2026</td>

            <td>
              <span className="borrowing">
                Borrowing
              </span>
            </td>

          </tr>

          <tr>

            <td>2</td>
            <td>Trần Văn B</td>
            <td>NodeJS</td>
            <td>05/06/2026</td>
            <td>12/06/2026</td>

            <td>
              <span className="returned">
                Returned
              </span>
            </td>

          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default Borrow;