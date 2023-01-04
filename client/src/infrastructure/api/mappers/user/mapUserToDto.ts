import { User } from "../../../../application/domain/user/userEntity";
import { Impossible } from "../../shared/types";
import { APIUser } from "../../types/user";

function mapper<T extends User>(
  user: T & Impossible<Exclude<keyof T, keyof User>>
): T {
  return user;
}

export const mapUserToDto = (user: APIUser): User => {
  const { _id, ...userProp } = user;

  return mapper({ ...userProp, id: user._id });
};
