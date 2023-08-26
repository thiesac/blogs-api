const { User } = require('../models');
const { userSchema } = require('./validations/schemas');

const createUser = async ({ displayName, email, password, image }) => {
  const { error } = userSchema.validate({ displayName, email, password, image });
  if (error) {
    return { status: 400, data: { message: error.message } };
  }
  await User.create({ displayName, email, password, image });
  return { status: 201 };
};

const getByEmail = (email) => User.findOne({ where: { email } });

const getUsers = () => User.findAll({ attributes: { exclude: ['password'] } });

const getByUserId = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  return user;
};

module.exports = {
  createUser,
  getByEmail,
  getUsers,
  getByUserId,
};