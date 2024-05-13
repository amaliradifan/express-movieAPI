const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AuthenticationError = require('../erorrs/AuthenticationError');

const prisma = new PrismaClient();

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new AuthenticationError('Email Atau Password Salah');
  }

  const isPassword = bcrypt.compare(password, user.password);

  if (!isPassword) {
    throw new AuthenticationError('Email Atau Password Salah');
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_KEY, {
    expiresIn: '6h',
  });

  return res.status(200).cookie('token', token).json({
    message: 'User Berhasil Login',
    token,
  });
};

const logout = async (req, res) => {
  res.clearCookie('token');
  return res.status(200).json({
    message: 'success',
  });
};

module.exports = { login, logout };
