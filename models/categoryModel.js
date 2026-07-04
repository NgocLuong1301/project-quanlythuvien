const db = require("../config/db");

// Lấy tất cả thể loại
const getAllCategories = (callback) => {
  db.query("SELECT * FROM categories", callback);
};

// Lấy thể loại theo ID
const getCategoryById = (id, callback) => {
  db.query("SELECT * FROM categories WHERE id = ?", [id], callback);
};

// Thêm thể loại
const createCategory = (category, callback) => {
  const sql = `
        INSERT INTO categories (name, description)
        VALUES (?, ?)
    `;

  db.query(sql, [category.name, category.description], callback);
};

// Cập nhật thể loại
const updateCategory = (id, category, callback) => {
  const sql = `
        UPDATE categories
        SET
            name = ?,
            description = ?
        WHERE id = ?
    `;

  db.query(sql, [category.name, category.description, id], callback);
};

// Xóa thể loại
const deleteCategory = (id, callback) => {
  db.query("DELETE FROM categories WHERE id = ?", [id], callback);
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
