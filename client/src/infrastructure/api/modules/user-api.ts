import requests from "../shared/requests";
import { APIUser } from "../types/user";

const user = {
  get: () => requests.get<APIUser>("/users"),
};

export default user;
