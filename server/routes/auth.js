// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Use environment variables to set redirect URI (fallback to local development URI)
const redirectUri = process.env.GOOGLE_REDIRECT_URI || "http://localhost:5001/api/auth/google/callback";

// Initialize OAuth2Client with your credentials
const oauth2Client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  redirectUri
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

    // Create or update user in the database
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

    // Redirect to your frontend using the FRONTEND_URL environment variable
    const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";
    res.redirect(`${frontendUrl}/dashboard?token=${appToken}`);

  } catch (error) {
    console.error('Google OAuth error:', error);
    res.status(500).json({ error: 'Google authentication failed' });
  }
});

module.exports = router;
