import { Game } from "../game/Game";
import { Scene } from "../scene/Scene";
import { User } from "../user/User";

export type Progress = {
  createdAt: Date;
  currentScene: string | null;
  game?: Game | null;
  id: string;
  scene?: Scene | null;
  updatedAt: Date;
  user?: User | null;
};
