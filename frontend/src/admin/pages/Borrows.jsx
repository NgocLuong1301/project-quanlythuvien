import { useState } from "react";
import "./Borrows.css";

function Borrows() {
  const [borrows, setBorrows] = useState([
    {
      id: 1,
      user: "Nguyễn Văn A",
      book: "ReactJS",
      borrowDate: "01/07/2026",
      dueDate: "10/07/2026",
      status: "Borrowing",
    },
    {
      id: 2,
      user: "Trần Văn B",
      book: "NodeJS",
      borrowDate: "02/07/2026",
      dueDate: "12/07/2026",
      status: "Returned",
    },
  ]);

  const returnBook = (id) => {
    setBorrows(
      borrows.map((item) =>
        item.id === id
          ? { ...item, status: "Returned" }
          : item
      )
    );
  };

  return (
    <div className="borrows">

      <div className="page-header">
        <h2>Borrow Management</h2>
      </div>

      <table>

        <thead>

          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Book</th>
            <th>Borrow Date</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {borrows.map((item) => (

            <tr key={item.id}>

              <td>{item.id}</td>

              <td>{item.user}</td>

              <td>{item.book}</td>

              <td>{item.borrowDate}</td>

              <td>{item.dueDate}</td>

              <td>{item.status}</td>

              <td>

                {item.status === "Borrowing" && (

                  <button
                    className="return-btn"
                    onClick={() => returnBook(item.id)}
                  >
                    Return
                  </button>

                )}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Borrows;