const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
// đăng ký người dùng mới
router.post("/register", authController.register);
// đăng nhập người dùng
router.post("/login", authController.login);

module.exports = router;
