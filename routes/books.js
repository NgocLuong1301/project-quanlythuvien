const express = require("express");

const router = express.Router();

const bookController = require("../controllers/bookController");
// Lấy tất cả sách
router.get("/", bookController.getAllBooks);
// Thêm sách mới
router.post("/", bookController.createBook);
// Lấy chi tiết sách theo ID
router.get("/:id", bookController.getBookById);
// Sửa sách
router.put("/:id", bookController.updateBook);
// Xóa sách
router.delete("/:id", bookController.deleteBook);

module.exports = router;
