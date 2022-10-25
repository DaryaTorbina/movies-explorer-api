const express = require('express');

const usersRouter = express.Router();
const { updateUserValidation } = require('../middlewares/validatons');
const { getMe, updateUser } = require('../controllers/users');

usersRouter.get('/me', getMe); // возвращает информацию о пользователе (email и имя)
usersRouter.patch('/me', updateUserValidation, updateUser); // обновляет информацию о пользователе (email и имя)

exports.usersRouter = usersRouter;
