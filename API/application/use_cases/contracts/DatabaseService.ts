import UserRepository from "./UserRepository";

export default class DatabaseService {
  userRepository: any;
  constructor() {
    this.userRepository = null;
  }

  async initDatabase() {
    throw new Error("not implemented");
  }
}
