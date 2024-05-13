const jwt = require('jsonwebtoken');
const AuthorizationError = require('../erorrs/AuthorizationError');

const authorization = async (req, res, next) => {
  try {
    if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) {
      throw new AuthorizationError('Invalid Token');
    }

    const token = req.headers.authorization.split(' ')[1];
    const decode = await jwt.verify(token, process.env.JWT_KEY);

    req.user = decode;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authorization;
