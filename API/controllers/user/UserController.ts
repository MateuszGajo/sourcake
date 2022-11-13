import AddUser from "../../application/use_cases/user/AddUser";
import ApiError from "../../frameworks/Error/ApiError";
import { ControllerResponse, ProjectDependencies } from "../../model/global";

export default (dependencies: ProjectDependencies) => {
  const { userRepository } = dependencies.DatabaseService;

  const addNewUser = (
    firstName: string,
    lastName: string,
    email: string
  ): ControllerResponse => {
    const addUserCommand = AddUser(userRepository);
    try {
      const user = addUserCommand.execute(firstName, lastName, email);

      return {
        status: 200,
        data: user,
      };
    } catch (error) {
      if (error instanceof ApiError)
        return {
          status: error.status,
          data: error.message,
        };
    }

    return {
      status: 500,
      data: "Problem creating user",
    };
  };

  return {
    addNewUser,
  };
};
