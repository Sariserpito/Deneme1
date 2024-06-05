import { Game } from "../game/Game";

export type Timer = {
  createdAt: Date;
  delay: number | null;
  game?: Game | null;
  id: string;
  sceneId: string | null;
  targetScene: string | null;
  updatedAt: Date;
};
