import { Creds } from "../../../application/domain/auth/authEntity";
import requests from "../shared/requests";
import { APIUser } from "../types/user";

const user = {
  login: (creds: Creds) => requests.post<APIUser>("/auth/login", creds),
};

export default user;
