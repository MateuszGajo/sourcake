import { User } from "../../domain/user/userEntity";
import { UserStore } from "../../domain/user/userStore";

type UpdateUserStore = Pick<UserStore, "updateUsers" | "users">;

const updateUsersUseCase = (
  store: UpdateUserStore,
  updateBy: (users: User[]) => User[]
) => {
  const updatedCounter = store.users ? updateBy(store.users.list) : store.users;

  if (!updatedCounter || store.users.list === updatedCounter) return;

  return store.updateUsers(updatedCounter);
};

export { updateUsersUseCase };
export type { UpdateUserStore };
