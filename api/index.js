const express = require('express');
const app = express();
const port = 4040; //Define the port number to run the server on

// Define a route for GET requests to '/api/test'
app.get('/api/test', (req, res) => {
    res.json({ body: 'test ok3' }); // Send a JSON response with the body 'test ok'
});

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
