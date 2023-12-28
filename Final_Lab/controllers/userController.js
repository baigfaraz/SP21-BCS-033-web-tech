const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');


const login = (req, res) => {
    const { username, password } = req.body;
    if (username === 'baigfaraz000@gmail.com' && password === '1234') {
      req.session.user = username;
      res.redirect('/');
    } else {
      res.send('Invalid login credentials');
    }
  };
  
  const logout =(req, res) => {
    req.session.destroy(err => {
      if (err) {
        return res.send('Error destroying session');
      }
      res.redirect('/');
    });
  };

    module.exports = {
        login,
        logout
      };