import { StringFilter } from "../../util/StringFilter";
import { ProgressListRelationFilter } from "../progress/ProgressListRelationFilter";
import { TimerListRelationFilter } from "../timer/TimerListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GameWhereInput = {
  id?: StringFilter;
  progresses?: ProgressListRelationFilter;
  timers?: TimerListRelationFilter;
  title?: StringNullableFilter;
};
