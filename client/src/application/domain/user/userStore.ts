import { User, UserState } from "./userEntity";

interface UserStore {
  users: UserState;
  updateUsers(users: User[]): User[];
  loginUser(user: User): User;
}

export type { UserStore };
