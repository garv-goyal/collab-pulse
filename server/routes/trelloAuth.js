const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const jwt = require('jsonwebtoken');
const querystring = require('querystring');
const User = require('../models/User');

const CLIENT_ID = process.env.TRELLO_CLIENT_ID;
const CLIENT_SECRET = process.env.TRELLO_CLIENT_SECRET;
const REDIRECT_URI = process.env.TRELLO_REDIRECT_URI || "http://localhost:5001/api/auth/trello/callback";
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

// For Trello, OAuth2 endpoints vary. Here we assume OAuth2 flow:
router.get('/trello', (req, res) => {
  const authorizeUrl = `https://trello.com/1/OAuthAuthorizeToken?${querystring.stringify({
    response_type: 'code',
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    scope: 'read,account',
    expiration: 'never',
    name: 'CollabPulse'
  })}`;
  res.redirect(authorizeUrl);
});

router.get('/trello/callback', async (req, res) => {
  const code = req.query.code;
  try {
    // Exchange code for an access token (this endpoint may differ for Trello)
    const tokenResponse = await fetch('https://trello.com/1/OAuthGetAccessToken', {
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
    
    // Fetch Trello user data
    const userResponse = await fetch(`https://api.trello.com/1/members/me?key=${CLIENT_ID}&token=${access_token}`);
    const userData = await userResponse.json();
    const email = userData.email || `${userData.username}@trello.com`; // Trello might not return email, so use a fallback
    const name = userData.fullName;
    const trelloId = userData.id;
    
    let dbUser = await User.findOne({ email });
    if (!dbUser) {
      dbUser = new User({ email, password: '', trelloId, name, isVerified: true });
    } else if (!dbUser.trelloId) {
      dbUser.trelloId = trelloId;
    }
    await dbUser.save();

    const appToken = jwt.sign({ userId: dbUser._id, email: dbUser.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.redirect(`${FRONTEND_URL}/dashboard?token=${appToken}`);
  } catch (error) {
    console.error('Trello OAuth error:', error);
    res.status(500).json({ error: 'Trello authentication failed' });
  }
});

module.exports = router;
