import AddUser from "../../application/use_cases/user/AddUser";
import { User } from "../../entities/User.type";
import { ControllerResponse, ProjectDependencies } from "../../model/global";
import { run } from "../utils";

export default (dependencies: ProjectDependencies) => {
  const { userRepository } = dependencies.DatabaseService;

  const addNewUser = async (user: User): Promise<ControllerResponse> => {
    const addUserCommand = AddUser(userRepository);

    const createdUser = await addUserCommand.execute(
      user.firstName,
      user.lastName,
      user.email
    );

    return {
      status: 200,
      data: createdUser,
    };
  };

  return run({
    addNewUser,
  });
};
