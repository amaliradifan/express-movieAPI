const express = require('express');

const movieRoutes = require('./movie.routes');
const directorRoutes = require('./director.routes')

const router = express.Router();

router.use('', movieRoutes);
router.use('', directorRoutes);

module.exports = router;
