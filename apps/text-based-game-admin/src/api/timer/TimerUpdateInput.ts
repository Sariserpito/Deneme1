import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { SceneWhereUniqueInput } from "../scene/SceneWhereUniqueInput";

export type TimerUpdateInput = {
  delay?: number | null;
  game?: GameWhereUniqueInput | null;
  scene?: SceneWhereUniqueInput | null;
  targetScene?: string | null;
};
