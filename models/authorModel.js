const db = require("../config/db");

// Lấy tất cả tác giả
const getAllAuthors = (callback) => {
  db.query("SELECT * FROM authors", callback);
};

// Lấy 1 tác giả
const getAuthorById = (id, callback) => {
  db.query("SELECT * FROM authors WHERE id = ?", [id], callback);
};

// Thêm tác giả
const createAuthor = (author, callback) => {
  const sql = `
        INSERT INTO authors(name, country, birthday, biography)
        VALUES (?, ?, ?, ?)
    `;

  db.query(
    sql,
    [author.name, author.country, author.birthday, author.biography],
    callback,
  );
};

// Cập nhật tác giả
const updateAuthor = (id, author, callback) => {
  const sql = `
        UPDATE authors
        SET
            name = ?,
            country = ?,
            birthday = ?,
            biography = ?
        WHERE id = ?
    `;

  db.query(
    sql,
    [author.name, author.country, author.birthday, author.biography, id],
    callback,
  );
};

// Xóa tác giả
const deleteAuthor = (id, callback) => {
  db.query("DELETE FROM authors WHERE id = ?", [id], callback);
};

module.exports = {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
