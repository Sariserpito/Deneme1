import { Scene } from "../scene/Scene";

export type Choice = {
  createdAt: Date;
  id: string;
  nextScene: string | null;
  scene?: Scene | null;
  text: string | null;
  updatedAt: Date;
};
