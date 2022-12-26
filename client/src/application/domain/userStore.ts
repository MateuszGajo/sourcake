import { User } from "./userEntity";

interface UserStore {
  users: User[];
  updateUsers(users: User[]): User[];
}

export type { UserStore };
