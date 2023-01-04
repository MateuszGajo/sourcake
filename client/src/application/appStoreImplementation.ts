import { combineReducers, legacy_createStore as createStore } from "redux";
import { combineUserReducer } from "./data/user/userReducer";

const rootReducer = combineReducers({
  users: combineUserReducer,
});

const appStoreImplementation = createStore(rootReducer);

type AppRootState = ReturnType<typeof appStoreImplementation.getState>;

export { appStoreImplementation };
export type { AppRootState };
