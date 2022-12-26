import React from "react";
import { User } from "../domain/userEntity";
import { UserStore } from "../domain/userStore";
import { createUserUseCase } from "../useCases/createUserUseCase";

const useUserViewModel = (store: UserStore) => {
  const addUser = React.useCallback(
    (user: User) => createUserUseCase(store, user),
    [store.users]
  );

  return {
    users: store.users,
    addUser,
  };
};

export { useUserViewModel };
