const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema({
  productname: String,
  image: String,
  price: Number,
  size: String,
  description: String,
  category: String,
  reviews: [
    {
      username: String,
      date: { type: Date, default: Date.now },
      review: String,
    },
  ],
});

const product = model("product", productSchema);

const findAll = () => {
  const find = product.find({}).exec();

  return find;
};

const findOne = (productId) => {
  const findOne = product.findById({ _id: productId }).exec();

  return findOne;
};

const findByCategory = (categoryName) => {
  const findByCategory = product.find({ category: categoryName });

  return findByCategory;
};
module.exports = {
  product,
  findAll,
  findOne,
  findByCategory,
};
