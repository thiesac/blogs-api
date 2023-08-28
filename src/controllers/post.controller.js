const { PostService } = require('../services');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;

  const post = await PostService.createPost({ title, content, categoryIds });

  return res.status(201).json(post);
};

const getAll = async (_req, res) => {
  try {
    const posts = await PostService.getAll();

    if (posts === undefined) {
      res.status(400);
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createPost,
  getAll,
};