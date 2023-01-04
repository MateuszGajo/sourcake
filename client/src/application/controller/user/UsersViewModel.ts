import React from "react";
import { useUserStoreImplementation } from "../../data/user/usersStoreImplementation";
import { User } from "../../domain/user/userEntity";
import { UserStore } from "../../domain/user/userStore";
import { createUserUseCase } from "../../useCases/user/createUserUseCase";

const useUserViewModel = () => {
  const userStore = useUserStoreImplementation();

  const addUser = React.useCallback(
    (user: User) => createUserUseCase(userStore, user),
    [userStore.users]
  );

  return {
    users: userStore.users,
    addUser,
  };
};

export { useUserViewModel };
