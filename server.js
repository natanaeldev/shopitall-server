const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

const productRoutes = require("./routes/products");
const loginRoutes = require("./routes/login");
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.use(express.static("public"));

app.use("/api/v1/", productRoutes);
app.use("/api/v1/", loginRoutes);

try {
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.log(`Error: ${error}`);
}

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
