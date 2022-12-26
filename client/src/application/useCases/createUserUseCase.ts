import { User } from "../domain/userEntity";
import { addUser } from "../domain/userModel";
import { UpdateUserStore, updateUsersUseCase } from "./updateUserUseCase";

const createUserUseCase = (store: UpdateUserStore, user: User) => {
  const addUserFunc = (users: User[]) => addUser(users, user);

  return updateUsersUseCase(store, addUserFunc);
};

export { createUserUseCase };
