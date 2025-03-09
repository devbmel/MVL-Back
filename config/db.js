import mariadb from "mariadb";
import dotenv from "dotenv";

dotenv.config();

const pool = () => {
  return mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT,
    connectionLimit: 5,
  });
};

export default pool;
