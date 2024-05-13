const express = require('express');

const { getAllUsers, register } = require('../controllers');
const tryCatch = require('../utils/tryCatch');
const validateUser = require('../middleware/validation/user-validation');

const router = express.Router();

router.route('/users')
  .get(tryCatch(getAllUsers))
  .post(validateUser, tryCatch(register));

module.exports = router;
