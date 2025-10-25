const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Import all controller functions
const { registerUser, loginUser, updateProfile } = require("../controllers/userController");

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}${ext}`);
  }
});
const upload = multer({ storage });

// Routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/update', upload.single('profilePic'), updateProfile);

module.exports = router;








