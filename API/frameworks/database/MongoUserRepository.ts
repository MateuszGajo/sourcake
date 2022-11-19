import UserRepository from "../../application/use_cases/contracts/UserRepository";
import User from "../../entities/User";
import UserModel from "./schema/User";

export default class MongoUserRepository extends UserRepository {
  constructor() {
    super();
  }

  async add(studentInstance: User) {
    try {
      const user = new UserModel(studentInstance);

      user.save();
    } catch (error) {
      throw new Error("can't add new user");
    }

    return studentInstance;
  }
}
