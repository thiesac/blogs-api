const { User } = require('../models');
const { userSchema } = require('./validations/schemas');

const createUser = ({ displayName, email, password, image }) => {
  const { error } = userSchema.validate({ displayName, email, password, image });
  if (error) {
    return { status: 400, data: { message: error.message } };
  }
  User.create({ displayName, email, password, image });
  return { status: 201 };
};

const getByEmail = (email) => User.findOne({ where: { email } });

module.exports = {
  createUser,
  getByEmail,
};