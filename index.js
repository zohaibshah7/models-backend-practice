const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(6000, () => {
  console.log('Server is running on http://localhost:6000');
});