const borrowModel = require("../models/borrowModel");
const getAllBorrows = (req, res) => {
  borrowModel.getAllBorrows((err, result) => {
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
const getBorrowById = (req, res) => {
  borrowModel.getBorrowById(req.params.id, (err, result) => {
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
const returnBorrow = (req, res) => {
  const borrow_id = req.params.id;

  console.log("borrow_id =", borrow_id);

  borrowModel.getBorrowBooks(borrow_id, (err, books) => {
    if (err) {
      return res.status(500).json(err);
    }

    console.log("books =", books);

    if (books.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Không tìm thấy sách trong phiếu mượn",
      });
    }

    borrowModel.returnBorrow(borrow_id, (err) => {
      console.log("update borrow =", err);

      if (err) {
        return res.status(500).json(err);
      }

      let count = 0;

      books.forEach((book) => {
        console.log(book);

        borrowModel.increaseBookQuantity(book.book_id, book.quantity, (err) => {
          console.log("increase =", err);

          if (err) {
            return res.status(500).json(err);
          }

          count++;

          if (count === books.length) {
            res.json({
              success: true,
              message: "Trả sách thành công",
            });
          }
        });
      });
    });
  });
};
module.exports = {
  getAllBorrows,
  getBorrowById,
  returnBorrow,
};
