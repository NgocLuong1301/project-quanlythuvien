const db = require("../config/db");

// Tạo yêu cầu mượn
const createBorrowRequest = (user_id, callback) => {
  const sql = `
        INSERT INTO borrow_request(user_id, request_date)
        VALUES (?, CURDATE())
    `;

  db.query(sql, [user_id], callback);
};

// Thêm sách vào chi tiết yêu cầu
const createBorrowRequestDetail = (request_id, book_id, quantity, callback) => {
  const sql = `
        INSERT INTO borrow_request_detail(request_id, book_id, quantity)
        VALUES (?, ?, ?)
    `;

  db.query(sql, [request_id, book_id, quantity], callback);
};

module.exports = {
  createBorrowRequest,
  createBorrowRequestDetail,
};
