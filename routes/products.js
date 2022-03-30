const router = require("express").Router();
const {
  getAllProducts,
  getSingleProduct,
  getProductByCategory,
  createSignUpAccount,
} = require("../controllers/products");

router
  .get("/products", getAllProducts)
  .get("/:productId", getSingleProduct)
  .get("/:category", getProductByCategory);

router.post("/user", createSignUpAccount);

module.exports = router;
