const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const jwt = require('jsonwebtoken');
const querystring = require('querystring');
const User = require('../models/User'); // Adjust path if needed

const CLIENT_ID = process.env.SLACK_CLIENT_ID;
const CLIENT_SECRET = process.env.SLACK_CLIENT_SECRET;
const REDIRECT_URI = process.env.SLACK_REDIRECT_URI || "http://localhost:5001/api/auth/slack/callback";
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

// Redirect to Slack's OAuth consent screen
router.get('/slack', (req, res) => {
  const authorizeUrl = `https://slack.com/oauth/v2/authorize?${querystring.stringify({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    scope: 'users:read,channels:read'  // Adjust scopes as needed
  })}`;
  res.redirect(authorizeUrl);
});

// Callback endpoint for Slack OAuth
router.get('/slack/callback', async (req, res) => {
  const code = req.query.code;
  try {
    // Exchange code for an access token
    const tokenResponse = await fetch('https://slack.com/api/oauth.v2.access', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: querystring.stringify({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
        redirect_uri: REDIRECT_URI
      })
    });
    const tokenData = await tokenResponse.json();
    const access_token = tokenData.access_token;
    
    // Fetch Slack user info (using a demo endpoint)
    const userResponse = await fetch('https://slack.com/api/users.identity', {
      headers: { 'Authorization': `Bearer ${access_token}` }
    });
    const userData = await userResponse.json();
    const { user } = userData;
    const email = user.email;
    const name = user.name;
    
    // Create or update the user in the database
    let dbUser = await User.findOne({ email });
    if (!dbUser) {
      dbUser = new User({ email, password: '', slackId: user.id, name, isVerified: true });
    } else if (!dbUser.slackId) {
      dbUser.slackId = user.id;
    }
    await dbUser.save();
    
    // Generate JWT and redirect to frontend
    const appToken = jwt.sign({ userId: dbUser._id, email: dbUser.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.redirect(`${FRONTEND_URL}/dashboard?token=${appToken}`);
  } catch (error) {
    console.error('Slack OAuth error:', error);
    res.status(500).json({ error: 'Slack authentication failed' });
  }
});

module.exports = router;
