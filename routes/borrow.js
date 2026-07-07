const express = require("express");
const router = express.Router();

const borrowController = require("../controllers/borrowController");

router.get("/", borrowController.getAllBorrows);

router.get("/:id", borrowController.getBorrowById);

router.put("/:id/return", borrowController.returnBorrow);

module.exports = router;
