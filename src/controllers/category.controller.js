const { CategoryService } = require('../services');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await CategoryService.createCategory({ name });

    if (!name) {
      res.status(400).json({ message: '"name" is required' });
    }
    const { id } = category;
    res.status(201).json({ id, name });
  } catch (error) {
    res.status(500);
  }
};

const getAll = async (_req, res) => {
  try {
    const categories = await CategoryService.getAll();
  } catch (error) {
    
  }
}

module.exports = {
  createCategory,
  getAll,
};