const express = require('express');

const { login, logout } = require('../controllers');
const tryCatch = require('../utils/tryCatch');

const router = express.Router();

router.post('/login', tryCatch(login));
router.post('/logout', tryCatch(logout));

module.exports = router;
