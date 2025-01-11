const express = require("express");
const cors = require("cors");
const { Pokemon } = require("./db/models/index.js");
require("dotenv").config();
const app = express();
const port = 8080;

app.use(express.json()); // middleware to accept json request bodies
app.use(cors()); // allows requests from cross-origin (not same origin)

const getUsers = async () => {
  await Pokemon.create({ name: "Mark" });

  const pokemon = await Pokemon.findAll();
  console.log(pokemon);
};

getUsers();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/* 
1. Recreate our Pokemon database via Migrations
2. We want to have a Model for every Table (no need join tables for now)
3. We want to insert some sample data via Seeders
4. Be able to query your database via mySQL workbench or via the mySQL CLI
*/
