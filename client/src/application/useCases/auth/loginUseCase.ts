import { infrastructure } from "../../../infrastructure/api/modules";
import { Creds } from "../../domain/auth/authEntity";
import {
  updateUserAuthUseCase,
  UpdateUserStore,
} from "./updateUserAuthUseCase";

const loginUser = async (store: UpdateUserStore, creds: Creds) => {
  try {
    // send request
    const user = await infrastructure.auth.login(creds);

    updateUserAuthUseCase(store, user);
  } catch (err) {
    // catch
  }
};

export { loginUser };
