import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppRootState } from "../../appStoreImplementation";
import { AuthStore } from "../../domain/auth/authStore";
import { setAuthErrorAction } from "./authActions";

const usersSelector = (state: AppRootState) => state.users;

const useAuthStoreImplementation = (): AuthStore => {
  const users = useSelector(usersSelector);

  const dispatch = useDispatch();

  const setError = React.useCallback(
    (error: string) => setAuthErrorAction(error)(dispatch),
    [dispatch]
  );

  return {
    me: users.me,
    setError,
  };
};

export { useAuthStoreImplementation as useUserStoreImplementation };
