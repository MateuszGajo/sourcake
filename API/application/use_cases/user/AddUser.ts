import User from "../../../entities/User";
import ApiError from "../../../frameworks/Error/ApiError";
import { UserRepository } from "../../../model/global";

export default (UserRepository: UserRepository) => {
  const execute = async (
    firstName: string,
    lastName: string,
    email: string
  ) => {
    console.log(firstName, lastName, email);
    if (!firstName || !lastName || !email) {
      throw new ApiError(400, "Invalid data");
    }

    const user = new User(firstName, lastName, email);

    UserRepository.add(user);

    return user;
  };

  return { execute };
};
