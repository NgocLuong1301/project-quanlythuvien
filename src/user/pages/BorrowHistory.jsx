import "./BorrowHistory.css";

const history = [
  {
    id: 1,
    title: "Clean Code",
    borrowDate: "2026-07-01",
    returnDate: "2026-07-10",
  },
  {
    id: 2,
    title: "Spring Boot",
    borrowDate: "2026-06-15",
    returnDate: "2026-06-25",
  },
  {
    id: 3,
    title: "Harry Potter",
    borrowDate: "2026-05-20",
    returnDate: "2026-05-30",
  },
];

function BorrowHistory() {
  return (
    <div className="borrow-history">

      <h2>Borrow History</h2>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Book</th>
            <th>Borrow Date</th>
            <th>Return Date</th>
          </tr>
        </thead>

        <tbody>

          {history.map((item) => (

            <tr key={item.id}>

              <td>{item.id}</td>

              <td>{item.title}</td>

              <td>{item.borrowDate}</td>

              <td>{item.returnDate}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default BorrowHistory;