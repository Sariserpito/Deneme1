import { IntNullableFilter } from "../../util/IntNullableFilter";
import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TimerWhereInput = {
  delay?: IntNullableFilter;
  game?: GameWhereUniqueInput;
  id?: StringFilter;
  sceneId?: StringNullableFilter;
  targetScene?: StringNullableFilter;
};
