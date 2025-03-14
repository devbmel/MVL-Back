// import pool from "../config/mariadb.js";

import pool from "../config/postgres.js"

class UsersRepository {
  constructor() {
    this.pool = pool;
  }

  async createUser(username, email, hashedPassword) {
    let connexion;
    try {
      connexion = await this.pool.connect();

      const result = await connexion.query(
        "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING username, email",
        [username, email, hashedPassword]
      );
      return result.rows[0]; 
      
    } catch (error) {
      const message = `Error in createUser repository: ${error.message}`;
      console.error(message);
    } finally {
      if (connexion) connexion.release();
    }
  }

  async getUserByEmail(email) {
    let connexion;
    try {
      connexion = await this.pool.connect();
      const userByEmail = await connexion.query(
        "SELECT * FROM users WHERE email=$1",
        [email]
      );
      return userByEmail[0];
    } catch (error) {
      const message = `Error in getUserByEmailrepository: ${error.message}`;
      console.error(message);
      throw new Error(message);
    } finally {
      if (connexion) connexion.release();
    }
  }

  async getUserById(id) {
    let connexion;
    try {
      connexion = await this.pool.connect();
      const userById = await connexion.query(
        "SELECT * FROM users WHERE id = $1",
        [id]
      );
      return userById[0];
    } catch (error) {
      const message = `Error in getUserById repository: ${error.message}`;
      console.error(message);
      throw new Error(message);
    }
  }
}

export default UsersRepository;
