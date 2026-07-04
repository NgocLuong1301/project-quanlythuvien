const authorModel = require("../models/authorModel");

// Lấy tất cả
const getAllAuthors = (req, res) => {
  authorModel.getAllAuthors((err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Lỗi server",
      });
    }

    res.json({
      success: true,
      data: result,
    });
  });
};

// Lấy theo ID
const getAuthorById = (req, res) => {
  authorModel.getAuthorById(req.params.id, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
      });
    }

    res.json({
      success: true,
      data: result,
    });
  });
};

// Thêm
const createAuthor = (req, res) => {
  authorModel.createAuthor(req.body, (err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Thêm thất bại",
      });
    }

    res.status(201).json({
      success: true,
      message: "Thêm thành công",
    });
  });
};

// Sửa
const updateAuthor = (req, res) => {
  authorModel.updateAuthor(req.params.id, req.body, (err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Cập nhật thất bại",
      });
    }

    res.json({
      success: true,
      message: "Cập nhật thành công",
    });
  });
};

// Xóa
const deleteAuthor = (req, res) => {
  authorModel.deleteAuthor(req.params.id, (err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Xóa thất bại",
      });
    }

    res.json({
      success: true,
      message: "Xóa thành công",
    });
  });
};

module.exports = {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
