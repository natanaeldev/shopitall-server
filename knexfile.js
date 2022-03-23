require("dotenv").config();

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: process.env.DB_PASSWORD,
      database: "shopitall_db",
      charset: "utf8",
    },
  },
};
