const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON data
app.use(express.json());

// Sample route to interact with external API
app.get('/', (req, res) => {
  res.send('Node.js API backend is running!');
});

// Route to interact with external API
app.get('/api/data', async (req, res) => {
  try {
    const response = await axios.get('https://dev.abdm.gov.in/api/hiecm/gateway/v3/sessions');  // Replace with a real API URL
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching data from API' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});