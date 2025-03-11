import AuthService from "../services/authService.js";

class AuthController {
  constructor() {
    this.authService = new AuthService();
  }

  async register(req, res) {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ error: "Missing required field" });
    }
    try {
      const user = await this.authService.register(username, email, password);
      res.status(201).json(user);
    } catch (error) {
      const message = `Error in authcontroller: ${error.message}`;
      console.error(message);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async login(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Password and email required" });
    }
    try {
      const { token, user } = await this.authService.login(email, password);
      if (!token || !user) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env === "dev",
        sameSite: "Strict",
        expires: new Date(Date.now() + 3600000),
      });
      res.status(200).json(user);
    } catch (error) {
      const message = `Error in authcontroller: ${error.message}`;
      console.error(message);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async logout(req, res) {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env === "dev",
      sameSite: "Strict",
    });
    res.status(200).json({ message: "Logout with success" });
  }
}

export default AuthController;
