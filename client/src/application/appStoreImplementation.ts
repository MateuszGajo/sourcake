import { combineReducers, legacy_createStore as createStore } from "redux";
import { usersReducer } from "./data/userReducer";

const rootReducer = combineReducers({
  users: usersReducer,
});

const appStoreImplementation = createStore(rootReducer);

type AppRootState = ReturnType<typeof appStoreImplementation.getState>;

export { appStoreImplementation };
export type { AppRootState };
