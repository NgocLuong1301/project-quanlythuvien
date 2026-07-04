const categoryModel = require("../models/categoryModel");

// Lấy tất cả thể loại
const getAllCategories = (req, res) => {
  categoryModel.getAllCategories((err, result) => {
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

// Lấy theo ID
const getCategoryById = (req, res) => {
  categoryModel.getCategoryById(req.params.id, (err, result) => {
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

// Thêm thể loại
const createCategory = (req, res) => {
  categoryModel.createCategory(req.body, (err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Thêm thể loại thất bại",
      });
    }

    res.status(201).json({
      success: true,
      message: "Thêm thể loại thành công",
    });
  });
};

// Cập nhật thể loại
const updateCategory = (req, res) => {
  categoryModel.updateCategory(req.params.id, req.body, (err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Cập nhật thất bại",
      });
    }

    res.status(200).json({
      success: true,
      message: "Cập nhật thành công",
    });
  });
};

// Xóa thể loại
const deleteCategory = (req, res) => {
  categoryModel.deleteCategory(req.params.id, (err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Xóa thất bại",
      });
    }

    res.status(200).json({
      success: true,
      message: "Xóa thành công",
    });
  });
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
