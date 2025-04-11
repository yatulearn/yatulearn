// routes/feedbackRoutes.js
const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feController');



// GET route to render feedback form
router.get('/feedback', feedbackController.renderForm);

// POST route to handle feedback submission
router.post('/feedback', feedbackController.submitFeedback);

module.exports = router;
