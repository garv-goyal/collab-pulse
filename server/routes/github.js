// backend/routes/github.js
const express = require('express');
const router = express.Router();
const axios = require('axios');
const querystring = require('querystring');

// Redirect to GitHub's OAuth consent screen
router.get('/', (req, res) => {
  const params = querystring.stringify({
    client_id: process.env.GITHUB_CLIENT_ID,
    redirect_uri: process.env.GITHUB_REDIRECT_URI,
    scope: "repo user"
  });
  res.redirect(`https://github.com/login/oauth/authorize?${params}`);
});

// GitHub OAuth callback
router.get('/callback', async (req, res) => {
  const code = req.query.code;
  try {
    // Exchange code for an access token
    const tokenResponse = await axios.post(
      'https://github.com/login/oauth/access_token',
      {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      { headers: { Accept: 'application/json' } }
    );
    
    const accessToken = tokenResponse.data.access_token;
    
    // Optionally, you can fetch user details here using the access token.
    // Save the token and user data to your database as needed.
    
    // Close the popup or notify the main window of success.
    // One strategy is to redirect to a frontend route that signals success:
    res.redirect(`${process.env.FRONTEND_URL}/integration-success?service=github&token=${accessToken}`);
  } catch (error) {
    console.error('GitHub OAuth error:', error);
    res.status(500).json({ error: 'GitHub authentication failed' });
  }
});

module.exports = router;
