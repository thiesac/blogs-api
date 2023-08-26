const { UserService } = require('../services');

const getAll = async (_req, res) => {
    const users = await UserService.getUsers();

    if (!users) throw Error;

    res.status(200).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await UserService.getByUserId(id);
  
  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }

  res.status(200).json(user);
};

module.exports = {
  getAll,
  getById,
};