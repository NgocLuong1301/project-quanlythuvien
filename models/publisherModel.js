const db = require("../config/db");

// Lấy tất cả nhà xuất bản
const getAllPublishers = (callback) => {
  db.query("SELECT * FROM publishers", callback);
};

// Lấy theo ID
const getPublisherById = (id, callback) => {
  db.query("SELECT * FROM publishers WHERE id = ?", [id], callback);
};

// Thêm nhà xuất bản
const createPublisher = (publisher, callback) => {
  const sql = `
        INSERT INTO publishers(name, address, phone, email)
        VALUES (?, ?, ?, ?)
    `;

  db.query(
    sql,
    [publisher.name, publisher.address, publisher.phone, publisher.email],
    callback,
  );
};

// Cập nhật
const updatePublisher = (id, publisher, callback) => {
  const sql = `
        UPDATE publishers
        SET
            name = ?,
            address = ?,
            phone = ?,
            email = ?
        WHERE id = ?
    `;

  db.query(
    sql,
    [publisher.name, publisher.address, publisher.phone, publisher.email, id],
    callback,
  );
};

// Xóa
const deletePublisher = (id, callback) => {
  db.query("DELETE FROM publishers WHERE id = ?", [id], callback);
};

module.exports = {
  getAllPublishers,
  getPublisherById,
  createPublisher,
  updatePublisher,
  deletePublisher,
};
