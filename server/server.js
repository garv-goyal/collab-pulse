// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');
const githubAuthRoutes = require('./routes/githubAuth');
const slackAuthRoutes = require('./routes/slackAuth');
const jiraAuthRoutes = require('./routes/jiraAuth');
const trelloAuthRoutes = require('./routes/trelloAuth');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/auth', githubAuthRoutes);
app.use('/api/auth', githubAuthRoutes);
app.use('/api/auth', slackAuthRoutes);
app.use('/api/auth', jiraAuthRoutes);
app.use('/api/auth', trelloAuthRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });