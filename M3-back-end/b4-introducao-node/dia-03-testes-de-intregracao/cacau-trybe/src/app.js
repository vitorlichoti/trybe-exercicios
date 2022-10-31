const cacauTrybe = require('./cacauTrybe');
const express = require('express');

const app = express();
app.use(express.json());

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

// app.get('/chocolates/:id', (req, res) => {

// });

// app.get('/chocolates/brand/:brandID', (req, res) => {

// });

module.exports = app;