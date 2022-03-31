const router = require("express").Router();
const {
  getAllProducts,
  getSingleProduct,
  getProductByCategory,
} = require("../controllers/products");

router
  .get("/products", getAllProducts)
  .get("/:productId", getSingleProduct)
  .get("/:category", getProductByCategory);

module.exports = router;
