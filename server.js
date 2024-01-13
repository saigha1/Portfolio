const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // Change the port if needed

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at ${port}`);
});