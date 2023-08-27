const route = require('express').Router();
const { categoryController } = require('../controllers');

route.post('/', categoryController.createCategory);

module.exports = route;