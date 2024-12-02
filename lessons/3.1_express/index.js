const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const pokemonRouter = require("./routers/pokemonRouter.js");
const userRouter = require("./routers/userRouter.js");

const mongoDB = process.env.DB_URI;

const app = express();
const port = 3000;

async function main() {
  await mongoose.connect(mongoDB);
  console.log("Successfully connected to DB!");
}

main().catch((err) => console.log(err));

const pokemonSchema = new Schema({ name: String });

const Pokemon = mongoose.model("Pokemon", pokemonSchema);
Pokemon.find().then((result) => console.log(result));

app.use(express.json()); // middleware to accept json request bodies
app.use(cors()); // allows requests from cross-origin (not same origin)

/* 
Pre-requisite: Create a datastructure with 5-10 Pokemon
Pokemon: { id, name, type }

1. Create a route to serve all pokemon
2. Create a route to serve 1 pokemon by name
3. For 1., add the ability to filter the list by type
4. Add one pokemon to the list; if successful, the pokemon will be returned
5. Delete one pokemon from the list
6. Update a pokemon (type, or name)
7. Refactor request functions into a controller file
8. Refactor routes into a routes file
9. Connect do mongoDB using mongoose
10. Setup the whole pokemon app to use DB instead of static db file
11. Setup pokemon attacks
12. Able to retrieve and update the attacks of a Pokemon

// I want to be able to see the attacks of my pokemon
// I want to be able to update/delete/overwrite the attacks of my pokemon
// Any Pokemon can only have 4 attacks

Repeat 1-8 for "User"

*/

app.use("/pokemon", pokemonRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
