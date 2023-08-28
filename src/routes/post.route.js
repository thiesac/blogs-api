const route = require('express').Router();
const { postController } = require('../controllers');

route.post('/', postController.createPost);
route.get('/', postController.getAll);

module.exports = route;