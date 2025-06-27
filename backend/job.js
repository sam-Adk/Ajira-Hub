const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  role: { type: String, required: true },
  location: { type: String, required: true },
  jobType: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  postedByRole: { type: String, enum: ["employer", "househelp"], required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Job", jobSchema);

