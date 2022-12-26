import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppRootState } from "../appStoreImplementation";
import { User } from "../domain/userEntity";
import { UserStore } from "../domain/userStore";
import { updateUsersAction } from "./userActions";

const usersSelector = (state: AppRootState) => state.users;

const useUserStoreImplementation = (): UserStore => {
  const users = useSelector(usersSelector);

  const dispatch = useDispatch();

  const updateUsers = React.useCallback(
    (users: User[]) => updateUsersAction(users)(dispatch),
    [dispatch]
  );

  return {
    users,
    updateUsers,
  };
};

export { useUserStoreImplementation };
