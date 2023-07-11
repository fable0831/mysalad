const Sequelize = require("sequelize");

const config = {
  host: process.env.MYSALAD_MYSQL_HOST || "127.0.0.1",
  port: 3306,
  database: "mysalad",
  user: "mysalad_admin",
  password: process.env.MYSALAD_MYSQL_PASSWORD || 1013,
  timezone: "+09:00",
};

const sequelize = new Sequelize(config.database, config.user, config.password);
