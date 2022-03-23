const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const PORT = process.env.PORT;

morgan("tiny");

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
