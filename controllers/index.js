const movieControllers = require('./movie.controller');
const directorControllers = require('./director.controller');

module.exports = { ...movieControllers, ...directorControllers };
