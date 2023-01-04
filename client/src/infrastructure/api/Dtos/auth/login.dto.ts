import { User } from "../../../../application/domain/user/userEntity";
import { mapUserToDto } from "../../mappers/user/mapUserToDto";
import { agent } from "../../agent";
import { Creds } from "../../../../application/domain/auth/authEntity";

const login = async (creds: Creds): Promise<User> => {
  const { data } = await agent.auth.login(creds);

  return mapUserToDto(data);
};

export default login;
