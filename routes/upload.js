const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const uploadController = require("../controllers/uploadController");

router.put(
  "/book/:id",
  upload.single("image"),
  uploadController.uploadBookImage,
);

module.exports = router;
