const movies = require('../dataMock/movies');
const ClientError = require('../erorrs/ClientError');

const getAllMovies = (req, res) => {
  res.status(200).json({
    data: movies,
  });
};

const getMovieById = (req, res) => {
  const { id } = req.params;

  const movie = movies.find((item) => item.id === id);
  if (!movie) {
    throw new ClientError('Movie Not Found', 404);
  }

  res.status(200).json({
    data: movie,
  });
};

const addMovie = (req, res) => {
  const { id, title, genre } = req.body;

  movies.push({ id, title, genre });

  res.status(201).json({ message: 'Succesfully Adding Movie' });
};

module.exports = { getAllMovies, getMovieById, addMovie };
