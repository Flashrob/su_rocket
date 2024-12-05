const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const mongoDB = process.env.DB_URI;

const app = express();
const port = 3000;

mongoose.connect(mongoDB);
console.log("Successfully connected to DB!");

app.use(express.json()); // middleware to accept json request bodies
app.use(cors()); // allows requests from cross-origin (not same origin)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
