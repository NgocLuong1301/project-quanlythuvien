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
// Admin xem tất cả yêu cầu
const getAllBorrowRequests = (callback) => {
  const sql = `
        SELECT
            br.id,
            u.full_name,
            br.request_date,
            br.status
        FROM borrow_request br
        JOIN users u
            ON br.user_id = u.id
        ORDER BY br.id DESC
    `;

  db.query(sql, callback);
};
// Lấy chi tiết yêu cầu mượn
const getBorrowRequestById = (id, callback) => {
  const sql = `
        SELECT
            br.id,
            u.full_name,
            b.title,
            brd.quantity,
            br.request_date,
            br.status
        FROM borrow_request br

        JOIN users u
            ON br.user_id = u.id

        JOIN borrow_request_detail brd
            ON br.id = brd.request_id

        JOIN books b
            ON brd.book_id = b.id

        WHERE br.id = ?
    `;

  db.query(sql, [id], callback);
};
// Cập nhật trạng thái yêu cầu
const updateBorrowRequestStatus = (id, status, callback) => {
  const sql = `
        UPDATE borrow_request
        SET status = ?
        WHERE id = ?
    `;

  db.query(sql, [status, id], callback);
};

// Lấy thông tin request
const getBorrowRequestInfo = (id, callback) => {
  const sql = `
        SELECT *
        FROM borrow_request
        WHERE id = ?
    `;

  db.query(sql, [id], callback);
};

// Lấy danh sách sách của request
const getBorrowRequestBooks = (id, callback) => {
  const sql = `
        SELECT *
        FROM borrow_request_detail
        WHERE request_id = ?
    `;

  db.query(sql, [id], callback);
};

module.exports = {
  createBorrowRequest,
  createBorrowRequestDetail,
  getAllBorrowRequests,
  getBorrowRequestById,
  updateBorrowRequestStatus,
  getBorrowRequestInfo,
  getBorrowRequestBooks,
};
