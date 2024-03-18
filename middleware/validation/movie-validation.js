const Joi = require('joi');
const ClientError = require('../../erorrs/ClientError');

const schema = Joi.object({
  id: Joi.string()
    .required(),
  title: Joi.string()
    .min(3)
    .required(),
  genre: Joi.string()
    .required(),
});

const validate = (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) {
    throw new ClientError(error.message);
  }
  next();
};

module.exports = validate;
