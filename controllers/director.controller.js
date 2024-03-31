const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllDirectors = async (req, res) => {
  const directors = await prisma.director.findMany();
  res.status(200).json({
    message: 'Success',
    data: directors,
  });
};

const addDirector = async (req, res) => {
  const { fullname } = req.body;

  const director = await prisma.director.create({
    data: {
      fullname,
    },
  });

  res.status(201).json({
    message: 'Success',
    data: director,
  });
};

module.exports = { getAllDirectors, addDirector };
