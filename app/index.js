const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <link rel="stylesheet" type="text/css" href="/styles.css">
    </head>
    <body>
      <h1>Hello, Welcome to DMCON 2024</h1>
    </body>
    </html>
  `);
});

app.listen(5000, () => console.log('Server is up and running'));

