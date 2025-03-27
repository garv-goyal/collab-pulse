const express = require('express');
const router = express.Router();
const fetch = require('node-fetch'); // For Node 18+ you can use the global fetch if available
const jwt = require('jsonwebtoken');
const querystring = require('querystring');
const User = require('../models/User'); // Adjust path if necessary

// Environment variables for GitHub OAuth
const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const REDIRECT_URI = process.env.GITHUB_REDIRECT_URI || "http://localhost:5001/api/auth/github/callback";
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

// 1. Redirect user to GitHub's OAuth consent screen
router.get('/github', (req, res) => {
  const authorizeUrl = `https://github.com/login/oauth/authorize?${querystring.stringify({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    scope: 'user:email,repo'
  })}`;
  res.redirect(authorizeUrl);
});

// 2. Callback endpoint: exchange code for access token, fetch user data, and create JWT
router.get('/github/callback', async (req, res) => {
  const code = req.query.code;
  try {
    // Exchange the code for an access token
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
        redirect_uri: REDIRECT_URI
      })
    });
    const tokenData = await tokenResponse.json();
    const access_token = tokenData.access_token;
    
    // Fetch GitHub user profile data
    const userResponse = await fetch('https://api.github.com/user', {
      headers: {
        'Authorization': `token ${access_token}`,
        'User-Agent': 'CollabPulse-App'
      }
    });
    const userData = await userResponse.json();
    
    // Fetch the user's verified email (optional)
    const emailResponse = await fetch('https://api.github.com/user/emails', {
      headers: {
        'Authorization': `token ${access_token}`,
        'User-Agent': 'CollabPulse-App'
      }
    });
    const emails = await emailResponse.json();
    const primaryEmailObj = emails.find(email => email.primary && email.verified);
    const email = primaryEmailObj ? primaryEmailObj.email : userData.email;
    
    // Create or update the user in the database
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({
        email,
        password: '', // Not used for OAuth users
        githubId: userData.id,
        name: userData.name || userData.login,
        isVerified: true
      });
    } else {
      if (!user.githubId) {
        user.githubId = userData.id;
      }
    }
    await user.save();
    
    // Generate a JWT for session management
    const appToken = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    
    // Redirect to the frontend dashboard with the token
    res.redirect(`${FRONTEND_URL}/dashboard?token=${appToken}`);
  } catch (error) {
    console.error('GitHub OAuth error:', error);
    res.status(500).json({ error: 'GitHub authentication failed' });
  }
});

module.exports = router;
