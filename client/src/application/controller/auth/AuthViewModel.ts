import React from "react";
import { useUserStoreImplementation } from "../../data/user/usersStoreImplementation";
import { Creds } from "../../domain/auth/authEntity";

import { loginUser } from "../../useCases/auth/loginUseCase";

const useAuthViewModel = () => {
  const userStore = useUserStoreImplementation();

  const login = React.useCallback(
    (creds: Creds) => loginUser(userStore, creds),
    [userStore.users]
  );

  return {
    me: userStore.users.me,
    login,
  };
};

export { useAuthViewModel };
