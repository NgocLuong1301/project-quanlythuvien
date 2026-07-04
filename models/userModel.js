const db = require("../config/db");
// kiểm tra xem email đã tồn tại trong cơ sở dữ liệu hay chưa
const findByEmail = (email, callback) => {
  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], callback);
};
// kiểm tra thông tin đăng nhập của người dùng
const loginUser = (email, callback) => {
  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], callback);
};
// thêm người dùng mới vào cơ sở dữ liệu
const createUser = (user, callback) => {
  const sql = `
        INSERT INTO users
        (full_name, email, password, phone, address)
        VALUES (?, ?, ?, ?, ?)
    `;

  db.query(
    sql,
    [user.full_name, user.email, user.password, user.phone, user.address],
    callback,
  );
};
module.exports = {
  findByEmail,
  createUser,
  loginUser,
};
