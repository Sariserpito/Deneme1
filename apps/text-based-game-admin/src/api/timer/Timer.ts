import { Game } from "../game/Game";
import { Scene } from "../scene/Scene";

export type Timer = {
  createdAt: Date;
  delay: number | null;
  game?: Game | null;
  id: string;
  scene?: Scene | null;
  targetScene: string | null;
  updatedAt: Date;
};
