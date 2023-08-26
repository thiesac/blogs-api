const route = require('express').Router();
const { userController } = require('../controllers');
const getUsers = require('../controllers/getUsers');
const authMiddleware = require('../middlewares/auth.middleware');

route.post('/', userController.createUser);
route.get('/', authMiddleware, getUsers);

module.exports = route;