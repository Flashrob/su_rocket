const TodoModel = require("../db/models/Todo.js");

const STATUS = {
  TODO: "TO_DO",
};

const getAll = async (_req, res) => {
  const todos = await TodoModel.find();

  res.json(todos);
};

const create = async (req, res) => {
  const { title, category } = req.body;
  if (!title || !category) return res.status(400).json("Invalid todo");

  const newTodo = await TodoModel.create({
    title,
    category,
    status: STATUS.TODO,
  });
  res.json(newTodo);
};

const getOne = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json("Invalid request");

  const todo = await TodoModel.findById(id).populate("category");
  if (!todo) return res.status(400).json("Todo not found");
  res.json(todo);
};

const updateOne = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json("Invalid Request");

  const { title, category, status } = req.body;
  const todo = {
    ...(title && { title }),
    ...(category && { category }),
    ...(status && { status }),
  };
  const updatedTodo = await TodoModel.findByIdAndUpdate(id, todo, {
    new: true,
  });

  console.log(updatedTodo);

  if (!updatedTodo) return res.status(400).json("Todo not found");

  res.json(updatedTodo);
};

const deleteOne = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json("Bad request");

  const deletedTodo = await TodoModel.findByIdAndDelete(id);
  console.log(deletedTodo);
  if (!deletedTodo) return res.status(400).send("Todo not found");

  res.json(deletedTodo);
};

module.exports = {
  getAll,
  create,
  getOne,
  updateOne,
  deleteOne,
};
