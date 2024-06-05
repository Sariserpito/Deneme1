import { SortOrder } from "../../util/SortOrder";

export type SceneOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isCheckpoint?: SortOrder;
  progresses?: SortOrder;
  timers?: SortOrder;
  updatedAt?: SortOrder;
};
