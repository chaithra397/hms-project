const express = require("express");
const router = express.Router();

const bills = [];

router.get("/all", (req, res) => {
  res.json(bills);
});

router.post("/create", (req, res) => {
  const newBill = req.body;
  bills.push(newBill);
  res.status(201).json({ message: "Bill generated", bill: newBill });
});

module.exports = router;
