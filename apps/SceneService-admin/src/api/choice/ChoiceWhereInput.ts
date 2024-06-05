import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SceneWhereUniqueInput } from "../scene/SceneWhereUniqueInput";

export type ChoiceWhereInput = {
  id?: StringFilter;
  nextScene?: StringNullableFilter;
  scene?: SceneWhereUniqueInput;
  text?: StringNullableFilter;
};
