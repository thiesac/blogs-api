const { CategoryService } = require('./category.service'); 
const { BlogPost } = require('../models');
const { User } = require('../models');
const { Category } = require('../models');

const createPost = async ({ title, content, categoryIds }) => {
  const post = await BlogPost.create({ title, content });

  const categories = await CategoryService.categoriesAndPost(categoryIds);

  await post.addCategories(categories); // Use addCategories to associate multiple categories

  return post;
};

const getAll = () => BlogPost.findAll({
  include: [
    {
      model: User,
      as: 'user', 
      attributes: ['id', 'displayName', 'email', 'image'],
    },
    {
      model: Category,
      as: 'categories', 
      attributes: ['id', 'name'],
      through: { attributes: [] }, 
    },
  ],
});

module.exports = {
  createPost,
  getAll,
};
