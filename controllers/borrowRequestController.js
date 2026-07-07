const borrowRequestModel = require("../models/borrowRequestModel");
const borrowModel = require("../models/borrowModel");
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
const getAllBorrowRequests = (req, res) => {
  borrowRequestModel.getAllBorrowRequests((err, result) => {
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
const getBorrowRequestById = (req, res) => {
  borrowRequestModel.getBorrowRequestById(req.params.id, (err, result) => {
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
const approveBorrowRequest = (req, res) => {
  const id = req.params.id;
  const { status } = req.body;

  borrowRequestModel.updateBorrowRequestStatus(id, status, (err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Cập nhật thất bại",
      });
    }

    // Nếu từ chối thì kết thúc
    if (status === "Từ chối") {
      return res.json({
        success: true,
        message: "Đã từ chối yêu cầu",
      });
    }

    // Lấy thông tin request
    borrowRequestModel.getBorrowRequestInfo(id, (err, request) => {
      console.log("request =", request);

      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }
      const user_id = request[0].user_id;

      // Tạo phiếu mượn
      borrowModel.createBorrow(user_id, (err, result) => {
        console.log("==========");
        console.log("err =", err);
        console.log("result =", result);

        if (err) {
          return res.status(500).json(err);
        }
        const borrow_id = result.insertId;

        // Lấy danh sách sách
        borrowRequestModel.getBorrowRequestBooks(id, (err, books) => {
          console.log("books =", books);

          if (err) {
            console.log("getBorrowRequestBooks err =", err);
            return res.status(500).json(err);
          }

          let count = 0;

          books.forEach((book) => {
            console.log("book =", book);

            borrowModel.createBorrowDetail(
              borrow_id,
              book.book_id,
              book.quantity,
              (err) => {
                console.log("createBorrowDetail err =", err);

                if (err) {
                  return res.status(500).json(err);
                }

                borrowModel.decreaseBookQuantity(
                  book.book_id,
                  book.quantity,
                  (err) => {
                    console.log("decreaseBookQuantity err =", err);

                    if (err) {
                      return res.status(500).json(err);
                    }

                    count++;

                    if (count === books.length) {
                      res.json({
                        success: true,
                        message: "Duyệt yêu cầu thành công",
                      });
                    }
                  },
                );
              },
            );
          });
        });
      });
    });
  });
};
module.exports = {
  createBorrowRequest,
  getAllBorrowRequests,
  getBorrowRequestById,
  approveBorrowRequest,
};
