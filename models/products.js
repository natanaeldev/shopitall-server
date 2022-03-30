const db = require("../db");
const tableProduct = "products";
const tableLogin = "login";

const findAll = () => db(tableProduct);

const findOne = (productId) => db(tableProduct).where("id", productId);

const findByCategory = (productCategory) =>
  db(tableProduct).where("category", productCategory);

const inserSignUp = (data) => {
  delete data.id;
  return db(tableLogin).insert(data);
};

module.exports = {
  findAll,
  findOne,
  findByCategory,
  inserSignUp,
};
