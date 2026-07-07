const db = require("../config/db");

// Tạo phiếu mượn
const createBorrow = (user_id, callback) => {
  const sql = `
        INSERT INTO borrow(user_id, borrow_date)
        VALUES (?, CURDATE())
    `;

  db.query(sql, [user_id], callback);
};

// Thêm chi tiết phiếu mượn
const createBorrowDetail = (borrow_id, book_id, quantity, callback) => {
  const sql = `
        INSERT INTO borrow_detail(borrow_id, book_id, quantity)
        VALUES (?, ?, ?)
    `;

  db.query(sql, [borrow_id, book_id, quantity], callback);
};

// Giảm số lượng sách
const decreaseBookQuantity = (book_id, quantity, callback) => {
  const sql = `
        UPDATE books
        SET quantity = quantity - ?
        WHERE id = ?
    `;

  db.query(sql, [quantity, book_id], callback);
};
const getAllBorrows = (callback) => {
  const sql = `
    SELECT
      b.id,
      u.full_name,
      b.borrow_date,
      b.due_date,
      b.return_date,
      b.status
    FROM borrow b
    JOIN users u
      ON b.user_id = u.id
    ORDER BY b.id DESC
  `;

  db.query(sql, callback);
};
const getBorrowById = (id, callback) => {
  const sql = `
    SELECT
      b.id,
      bk.title,
      bd.quantity,
      b.borrow_date,
      b.due_date,
      b.return_date,
      b.status
    FROM borrow b

    JOIN borrow_detail bd
      ON b.id = bd.borrow_id

    JOIN books bk
      ON bd.book_id = bk.id

    WHERE b.id = ?
  `;

  db.query(sql, [id], callback);
};
const getBorrowBooks = (borrow_id, callback) => {
  const sql = `
    SELECT *
    FROM borrow_detail
    WHERE borrow_id = ?
  `;

  db.query(sql, [borrow_id], callback);
};
const returnBorrow = (borrow_id, callback) => {
  const sql = `
    UPDATE borrow
    SET
      return_date = CURDATE(),
      status = 'Đã trả'
    WHERE id = ?
  `;

  db.query(sql, [borrow_id], callback);
};
const increaseBookQuantity = (book_id, quantity, callback) => {
  const sql = `
    UPDATE books
    SET quantity = quantity + ?
    WHERE id = ?
  `;

  db.query(sql, [quantity, book_id], callback);
};
module.exports = {
  createBorrow,
  createBorrowDetail,
  decreaseBookQuantity,
  getAllBorrows,
  getBorrowById,
  getBorrowBooks,
  returnBorrow,
  increaseBookQuantity,
};
