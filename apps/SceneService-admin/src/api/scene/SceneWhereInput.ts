import { ChoiceListRelationFilter } from "../choice/ChoiceListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type SceneWhereInput = {
  choices?: ChoiceListRelationFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  isCheckpoint?: BooleanNullableFilter;
  progresses?: JsonFilter;
  timers?: JsonFilter;
};
