const Joi = require('joi');
const ClientError = require('../../erorrs/ClientError');

const schema = Joi.object({
  fullname: Joi.string().min(3).max(100).required(),
});

const validate = (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) throw new ClientError(error.message);
  next();
};

module.exports = validate;
