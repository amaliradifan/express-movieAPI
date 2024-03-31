const express = require('express');

const { getAllMovies, getMovieById, addMovie } = require('../controllers');
const tryCatch = require('../utils/tryCatch');
const validateMovie = require('../middleware/validation/movie-validation');

const router = express.Router();

router.route('/movies')
  .get(getAllMovies)
  .post(validateMovie, tryCatch(addMovie));
router.get('/movies/:id', tryCatch(getMovieById));

module.exports = router;
