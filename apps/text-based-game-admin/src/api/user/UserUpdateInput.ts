import { ProgressUpdateManyWithoutUsersInput } from "./ProgressUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  progresses?: ProgressUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
