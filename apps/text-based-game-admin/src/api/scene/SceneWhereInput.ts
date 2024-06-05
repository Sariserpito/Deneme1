import { ChoiceListRelationFilter } from "../choice/ChoiceListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ProgressListRelationFilter } from "../progress/ProgressListRelationFilter";
import { TimerListRelationFilter } from "../timer/TimerListRelationFilter";

export type SceneWhereInput = {
  choices?: ChoiceListRelationFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  isCheckpoint?: BooleanNullableFilter;
  progresses?: ProgressListRelationFilter;
  timers?: TimerListRelationFilter;
};
