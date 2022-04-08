// const env = process.env.NODE_ENV || "development";
const knex = require("knex")(require("./knexfile"));

module.exports = knex;
