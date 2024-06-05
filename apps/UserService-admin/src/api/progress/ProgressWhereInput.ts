import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProgressWhereInput = {
  currentScene?: StringNullableFilter;
  gameId?: StringNullableFilter;
  id?: StringFilter;
  sceneId?: StringNullableFilter;
  userId?: StringNullableFilter;
};
