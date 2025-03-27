// server/routes/user.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
// You should have middleware to verify JWT and set req.user accordingly

router.get('/integrations', async (req, res) => {
  try {
    // For example, req.user.userId comes from JWT middleware
    const user = await User.findById(req.user.userId).lean();
    res.json({
      github: !!user.githubId,
      slack: !!user.slackId,
      jira: !!user.jiraId,
      trello: !!user.trelloId
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch integration status' });
  }
});

module.exports = router;
