const db = require("../db");
const tableProduct = "products";

const findAll = () => db(tableProduct);

const findOne = (productId) => db(tableProduct).where("id", productId);

const findByCategory = (productCategory) =>
  db(tableProduct).where("category", productCategory);

module.exports = {
  findAll,
  findOne,
  findByCategory,
};
