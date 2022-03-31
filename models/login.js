const knex = require("knex")(require("../knexfile").development);

const findUsers = () => knex("login").select("user_name", "password");

const inserSignUp = (data) => {
  delete data.id;
  return knex("login").insert(data);
};

module.exports = {
  findUsers,
  inserSignUp,
};
