const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const PORT = require(process.env.PORT);

morgan("tiny");

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
