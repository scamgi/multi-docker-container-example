const express = require('express');
const app = express();
const port = 3001;

// Define a simple API endpoint
app.get('/api/message', (req, res) => {
  res.json({ message: "Hello from the backend server!" });
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
