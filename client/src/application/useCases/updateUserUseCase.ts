import { User } from "../domain/userEntity";
import { UserStore } from "../domain/userStore";

type UpdateUserStore = Pick<UserStore, "updateUsers" | "users">;

const updateUsersUseCase = (
  store: UpdateUserStore,
  updateBy: (users: User[]) => User[]
) => {
  const updatedCounter = store.users ? updateBy(store.users) : store.users;

  if (!updatedCounter || store.users === updatedCounter) return;

  return store.updateUsers(updatedCounter);
};

export { updateUsersUseCase };
export type { UpdateUserStore };
