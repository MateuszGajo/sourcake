import AddUser from "../../application/use_cases/user/AddUser";
import { ControllerResponse, ProjectDependencies } from "../../model/global";
import { run } from "../utils";

export default (dependencies: ProjectDependencies) => {
  const { userRepository } = dependencies.DatabaseService;

  const addNewUser = async (
    firstName: string,
    lastName: string,
    email: string
  ): Promise<ControllerResponse> => {
    const addUserCommand = AddUser(userRepository);

    const user = await addUserCommand.execute(firstName, lastName, email);

    return {
      status: 200,
      data: user,
    };
  };

  return run({
    addNewUser,
  });
};
