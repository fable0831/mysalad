const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    username: 'mysalad_admin',
    password: process.env.DB_PASSWORD,
    database: 'mysalad',
    host: '127.0.0.1',
    dialect: 'mysql',
    timezone: '+09:00',
  },
  test: {
    username: 'mysalad_admin',
    password: process.env.DB_PASSWORD,
    database: 'mysalad_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    timezone: '+09:00',
  },
  production: {
    username: 'mysalad_admin',
    password: process.env.DB_PASSWORD,
    database: 'mysalad_production',
    host: '127.0.0.1',
    dialect: 'mysql',
    timezone: '+09:00',
  },
};