const express = require('express');
const cors = require('cors');
const data = require('./data');

const app = express();

app.use(cors());

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.listen(process.env.PORT || 5000, () => {
  console.log('server running on http://localhost:5000');
});
