const CategoryModel = require("../db/models/Category.js");

const getAll = async (_req, res) => {
  const categories = await CategoryModel.find();
  res.json(categories);
};

module.exports = {
  getAll,
};
