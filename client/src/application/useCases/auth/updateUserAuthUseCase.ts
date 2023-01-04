import { User } from "../../domain/user/userEntity";
import { UserStore } from "../../domain/user/userStore";

type UpdateUserStore = Pick<UserStore, "loginUser">;

const updateUserAuthUseCase = (store: UpdateUserStore, user: User) => {
  return store.loginUser(user);
};

export { updateUserAuthUseCase };
export type { UpdateUserStore };
