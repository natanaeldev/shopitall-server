const {
  products,
  findAll,
  findOne,
  findByCategory,
} = require("../models/product");
const productData = require("../data/products");

exports.createProduct = async (req, res) => {
  const product = new products(productData);

  await product.save();
  res.status(201).json("success");
};

exports.getAllProducts = async (req, res) => {
  await findAll().then((response) => {
    res.status(202).json(response);
  });
};

exports.getAllProductsByCategory = async (req, res) => {
  const productCategory = req.params.category;

  await findByCategory(productCategory).then((response) => {
    res.status(200).json(response);
  });
};

exports.getSingleProduct = async (req, res) => {
  const productId = req.params.id;

  await findOne(productId).then((response) => {
    res.status(201).json(response);
  });
};
