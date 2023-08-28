const { PostService } = require('../services');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;

  const post = await PostService.createPost({ title, content, categoryIds });

  return res.status(201).json(post);
};

const getAll = async (_req, res) => {
  const posts = await PostService.getAll();

  // if (!posts) throw Error;

  res.status(200).json(posts);
};

module.exports = {
  createPost,
  getAll,
};