exports.up = function (knex) {
  return knex.schema.createTable("products", (table) => {
    table.increments("id").primary();
    table.string("product_name").notNullable();
    table.string("image");
    table.integer("price");
    table.string("size").defaultTo("S");
    table.string("description");
    table.string("category");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("products");
};
