import pool from "../config/db.js";

class UsersRepository {
  constructor() {
    this.pool = pool();
  }

  async createUser(username, email, hashedPassword) {
    let connexion;
    try {
      connexion = await this.pool.getConnection();
      await connexion.query(
        "INSERT INTO users (username, email, password) VALUES (?,?,?)",
        [username, email, hashedPassword]
      );
      return {
        username,
        email,
      };
    } catch (error) {
      const message = `Error in createUser repository: ${error.message}`;
      console.error(message);
    } finally {
      if (connexion) connexion.release();
    }
  }
}

export default UsersRepository;
