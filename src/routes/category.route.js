const route = require('express').Router();
const { categoryController } = require('../controllers');
const authMiddleware = require('../middlewares/auth.middleware');

route.post('/', authMiddleware, categoryController.createCategory);
route.get('/', authMiddleware, categoryController.getAll);

module.exports = route;