const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    title: String,
    category: { type: mongoose.ObjectId, ref: "Category" },
    status: String,
  },
  { timestamps: true }
);

const TodoModel = mongoose.model("Todo", todoSchema);

module.exports = TodoModel;
