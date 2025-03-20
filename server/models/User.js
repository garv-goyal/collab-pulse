// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String }, // Optional: empty if using Google OAuth
  name: { type: String },
  googleId: { type: String },
  isVerified: { type: Boolean, default: false },
  verificationToken: { type: String }
});

module.exports = mongoose.model('User', userSchema);
