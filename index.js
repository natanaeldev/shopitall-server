const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user");
const productsRouter = require("./routes/products");
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use("public", express.static("public"));

app.use("/api/v1/", productsRouter);

// app.use("/api/v1/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
