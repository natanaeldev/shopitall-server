const products = require("../models/products");

exports.getAllProducts = (req, res) => {
  products.findAll().then((products) => res.json(products));
};

exports.getSingleProduct = (req, res) => {
  const productId = req.params.productId;

  products
    .findOne(productId)
    .then((singleProducts) => res.json(singleProducts));
};

exports.getProductByCategory = (req, res) => {
  const productCategory = req.params.category;
  console.table(productCategory);

  products
    .findByCategory(productCategory)
    .then((products) => res.json(products));
};
