const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['employer', 'househelp'] },
  location: String,
  skills: [String],
  profilePic: String, // 🆕 URL to profile image
  bio: String // 🆕 short description
});

module.exports = mongoose.model('User', userSchema);

