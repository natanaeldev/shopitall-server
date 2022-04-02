exports.up = function (knex) {
  return knex.schema.createTable("user", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("(UUID())"));
    table.string("firstname").notNullable();
    table.string("lastname").notNullable();
    table.string("email").notNullable();
    table.string("username").notNullable();
    table.integer("password").unsigned();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("user");
};
