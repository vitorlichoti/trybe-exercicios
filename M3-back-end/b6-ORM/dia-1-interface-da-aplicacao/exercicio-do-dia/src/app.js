const express = require('express');

const bookController = require('./controller/Books.controller');
// const User = require('./controllers/user.controller');

const app = express();

app.use(express.json());

app.get('/books', bookController.getAll);

app.get('/books/:id', bookController.getById);

app.post('/books', bookController.create);

app.put('/books/:id', bookController.update);

app.delete('/books/:id', bookController.remove);

module.exports = app;