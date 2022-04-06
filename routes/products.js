const express = require("express");
const router = express.Router();
const knex = require("../knexfile-config");

router.get("/products", (req, res) => {
  knex
    .select()
    .table("products")
    .then((data) => {
      res.status(200).json(data);
    });
});

router.get("/products/:id", (req, res) => {
  const id = req.params.id;
  knex
    .select()
    .from("products")
    .where({ id: id })
    .then((data) => {
      res.status(200).json(data);
    });
});

router.get("/products/category/:category", (req, res) => {
  const category = req.params.category;

  knex
    .select()
    .from("products")
    .where({ category: category })
    .then((data) => {
      res.status(201).json(data);
    });
});

module.exports = router;
