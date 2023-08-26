const { User } = require('../models');
const { userSchema } = require('./validations/schemas');

const createUser = ({ displayName, email, password, image }) => {
  const { error } = userSchema.validate({ displayName, email, password, image });
  if (error) {
    return { status: 400, data: { message: error.message } };
  }
  // if (validationResult.error) {
  //   const errorMessages = validationResult.error.details[0].message;
  //   const status = 400;
  //   return { status, data: { message: errorMessages } };
  // }
  const user = User.create({ displayName, email, password, image });
  return { status: 201, data: user };
};

module.exports = {
  createUser,
};