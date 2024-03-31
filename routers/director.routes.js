const express = require('express');

const { getAllDirectors, addDirector } = require('../controllers/director.controller');
const tryCatch = require('../utils/tryCatch');
const validateDirector = require('../middleware/validation/director-validation');

const router = express.Router();

router.route('/directors')
  .get(tryCatch(getAllDirectors))
  .post(validateDirector, tryCatch(addDirector));

module.exports = router;
