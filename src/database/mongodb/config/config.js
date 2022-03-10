require('dotenv').config();

module.exports = {
  development: {
    uri: process.env.MONGO_DEV_DB_URL,
  },
  production: {
    uri: process.env.MONGO_DEV_DB_URL,
  },
};
