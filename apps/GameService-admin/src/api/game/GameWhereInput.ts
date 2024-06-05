import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { TimerListRelationFilter } from "../timer/TimerListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GameWhereInput = {
  id?: StringFilter;
  progresses?: JsonFilter;
  timers?: TimerListRelationFilter;
  title?: StringNullableFilter;
};
