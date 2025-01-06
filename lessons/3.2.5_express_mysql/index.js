const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mysql = require("mysql2/promise");
const app = express();
const port = 8080;

app.use(express.json()); // middleware to accept json request bodies
app.use(cors()); // allows requests from cross-origin (not same origin)

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: process.env.DB_PW,
  database: "sql_1_m",
});

app.get("/", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM Users");
  console.log(rows);

  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
