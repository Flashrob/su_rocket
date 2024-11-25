const express = require("express");
const cors = require("cors");
const pokemonRouter = require("./routers/pokemonRouter.js");
const userRouter = require("./routers/userRouter.js");
const app = express();
const port = 3000;

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

Repeat 1-8 for "User"

*/

app.use("/pokemon", pokemonRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
