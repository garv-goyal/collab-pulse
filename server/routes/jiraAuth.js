const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const jwt = require('jsonwebtoken');
const querystring = require('querystring');
const User = require('../models/User');

const CLIENT_ID = process.env.JIRA_CLIENT_ID;
const CLIENT_SECRET = process.env.JIRA_CLIENT_SECRET;
const REDIRECT_URI = process.env.JIRA_REDIRECT_URI || "http://localhost:5001/api/auth/jira/callback";
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

router.get('/jira', (req, res) => {
  const authorizeUrl = `https://auth.atlassian.com/authorize?${querystring.stringify({
    audience: 'api.atlassian.com',
    client_id: CLIENT_ID,
    scope: 'read:jira-user read:jira-work',
    redirect_uri: REDIRECT_URI,
    response_type: 'code',
    prompt: 'consent'
  })}`;
  res.redirect(authorizeUrl);
});

router.get('/jira/callback', async (req, res) => {
  const code = req.query.code;
  try {
    const tokenResponse = await fetch('https://auth.atlassian.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        grant_type: 'authorization_code',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
        redirect_uri: REDIRECT_URI
      })
    });
    const tokenData = await tokenResponse.json();
    const access_token = tokenData.access_token;

    // Fetch Jira user data (using Atlassian API)
    const userResponse = await fetch('https://api.atlassian.com/me', {
      headers: { 'Authorization': `Bearer ${access_token}` }
    });
    const userData = await userResponse.json();
    const email = userData.email;
    const name = userData.name;
    const jiraId = userData.account_id;
    
    let dbUser = await User.findOne({ email });
    if (!dbUser) {
      dbUser = new User({ email, password: '', jiraId, name, isVerified: true });
    } else if (!dbUser.jiraId) {
      dbUser.jiraId = jiraId;
    }
    await dbUser.save();

    const appToken = jwt.sign({ userId: dbUser._id, email: dbUser.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.redirect(`${FRONTEND_URL}/dashboard?token=${appToken}`);
  } catch (error) {
    console.error('Jira OAuth error:', error);
    res.status(500).json({ error: 'Jira authentication failed' });
  }
});

module.exports = router;
