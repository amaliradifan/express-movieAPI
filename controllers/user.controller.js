const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const ClientError = require('../erorrs/ClientError');

const prisma = new PrismaClient();

const getAllUsers = async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json({
    message: 'Success',
    data: users,
  });
};

const register = async (req, res) => {
  const { email, password } = req.body;
  const isUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (isUser) {
    throw new ClientError('User sudah terdaftar');
  }

  const newPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      email,
      password: newPassword,
    },
  });

  res.status(201).json({ message: 'Success', data: user });
};

module.exports = { getAllUsers, register };
