var express = require('express');
const { login, logout } = require('../controllers/login.controller');

var router = express.Router();


router.post('/login', login);
router.get('/logout', logout);

module.exports = {
    loginRouter: router
};