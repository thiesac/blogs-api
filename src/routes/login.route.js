const route = require('express').Router();
const { loginController } = require('../controllers');

route.post('/', loginController.login);

module.exports = route;