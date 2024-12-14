// PARA LA BASE DE DATOS funcione en el pc backend
import "dotenv/config";
import pg from "pg";
//const { Pool } = require("pg");

const connectionString = process.env.PG_STRING_URL;
const { Pool } = pg;

// const pool = new Pool({
//   host: process.env.PGHOST || "localhost",
//   user: process.env.PGUSER || "postgres",
//   password: process.env.PGPASSWORD || "sql7777",
//   database: process.env.PGDATABASE || "market",
//   port: process.env.PGPORT || 5432,
//   allowExitOnIdle: true,
// });

const pool = connectionString
  ? new Pool({
      connectionString,
      ssl: {
        rejectUnauthorized: false,
      },
      allowExitOnIdle: true,
    })
  : new Pool({
      allowExitOnIdle: true,
    });

try {
  pool.query("SELECT NOW()");
  console.log("Database connected");
} catch (error) {
  console.log(error);
}

export default pool;
