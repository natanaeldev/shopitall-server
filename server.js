const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const productRoutes = require("./routes/products");
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.use("/api/v1/", productRoutes);
app.use("/api/v1/products/", productRoutes);
app.use("/api/v1/products/category/", productRoutes);

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
