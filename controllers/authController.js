const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// đăng ký người dùng mới
const register = (req, res) => {
  const { full_name, email, password, phone, address } = req.body;

  userModel.findByEmail(email, async (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Lỗi server",
      });
    }

    if (result.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Email đã tồn tại",
      });
    }
// Mã hóa mật khẩu trước khi lưu vào cơ sở dữ liệu
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
      full_name,
      email,
      password: hashedPassword,
      phone,
      address,
    };

    userModel.createUser(user, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Đăng ký thất bại",
        });
      }

      res.status(201).json({
        success: true,
        message: "Đăng ký thành công",
      });
    });
  });
};
// đăng nhập người dùng
const login = (req, res) => {
  const { email, password } = req.body;

  userModel.loginUser(email, async (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Lỗi server",
      });
    }

    if (result.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Email không tồn tại",
      });
    }

    const user = result[0];

    // So sánh mật khẩu
    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res.status(400).json({
        success: false,
        message: "Sai mật khẩu",
      });
    }

    // Tạo Token
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      "library_secret_key",
      {
        expiresIn: "1d",
      },
    );

    res.status(200).json({
      success: true,
      message: "Đăng nhập thành công",
      token: token,
      user: {
        id: user.id,
        full_name: user.full_name,
        email: user.email,
      },
    });
  });
};

module.exports = {
  register,
  login,
};
