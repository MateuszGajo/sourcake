import { User } from "../user/userEntity";

interface AuthStore {
  me: User;
  setError: (error: string) => string;
}

export type { AuthStore };
