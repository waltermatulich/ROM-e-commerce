const express = require('express');
const router = express.Router();
const apiRoutes = require('./api');

// Direct requests to '/api' to the 'apiRoutes' router
router.use('/api', apiRoutes);

// For any other routes, send a simple HTML response
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;
