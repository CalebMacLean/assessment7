/** Shared config for application; can be req'd many places. */

require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY || 'development-secret-key';

const PORT = +process.env.PORT || 3000;

const BCRYPT_WORK_FACTOR = 10;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const DB_URI =
  process.env.NODE_ENV === 'test'
    ? `postgresql://${username}:${password}@localhost/bankly_test`
    : `postgresql://${username}:${password}@localhost/bankly`;

module.exports = {
  BCRYPT_WORK_FACTOR,
  SECRET_KEY,
  PORT,
  DB_URI
};
