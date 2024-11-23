const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json()); // middleware to accept json request bodies
app.use(cors()); // allows requests from cross-origin (not same origin)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/pokemon", (request, response) => {
  response.status(404).send("Error");
});

app.get("/number", (req, res) => {
  res.status(200).json({ num: 5 });
});

app.post("/students", (req, res) => {
  // const name = req.body.name;
  const { name } = req.body;
  // here there is some process happening, where we register the student
  res.json({ message: `Successfully registered ${name}` });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
