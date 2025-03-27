// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String }, // Optional: empty if using OAuth
  name: { type: String },
  googleId: { type: String },
  githubId: { type: String },
  slackId: { type: String },
  jiraId: { type: String },
  trelloId: { type: String },
  isVerified: { type: Boolean, default: false },
  verificationToken: { type: String }
});

module.exports = mongoose.model('User', userSchema);
