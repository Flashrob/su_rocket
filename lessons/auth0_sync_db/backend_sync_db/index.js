const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { User } = require("./db/models/index.js");

const app = express();
const port = 8080;

app.use(express.json()); // middleware to accept json request bodies
app.use(cors()); // allows requests from cross-origin (not same origin)

app.post("/webhook", async (req, res) => {
  const { user, secret } = req.body;
  const AUTH0_HOOK_SECRET = "abc";

  if (secret != AUTH0_HOOK_SECRET) {
    return res.status(401).json("UNAUTHORIZED");
  }

  const createdUser = await User.create({ id: user.user_id });
  console.log(createdUser.id);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
