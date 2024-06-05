import { SortOrder } from "../../util/SortOrder";

export type TimerOrderByInput = {
  createdAt?: SortOrder;
  delay?: SortOrder;
  gameId?: SortOrder;
  id?: SortOrder;
  sceneId?: SortOrder;
  targetScene?: SortOrder;
  updatedAt?: SortOrder;
};
