const express = require('express');
const {register , adminLogin , login , userInformationByEmail} = require('../controllers/userController');
const router = express.Router();

router.post('/register', register);
router.post('/adminLogin', adminLogin);
router.post('/login', login);
router.get('/information', userInformationByEmail);

module.exports = router;
