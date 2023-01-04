import * as actionTypes from "./authActionTypes";

const setAuthErrorAction = (error: string) => (dispatch: any) =>
  dispatch({ type: actionTypes.SET_ERROR, error });

export { setAuthErrorAction };
