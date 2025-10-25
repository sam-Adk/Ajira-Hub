// Import your User model
const User = require('../models/User'); // Update path if needed

// Register user
const registerUser = async (req, res) => {
  try {
    // registration logic here
    res.status(200).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Registration failed" });
  }
};

// Login user
const loginUser = async (req, res) => {
  try {
    // login logic here
    res.status(200).json({ message: "User logged in successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Login failed" });
  }
};

// Update profile
const updateProfile = async (req, res) => {
  const { id } = req.body;
  try {
    const updateData = {};
    if (req.body.bio) updateData.bio = req.body.bio;
    if (req.file) updateData.profilePic = `http://localhost:5000/uploads/${req.file.filename}`;

    const user = await User.findByIdAndUpdate(id, updateData, { new: true });
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ user });
  } catch (err) {
    console.error("Profile update error:", err);
    res.status(500).json({ message: "Error updating profile" });
  }
};

// Export all functions
module.exports = { registerUser, loginUser, updateProfile };





