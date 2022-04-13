const user_data = require("../seeds_data/user.json");
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user").del();
  await knex("user").insert(user_data);
};
