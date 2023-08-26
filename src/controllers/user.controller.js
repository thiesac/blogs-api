const { UserService } = require('../services');

module.exports = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const user = await UserService.createUser({ displayName, email, password, image });
  
    if (!user) throw Error;
    res.status(201).json({ message: 'Novo usuário criado com sucesso', user: displayName });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao salvar o usuário no banco', error: error.message });
  }
};