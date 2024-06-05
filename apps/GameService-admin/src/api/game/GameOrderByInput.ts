import { SortOrder } from "../../util/SortOrder";

export type GameOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  progresses?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
