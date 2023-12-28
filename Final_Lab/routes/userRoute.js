const express = require('express');
const {logout , login } = require('../controllers/userController');
const router = express.Router();

router.get('/logout', logout);
router.post('/login', login);

module.exports = router;
