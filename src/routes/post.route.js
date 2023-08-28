const route = require('express').Router();
const { postController } = require('../controllers');
const authMiddleware = require('../middlewares/auth.middleware');

// route.post('/', postController.createPost);
route.get('/', authMiddleware, postController.getAll);

module.exports = route;