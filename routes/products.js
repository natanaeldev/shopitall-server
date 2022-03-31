const router = require("express").Router();
const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  getAllProductsByCategory,
} = require("../controllers/products");

router.get("/products", getAllProducts);
router.get("/products/:id", getSingleProduct);
router.post("/productscreate", createProduct);
router.get("/products/category/:category", getAllProductsByCategory);

module.exports = router;
