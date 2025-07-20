const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Routes
const doctorRoutes = require("./routes/doctor");
const patientRoutes = require("./routes/patient");
const appointmentRoutes = require("./routes/appointment");
const billingRoutes = require("./routes/billing");

app.use(express.json());

// Mounting routes
app.use("/doctors", doctorRoutes);
app.use("/patients", patientRoutes);
app.use("/appointment", appointmentRoutes);
app.use("/billing", billingRoutes);

mongoose.connect("mongodb://localhost:27017/hospitalDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
