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

exports.createSignUpAccount = (req, res) => {
  if (
    req.body.firs_tname ||
    !req.body.last_name ||
    !req.body.email ||
    !req.body.user_name ||
    !req.body.password
  ) {
    return res.status(400).send("Please all field must be filled");
  }

  products
    .inserSignUp(req.body)
    .then((data) => {
      const newUserURL = `/user/${data[0]}`;

      res.status(201).location(newUserURL).send(newUserURL);
    })
    .catch((err) => res.status(400).send(`Error creating User: ${err}`));
};
