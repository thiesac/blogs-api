const jwt = require('jsonwebtoken');
const { LoginService } = require('../services');

const secret = process.env.JWT_SECRET;

const validateLoginFields = (email, password) => {
  if (!email || !password) {
    throw new Error('Some required fields are missing');
  }
};

const validateUserCredentials = (user, password) => {
  if (!user || user.password !== password) {
    throw new Error('Invalid fields');
  }
};

const generateToken = (user) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  return jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    validateLoginFields(email, password);

    const user = await LoginService.getByEmail(email);

    validateUserCredentials(user, password);

    const token = generateToken(user);

    res.status(200).json({ token });
    return { token };
  } catch (error) {
    if (res) {
      res.status(400).json({ message: error.message });
    } else {
      console.error('Error:', error);
    }
  }
};

module.exports = { login };
