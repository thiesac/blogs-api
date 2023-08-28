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

  // const userExists = await UserService.getByEmail(email);
  // console.log(`existe: ${userExists}`);
  // if (userExists.isNewRecord === false) {
  //   return res.status(409).json({ message: 'User already registered' });
  // }
  
  const user = await UserService.createUser({ displayName, email, password, image });
  //   const { token } = await login(req, res);
  // console.log(`token: ${token}`);
  const token = generateToken(user);

  if (user && user.status === 400) {
    return res.status(400).json({ message: user.data.message });
  }

  res.status(201).json({ token });
};

module.exports = { createUser };
