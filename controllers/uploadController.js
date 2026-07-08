const db = require("../config/db");

const uploadBookImage = (req, res) => {
  const id = req.params.id;

  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "Chưa chọn ảnh",
    });
  }

  const image = req.file.filename;

  const sql = `
    UPDATE books
    SET image = ?
    WHERE id = ?
  `;

  db.query(sql, [image, id], (err) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      success: true,
      message: "Upload thành công",
      image,
    });
  });
};

module.exports = {
  uploadBookImage,
};
