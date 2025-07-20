const express = require("express");
const router = express.Router();

const doctors = [
  { id: 1, name: "Dr. Asha", specialization: "Cardiologist" },
  { id: 2, name: "Dr. Ravi", specialization: "Dermatologist" }
];

// List all doctors
router.get("/list", (req, res) => {
  res.json(doctors);
});

// Register a new doctor
router.post("/register", (req, res) => {
  const newDoctor = req.body;
  doctors.push(newDoctor);
  res.status(201).json({ message: "Doctor registered", doctor: newDoctor });
});

module.exports = router;