import { User } from "../../../../application/domain/user/userEntity";
import { mapUserToDto } from "../../mappers/user/mapUserToDto";
import { agent } from "../../agent";

const getUser = async (): Promise<User> => {
  const { data } = await agent.user.get();

  return mapUserToDto(data);
};

export default getUser;
