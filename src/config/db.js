const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST
});

pool.on('connect', () => console.log('Conexión exitosa a PostgreSQL'));
console.log('Conectado a la base:', process.env.DB_NAME);

module.exports = pool;
