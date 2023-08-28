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
      as: 'user', // Use the alias you defined in BlogPost.js
      attributes: ['id', 'displayName', 'email', 'image'],
    },
    {
      model: Category,
      as: 'category', // Use the alias you defined in PostCategory.js
      attributes: ['id', 'name'],
      through: { attributes: [] }, // To exclude the junction table attributes
    },
  ],
});

module.exports = {
  createPost,
  getAll,
};
