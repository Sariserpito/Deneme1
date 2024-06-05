import { SortOrder } from "../../util/SortOrder";

export type SceneOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isCheckpoint?: SortOrder;
  updatedAt?: SortOrder;
};
