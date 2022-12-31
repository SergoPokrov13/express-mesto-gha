const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://0.0.0.0:27017/mestodb', {
  useNewUrlParser: true,
  useUnifiedTopology: false,
});

app.use((req, res, next) => {
  req.user = {
    _id: '630c8b8343eb3021b47cc312',
  };

  next();
});

app.use(router);
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Сервер запущен на ${PORT} порту`);
});
