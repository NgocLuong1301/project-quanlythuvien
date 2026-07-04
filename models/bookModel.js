const db = require("../config/db");

// Lấy tất cả sách
const getAllBooks = (callback) => {
  const sql = `
        SELECT
            books.*,
            authors.name AS author_name,
            publishers.name AS publisher_name,
            categories.name AS category_name
        FROM books
        LEFT JOIN authors
            ON books.author_id = authors.id
        LEFT JOIN publishers
            ON books.publisher_id = publishers.id
        LEFT JOIN categories
            ON books.category_id = categories.id
    `;

  db.query(sql, callback);
};
// Thêm sách mới vào cơ sở dữ liệu
const createBook = (book, callback) => {
  const sql = `
        INSERT INTO books
        (title, author_id, publisher_id, category_id, isbn,
        published_year, quantity, image, description)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

  db.query(
    sql,
    [
      book.title,
      book.author_id,
      book.publisher_id,
      book.category_id,
      book.isbn,
      book.published_year,
      book.quantity,
      book.image,
      book.description,
    ],
    callback,
  );
};
//Lấy chi tiết sách theo ID
const getBookById = (id, callback) => {
  db.query("SELECT * FROM books WHERE id = ?", [id], callback);
};
// Sửa sách
const updateBook = (id, book, callback) => {
  const sql = `
        UPDATE books
        SET title = ?, author_id = ?, publisher_id = ?, category_id = ?,
            isbn = ?, published_year = ?, quantity = ?, image = ?, description = ?
        WHERE id = ?
    `;

  db.query(
    sql,
    [
      book.title,
      book.author_id,
      book.publisher_id,
      book.category_id,
      book.isbn,
      book.published_year,
      book.quantity,
      book.image,
      book.description,
      id,
    ],
    callback,
  );
};
// Xóa sách
const deleteBook = (id, callback) => {
  db.query("DELETE FROM books WHERE id=?", [id], callback);
};
module.exports = {
  getAllBooks,
  createBook,
  getBookById,
  updateBook,
  deleteBook,
};
