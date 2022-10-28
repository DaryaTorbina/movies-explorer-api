const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

const helmet = require('helmet');

const { errors } = require('celebrate');

const bodyParser = require('body-parser');

const { routes } = require('./routes');

const centralizedError = require('./middlewares/centralizedError');

const { requestLogger, errorLogger } = require('./middlewares/logger');

const { limiter } = require('./middlewares/limiter');

// добавляем переменные из файла .env в process.env
require('dotenv').config();

// const { PORT = 3000 } = process.env;
// const DATABASE_URL = 'mongodb://localhost:27017/moviesdb';

const { PORT, DB_ADDRESS } = require('./config');

const app = express();

mongoose
  .connect(DB_ADDRESS)
  .then(() => {
    console.log(`Connected to database on ${DB_ADDRESS}`);
  })
  .catch((err) => {
    console.log('Error on database connection');
    console.error(err);
  });

app.use(cors()); //

// подключаем логгер запросов

app.use(requestLogger);
app.use(limiter);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// // подключаем логгер запросов
// app.use(requestLogger);

// подключаем роуты
app.use(routes);

// подключаем логгер ошибок
app.use(errorLogger);

// обработчик ошибок celebrate
app.use(errors());
// Централизованная обработка ошибок
app.use(centralizedError);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
