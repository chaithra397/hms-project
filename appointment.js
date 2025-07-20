const express = require("express");
const router = express.Router();

const appointments = [];

router.get("/list", (req, res) => {
  res.json(appointments);
});

router.post("/book", (req, res) => {
  const newAppointment = req.body;
  appointments.push(newAppointment);
  res.status(201).json({ message: "Appointment booked", appointment: newAppointment });
});

module.exports = router;
