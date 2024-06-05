import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";

export type TimerCreateInput = {
  delay?: number | null;
  game?: GameWhereUniqueInput | null;
  sceneId?: string | null;
  targetScene?: string | null;
};
