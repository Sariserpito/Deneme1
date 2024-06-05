import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { SceneWhereUniqueInput } from "../scene/SceneWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProgressCreateInput = {
  currentScene?: string | null;
  game?: GameWhereUniqueInput | null;
  scene?: SceneWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
