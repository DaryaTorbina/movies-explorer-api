const {
  PORT = 3000,
  DB_ADDRESS = 'mongodb://localhost:27017/moviesdb',
  JWT_SECRET = 'some-secret-key',
} = process.env;

module.exports = {
  PORT,
  DB_ADDRESS,
  JWT_SECRET,
};
