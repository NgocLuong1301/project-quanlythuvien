const db = require("../config/db");

const getDashboard = (callback) => {
  const sql = `
    SELECT
      (SELECT COUNT(*) FROM books) AS books,
      (SELECT COUNT(*) FROM users) AS users,
      (SELECT COUNT(*) FROM authors) AS authors,
      (SELECT COUNT(*) FROM categories) AS categories,
      (SELECT COUNT(*) FROM publishers) AS publishers,
      (SELECT COUNT(*) FROM borrow_request WHERE status='Chờ duyệt') AS borrowRequests,
      (SELECT COUNT(*) FROM borrow WHERE status='Đang mượn') AS borrows,
      (SELECT COUNT(*) FROM borrow WHERE status='Quá hạn') AS overdues
  `;

  db.query(sql, callback);
};

module.exports = {
  getDashboard,
};
