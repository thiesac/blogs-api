const { UserService } = require('../services');
const { login } = require('./login.controller');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    await UserService.createUser({ displayName, email, password, image });
    const { token } = await login(req, res);

    return res.status(201).json({ token });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { createUser };
