const movieControllers = require('./movie.controller');
const directorControllers = require('./director.controller');
const userControllers = require('./user.controller');
const authControllers = require('./auth.controller');

module.exports = {
  ...movieControllers, ...directorControllers, ...userControllers, ...authControllers,
};
