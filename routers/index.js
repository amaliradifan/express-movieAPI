const express = require('express');

const movieRoutes = require('./movie.routes');
const directorRoutes = require('./director.routes');
const userRoutes = require('./user.routes');
const authRoutes = require('./auth.routes');

const router = express.Router();

router.use('', movieRoutes);
router.use('', directorRoutes);
router.use('', userRoutes);
router.use('', authRoutes);

module.exports = router;
