# Бэкенд проекта movies-explorer-api  
Платформа Node.js с использование фреймверка Express.js.  
  
## Реализованы API:  

### Регистрация пользователя
`POST /signup` - создаёт пользователя с переданными в теле email, password и name

### Аутентификация
`POST /signin` - проверяет переданные в теле почту и пароль и возвращает JWT-токен

### Информация о пользователе
`GET /users/me` - возвращает информацию о пользователе (email и имя)  
`PATCH /users/me` - обновляет информацию о пользователе (email и имя)

### Фильмы
`GET /movies` - возвращает все сохранённые текущим  пользователем фильмы  
`POST /movies` - создаёт фильм с переданными в теле country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail, movieId  
`DELETE /movies/_id` - удаляет сохранённый фильм по id  

  
## Запуск проекта

`npm run start` — запускает сервер  
`npm run dev` — запускает сервер с hot-reload  

## Технологии
- сервер на `Ubuntu` в Яндекс.Облаке
- ssh-ключи для доступа к серверу
- API-сервер на `Node.js` + `express.js`
- база данных на `MongoDB` + `Mongoose`
- обновление кода на сервере через `Git`
- менеджер процессов на сервере `pm2`
- раздача фронтенда через `nginx`
- обратный прокси-сервер на `nginx`
- файрвол `ufw`
- SSL-сертификаты
  
  
## Ссылка на проект movies-explorer-api:

https://diploma.back.nomoredomains.icu
  
Публичный IP-адрес сервера - 62.84.117.107  
  
Домен бекэнда - https://diploma.back.nomoredomains.icu
