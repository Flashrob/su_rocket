const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = 8080;

const pokemonRouter = require("./routers/pokemonRouter.js");
app.use("/pokemon", pokemonRouter);

app.use(express.json()); // middleware to accept json request bodies
app.use(cors()); // allows requests from cross-origin (not same origin)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/* 
1. Recreate our Pokemon database via Migrations
2. We want to have a Model for every Table (no need join tables for now)
3. We want to insert some sample data via Seeders
4. Be able to query your database via mySQL workbench or via the mySQL CLI
*/
