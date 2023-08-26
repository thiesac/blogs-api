const jwt = require('jsonwebtoken');
const { UserService } = require('../services');
// const { login } = require('./login.controller');

const secret = process.env.JWT_SECRET;

const generateToken = (user) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  return jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);
};

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const user = await UserService.createUser({ displayName, email, password, image });
    console.log(user);
  //   const { token } = await login(req, res);
  // console.log(`token: ${token}`);
  if (user.status === 400) {
    return res.status(400).json({ message: user.data.message });
    }
  const token = generateToken(user);

  res.status(201).json({ token });
};

module.exports = { createUser };
