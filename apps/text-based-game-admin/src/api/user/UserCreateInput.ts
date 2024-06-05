import { ProgressCreateNestedManyWithoutUsersInput } from "./ProgressCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  progresses?: ProgressCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
