import UsersRepository from "../repositories/usersRepository.js";

class UsersService {
  constructor() {
    this.usersRepository = new UsersRepository();
  }

  async getUserById(id) {
    if (!id) {
      return res.status(400).jsson({ message: "id user required" });
    }
    return await this.usersRepository.getUserById(id);
  }
}

export default UsersService;
