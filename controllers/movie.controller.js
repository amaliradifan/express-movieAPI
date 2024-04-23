const { PrismaClient } = require('@prisma/client');
const ClientError = require('../erorrs/ClientError');

const prisma = new PrismaClient();

const getAllMovies = async (req, res) => {
  const { q } = req.query;
  const movies = await prisma.movie.findMany({
    include: {
      director: {
        select: {
          fullname: true,
        },
      },
    },
    where: {
      title: {
        contains: q,
        mode: 'insensitive',
      },
    },
  });
  res.status(200).json({
    message: 'Success',
    data: movies,
  });
};

const getMovieById = async (req, res) => {
  const { id } = req.params;

  const movie = await prisma.movie.findUnique({
    where: {
      id,
    },
  });
  if (!movie) {
    throw new ClientError('Movie Not Found', 404);
  }

  res.status(200).json({
    message: 'Success',
    data: movie,
  });
};

const addMovie = async (req, res) => {
  const { title, genre, directorId } = req.body;

  const movie = await prisma.movie.create({
    data: {
      title,
      genre,
      directorId,
    },
  });

  res.status(201).json({ message: 'Success', data: movie });
};

module.exports = { getAllMovies, getMovieById, addMovie };
