const { Category } = require('../models');
const { categorySchema } = require('./validations/schemas');

const createCategory = async ({ name }) => {
  const validationResult = categorySchema.validate({ name });
  console.log(validationResult);
  if (validationResult.error) {
    console.log('deu erro');
    return { status: 400, data: { message: '"name" is required' } };
  }

  const category = await Category.create({ name });
  return category;
};

module.exports = {
  createCategory,
};