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

  async login(email, password) {
    try {
      const user = await this.usersRepository.getUserByEmail(email);
      if (!user) {
        throw new Error("Invalid credentials");
      }

      const isPasswordValid = await argon2.verify(user.password, password);
      if (!isPasswordValid) {
        throw new Error("Invalid credentials");
      }

      const token = jwt.sign({ id: user.id }, SECRET_KEY, {
        expiresIn: "30min",
      });

      return { token, user };
    } catch (error) {
      throw new Error(error.message || "An error occurred during login");
    }
  }
}

export default AuthService;
