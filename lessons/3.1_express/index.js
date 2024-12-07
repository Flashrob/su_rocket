const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const categoryRouter = require("./routers/categoryRouter.js");
const todoRouter = require("./routers/todoRouter.js");
const authRouter = require("./routers/authRouter.js");
const mongoDB = process.env.DB_URI;

const app = express();
const port = 3000;

mongoose.connect(mongoDB);
console.log("Successfully connected to DB!");

app.use(express.json()); // middleware to accept json request bodies
app.use(cors()); // allows requests from cross-origin (not same origin)

app.use("/categories", categoryRouter);
app.use("/todos", todoRouter);
app.use("/auth", authRouter);
/* 
Requirements:
- I want to create a todo application
- The application should allow the user to create, read, update and delete todo items
- The application should allow the user to login and reject a user with a wrong email/password combination
- I want to keep track of the age of any todo created and want to also know when it was last updated
- I should be able to retrieve all of his todos, but also be able to retrieve a single todo
- Each todo created should belong to a category: household, work, shopping, family, others, ... and many more
- Each todo should have a status based on their completion
- I should be able to update the title and the category of any todo
- I should be able to update the completion status of my todos
- I can add any other user to my todo, so they can also view it on their account and update the status of the todos for everyone else tagged to the todo
*/

/* 
1. Create an ERD
- Create a Backend Application
- Create a Frontend Application
*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
