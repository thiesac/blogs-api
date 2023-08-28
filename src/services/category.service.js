const { Category } = require('../models');
const { categorySchema } = require('./validations/schemas');

const createCategory = async ({ name }) => {
  const validationResult = categorySchema.validate({ name });
  if (validationResult.error) {
    console.log('deu erro');
    return { status: 400, data: { message: '"name" is required' } };
  }

  const category = await Category.create({ name });
  return category;
};

const getAll = () => Category.findAll();

async function categoriesAndPost(categoryIds) {
  const categories = await Category.findAll({
    where: {
      id: categoryIds,
    },
  });

  return categories;
}

module.exports = {
  createCategory,
  getAll,
  categoriesAndPost,
};