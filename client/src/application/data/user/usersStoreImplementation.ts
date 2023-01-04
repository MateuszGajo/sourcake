import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppRootState } from "../../appStoreImplementation";
import { User } from "../../domain/user/userEntity";
import { UserStore } from "../../domain/user/userStore";
import { updateUsersAction, loginUserAction } from "./userActions";

const usersSelector = (state: AppRootState) => state.users;

const useUserStoreImplementation = (): UserStore => {
  const users = useSelector(usersSelector);

  const dispatch = useDispatch();

  const updateUsers = React.useCallback(
    (users: User[]) => updateUsersAction(users)(dispatch),
    [dispatch]
  );

  const loginUser = React.useCallback(
    (user: User) => loginUserAction(user)(dispatch),
    [dispatch]
  );

  return {
    users,
    updateUsers,
    loginUser,
  };
};

export { useUserStoreImplementation };
