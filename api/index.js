const express = require('express');
const cors = require('cors');
const app = express();
const port = 4040;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// Define a route for GET requests to '/api/test'
app.get('/api/test', (req,res) => {
    res.json('test ok2');
});

// Route handler for POST requests to '/api/transaction'
app.post('/api/transaction', (req, res) => {
    // Log the received data to console 
    console.log('Received data:', req.body);
    
    // Send back the received JSON data
    res.json(req.body);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



