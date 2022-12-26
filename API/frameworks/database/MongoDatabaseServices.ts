import mongoose from "mongoose";
import DatabaseService from "../../application/use_cases/contracts/DatabaseService";
import logger from "../../config/logger";
import MongoUserRepository from "./MongoUserRepository";

export default class MongoDatabaseServices extends DatabaseService {
  userRepository: MongoUserRepository;

  constructor() {
    super();
    this.userRepository = new MongoUserRepository();
  }

  async initDatabase() {
    const connectionString = `mongodb://0.0.0.0:27017/dev`;

    try {
      await mongoose.connect(connectionString);
      logger.info("Connected to DB");
    } catch (err) {
      throw new Error("cant connect to DB");
    }
    return Promise.resolve();
  }
}
