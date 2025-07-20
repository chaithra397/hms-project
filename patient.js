const express = require("express");
const router = express.Router();

const patients = [
  { id: 1, name: "Anita", age: 34, disease: "Flu" },
  { id: 2, name: "Vijay", age: 42, disease: "Diabetes" }
];

router.get("/list", (req, res) => {
  res.json(patients);
});

router.post("/register", (req, res) => {
  const newPatient = req.body;
  patients.push(newPatient);
  res.status(201).json({ message: "Patient added", patient: newPatient });
});

module.exports = router;
