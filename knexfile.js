require("dotenv").config();

module.exports = {
  client: process.env.MYSQL_CLIENT,
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "shopitall_db",
    charset: "utf8",
  },

  Production: {
    client: process.env.MYSQL_CLIENT,
    connection: process.env.JAWSDB_URL,
  },
};
