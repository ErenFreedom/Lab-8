const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON in request body
app.use(express.json());

// POST endpoint for recommendations
app.post('/recommend', (req, res) => {
    // In a real-world scenario, you might save this recommendation to a database
    console.log('Received recommendation for:', req.body.skill);

    // Send a response to the client
    res.json({ status: 'Recommendation received!' });
});

// Listen on port 4000 (to avoid conflict with feedback service)
app.listen(4000, () => {
    console.log('Recommendation service listening on port 4000!');
});
