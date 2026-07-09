import "./BorrowRequest.css";

const requests = [
  {
    id: 1,
    title: "Clean Code",
    date: "2026-07-10",
    status: "Pending",
  },
  {
    id: 2,
    title: "Spring Boot",
    date: "2026-07-08",
    status: "Approved",
  },
  {
    id: 3,
    title: "Harry Potter",
    date: "2026-07-05",
    status: "Rejected",
  },
];

function BorrowRequest() {
  return (
    <div className="borrow-request">

      <h2>Borrow Requests</h2>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Book</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {requests.map((item) => (

            <tr key={item.id}>

              <td>{item.id}</td>

              <td>{item.title}</td>

              <td>{item.date}</td>

              <td>{item.status}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default BorrowRequest;