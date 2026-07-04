const publisherModel = require("../models/publisherModel");

// Lấy tất cả
const getAllPublishers = (req, res) => {
  publisherModel.getAllPublishers((err, result) => {
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
const getPublisherById = (req, res) => {
  publisherModel.getPublisherById(req.params.id, (err, result) => {
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

// Thêm
const createPublisher = (req, res) => {
  publisherModel.createPublisher(req.body, (err) => {
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

// Cập nhật
const updatePublisher = (req, res) => {
  publisherModel.updatePublisher(req.params.id, req.body, (err) => {
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

// Xóa
const deletePublisher = (req, res) => {
  publisherModel.deletePublisher(req.params.id, (err) => {
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
  getAllPublishers,
  getPublisherById,
  createPublisher,
  updatePublisher,
  deletePublisher,
};
