// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Make sure this file exists and defines a User model

// Initialize OAuth2Client with your Google credentials
const oauth2Client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

// ----------------------
// Google OAuth Endpoints
// ----------------------

// GET /api/auth/google
// Redirects the user to Google’s OAuth consent screen.
router.get('/google', (req, res) => {
  const authorizeUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',  // to get a refresh token
    prompt: 'consent',       // force consent screen to always show (for testing)
    scope: ['profile', 'email']
  });
  res.redirect(authorizeUrl);
});

// GET /api/auth/google/callback
// Handles the OAuth callback from Google.
router.get('/google/callback', async (req, res) => {
  const code = req.query.code;
  try {
    // Exchange the code for tokens
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    // Verify the ID token to get user info
    const ticket = await oauth2Client.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.GOOGLE_CLIENT_ID
    });
    const payload = ticket.getPayload();
    const { email, name, sub: googleId } = payload;

    // Optional: Create or update user in the database
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({
        email,
        password: '', // Not used when logging in with Google
        isVerified: true,
        googleId,
        name
      });
    } else {
      if (!user.googleId) {
        user.googleId = googleId;
      }
    }
    await user.save();

    // Generate a JWT for your app session
    const appToken = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Redirect to your frontend with the token (you can use query params or set a cookie)
    // For example, if your frontend is running on localhost:3000:
    res.redirect(`http://localhost:5173?token=${appToken}`);
  } catch (error) {
    console.error('Google OAuth error:', error);
    res.status(500).json({ error: 'Google authentication failed' });
  }
});

// ----------------------
// Existing endpoints (e.g., email/password login) would go here...
// For now, we focus on Google OAuth only.

module.exports = router;
