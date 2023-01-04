import { User } from "../../domain/user/userEntity";
import { addUser } from "../../domain/user/userModel";
import { UpdateUserStore, updateUsersUseCase } from "./updateUserUseCase";

const createUserUseCase = (store: UpdateUserStore, user: User) => {
  const addUserFunc = (users: User[]) => addUser(users, user);

  return updateUsersUseCase(store, addUserFunc);
};

export { createUserUseCase };
