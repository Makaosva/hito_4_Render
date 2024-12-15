// PARA LA BASE DE DATOS funcione en el pc backend
require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.PGHOST || "localhost",
  user: process.env.PGUSER || "postgres",
  password: process.env.PGPASSWORD || "mo76492250",
  database: process.env.PGDATABASE || "market",
  port: process.env.PGPORT || 5432,
  allowExitOnIdle: true,
});
// Manejo de errores de la base de datos
pool.on("error", (err) => {
  console.error("Error en la conexión a la base de datos:", err);
});

module.exports = pool;
