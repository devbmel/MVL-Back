import UsersService from "../services/usersService.js";

class UsersController {
  constructor() {
    this.usersService = new UsersService();
  }

  async getUserById(req, res) {
    const { id } = req.params;
    try {
      const user = await this.usersService.getUserById(id);
      res.status(200).json(user);
    } catch (error) {
      const message = `Error in userscontroller: ${error.message}`;
      console.error(message);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

export default UsersController;
