var express = require('express');
const { register } = require('../controllers/register.controller');

var router = express.Router();

router.post('/register', register);

module.exports = {
    registerRouter: router
};  