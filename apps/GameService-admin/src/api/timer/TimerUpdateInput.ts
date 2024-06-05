import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";

export type TimerUpdateInput = {
  delay?: number | null;
  game?: GameWhereUniqueInput | null;
  sceneId?: string | null;
  targetScene?: string | null;
};
