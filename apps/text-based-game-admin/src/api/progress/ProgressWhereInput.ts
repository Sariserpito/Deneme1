import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { SceneWhereUniqueInput } from "../scene/SceneWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProgressWhereInput = {
  currentScene?: StringNullableFilter;
  game?: GameWhereUniqueInput;
  id?: StringFilter;
  scene?: SceneWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
