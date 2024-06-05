import { SortOrder } from "../../util/SortOrder";

export type ProgressOrderByInput = {
  createdAt?: SortOrder;
  currentScene?: SortOrder;
  gameId?: SortOrder;
  id?: SortOrder;
  sceneId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
