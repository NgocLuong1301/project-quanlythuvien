const express = require("express");
const cors = require("cors");
const db = require("./config/db"); 

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3000, () => {
  console.log("Server running...");
});
