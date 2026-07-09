import { useState } from "react";
import "./BorrowRequests.css";

function BorrowRequests() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      user: "Nguyễn Văn A",
      book: "Lập trình React",
      status: "Pending",
    },
    {
      id: 2,
      user: "Trần Văn B",
      book: "NodeJS",
      status: "Approved",
    },
    {
      id: 3,
      user: "Lê Văn C",
      book: "Java",
      status: "Rejected",
    },
  ]);

  const updateStatus = (id, status) => {
    setRequests(
      requests.map((item) =>
        item.id === id ? { ...item, status } : item
      )
    );
  };

  return (
    <div className="borrow-requests">

      <div className="page-header">
        <h2>Borrow Requests</h2>
      </div>

      <table>

        <thead>

          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Book</th>
            <th>Status</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {requests.map((item) => (

            <tr key={item.id}>

              <td>{item.id}</td>

              <td>{item.user}</td>

              <td>{item.book}</td>

              <td>{item.status}</td>

              <td>

                <button
                  className="approve"
                  onClick={() => updateStatus(item.id, "Approved")}
                >
                  Approve
                </button>

                <button
                  className="reject"
                  onClick={() => updateStatus(item.id, "Rejected")}
                >
                  Reject
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default BorrowRequests;