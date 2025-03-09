import UsersRepository from "../repositories/usersRepository.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET;

class AuthService {
  constructor() {
    this.usersRepository = new UsersRepository();
  }

  async register(username, email, password) {
    const hashedPassword = await argon2.hash(password);
    return await this.usersRepository.createUser(
      username,
      email,
      hashedPassword
    );
  }
}

export default AuthService;
