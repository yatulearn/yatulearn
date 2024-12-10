const Feedback = require('../models/feedback');

// Render feedback form and display all feedbacks (newest first)
const renderForm = async (req, res) => {
  try {
    const allFeedback = await Feedback.find({}).sort({ createdAt: -1 });
    res.render('feedback', { feedbackList: allFeedback });  // Pass feedbackList to the view
  } catch (err) {
    res.status(500).send('Error retrieving feedback.');
  }
};

// Handle feedback form submission
const submitFeedback = async (req, res) => {
  try {
    const newFeedback = new Feedback({
      name: req.body.name,
      message: req.body.feedback,
      rating: req.body.rating
    });
    await newFeedback.save();
    res.redirect('/feedback');  // Redirect to display the updated feedback list
  } catch (err) {
    res.status(500).send('Error saving feedback.');
  }
};



module.exports = {
  renderForm,
  submitFeedback
};
