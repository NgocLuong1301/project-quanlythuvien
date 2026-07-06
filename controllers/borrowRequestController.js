const borrowRequestModel = require("../models/borrowRequestModel");
// Tạo yêu cầu mượn
const createBorrowRequest = (req, res) => {
  const { user_id, books } = req.body;

  borrowRequestModel.createBorrowRequest(user_id, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Tạo yêu cầu thất bại",
      });
    }
    // Lấy ID của yêu cầu mượn vừa tạo
    const request_id = result.insertId;

    let count = 0;

    books.forEach((book) => {
      borrowRequestModel.createBorrowRequestDetail(
        request_id,
        book.book_id,
        book.quantity,
        (err) => {
          if (err) {
            console.log(err);

            return res.status(500).json({
              success: false,
              message: "Lỗi thêm chi tiết",
            });
          }
          count++;

          if (count === books.length) {
            res.status(201).json({
              success: true,
              message: "Gửi yêu cầu mượn thành công",
            });
          }
        },
      );
    });
  });
};

module.exports = {
  createBorrowRequest,
};
