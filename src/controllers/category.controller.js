const { CategoryService } = require('../services');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await CategoryService.createCategory({ name });

    if (!name) {
      console.log('aqui tb deu erro');
      res.status(400).json({ message: '"name" is required' });
    }
    const { id } = category;
    res.status(201).json({ id, name });
  } catch (error) {
    res.status(500);
  }
};

module.exports = {
  createCategory,
};