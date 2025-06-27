// controllers/userController.js

const updateProfile = async (req, res) => {
  const { id } = req.body;

  try {
    const updateData = {};

    // Add bio if present
    if (req.body.bio) {
      updateData.bio = req.body.bio;
    }

    // Add profile picture URL if file was uploaded
    if (req.file) {
      updateData.profilePic = `http://localhost:5000/uploads/${req.file.filename}`;
    }

    // Update user
    const user = await User.findByIdAndUpdate(id, updateData, { new: true });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (err) {
    console.error("Profile update error:", err); // Log the actual error
    res.status(500).json({ message: "Error updating profile" });
  }
};





