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

// Review posting

router.post("products/:id/reviews", (req, res) => {
  const { reviews } = req.body;

  if (!reviews) res.status(403).send("Please enter a review ");

  const newReview = { reviews };

  knex("reviews")
    .insert(newReview)
    .then((data) => {
      res.status(200).send("reviews posted");
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(400).send("Failed registration");
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
