import pkg from "pg"
const {Pool} = pkg
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  host: process.env.POSTGRES_DB_HOST,
  user: process.env.POSTGRES_DB_USER,
  password: process.env.POSTGRES_DB_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  port: process.env.POSTGRES_DB_PORT,
  max: 5, 
  ssl: {
    rejectUnauthorized: false, // Allows self-signed certificates
  }
});

export default pool;