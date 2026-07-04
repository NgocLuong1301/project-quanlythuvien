const bookModel = require("../models/bookModel");
// Lấy tất cả sách
const getAllBooks = (req, res) => {
  bookModel.getAllBooks((err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Lỗi server",
      });
    }

    res.status(200).json({
      success: true,
      data: result,
    });
  });
};
// Thêm sách mới
const createBook = (req, res) => {
  bookModel.createBook(req.body, (err, result) => {
    if (err) {
      console.error(err);

      return res.status(500).json({
        success: false,
        message: "Thêm sách thất bại",
      });
    }

    res.status(201).json({
      success: true,
      message: "Thêm sách thành công",
    });
  });
};
// Lấy chi tiết sách theo ID
const getBookById = (req, res) => {
  bookModel.getBookById(req.params.id, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
      });
    }

    res.json(result);
  });
};
// Sửa sách
const updateBook = (req, res) => {
  bookModel.updateBook(req.params.id, req.body, (err) => {
    if (err) {
      return res.status(500).json({
        success: false,
      });
    }

    res.json({
      success: true,
      message: "Cập nhật thành công",
    });
  });
};
// Xóa sách
const deleteBook = (req, res) => {
  bookModel.deleteBook(req.params.id, (err) => {
    if (err) {
      return res.status(500).json({
        success: false,
      });
    }

    res.json({
      success: true,
      message: "Xóa thành công",
    });
  });
};
module.exports = {
  getAllBooks,
  createBook,
  getBookById,
  updateBook,
  deleteBook,
};
