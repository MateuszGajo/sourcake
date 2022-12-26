import { User } from "./userEntity";

const addUser = (users: User[], user: User) => [...users, user];

export { addUser };
