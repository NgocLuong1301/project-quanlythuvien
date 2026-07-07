const express = require("express");
const router = express.Router();
const borrowRequestController = require("../controllers/borrowRequestController");

router.post("/", borrowRequestController.createBorrowRequest);
router.get("/", borrowRequestController.getAllBorrowRequests);
router.get("/:id", borrowRequestController.getBorrowRequestById);
router.put("/:id/approve", borrowRequestController.approveBorrowRequest);
module.exports = router;
