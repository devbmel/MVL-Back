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
      await this.authService.register(username, email, password);
      res.status(201).json("User created with success");
    } catch (error) {
      const message = `Error in authcontroller: ${error.message}`;
      console.error(message);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

export default AuthController;
