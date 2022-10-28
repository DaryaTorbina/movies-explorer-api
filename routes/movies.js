const express = require('express');

const moviesRouter = express.Router();
const { createMovieValidation, movieIdValidate } = require('../middlewares/validatons');

const {
  createMovie,
  getMovie,
  deleteMovie,
} = require('../controllers/movies');

moviesRouter.post('/', createMovieValidation, createMovie); // создаёт фильм с переданными в теле country
moviesRouter.get('/', getMovie); // возвращает все сохранённые текущим  пользователем фильмы
moviesRouter.delete('/:movieId', movieIdValidate, deleteMovie); // удаляет сохранённый фильм по id

exports.moviesRouter = moviesRouter;
