export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface UserState {
  list: User[];
  me: User;
}
