const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (CSS, images, etc.)
app.use(express.static('public'));

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/feedbackDB').then(() => {
  console.log("Database connected");
}).catch((error) => {
  console.log("Error connecting to database:", error);
});

// Feedback routes
const feedbackRoutes = require('./routes/feroutes');
app.use('/', feedbackRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
