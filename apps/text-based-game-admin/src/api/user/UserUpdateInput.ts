import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  progresses?: InputJsonValue;
  roles?: InputJsonValue;
  username?: string;
};
