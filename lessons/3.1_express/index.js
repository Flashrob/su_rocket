const express = require("express");
const cors = require("cors");
const pokemon = require("./database.js");
const app = express();
const port = 3000;

app.use(express.json()); // middleware to accept json request bodies
app.use(cors()); // allows requests from cross-origin (not same origin)

/* 
Pre-requisite: Create a datastructure with 5-10 Pokemon
Pokemon: { id, name, type }

1. Create a route to serve all pokemon
2. Create a route to serve 1 pokemon by name

*/

app.get("/pokemon", (req, res) => {
  res.json(pokemon);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
