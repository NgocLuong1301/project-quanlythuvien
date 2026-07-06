const express = require("express");
const router = express.Router();
const borrowRequestController = require("../controllers/borrowRequestController");

router.post("/", borrowRequestController.createBorrowRequest);
module.exports = router;
