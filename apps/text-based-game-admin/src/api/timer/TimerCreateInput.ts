import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { SceneWhereUniqueInput } from "../scene/SceneWhereUniqueInput";

export type TimerCreateInput = {
  delay?: number | null;
  game?: GameWhereUniqueInput | null;
  scene?: SceneWhereUniqueInput | null;
  targetScene?: string | null;
};
