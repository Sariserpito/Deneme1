import { SceneWhereUniqueInput } from "../scene/SceneWhereUniqueInput";

export type ChoiceUpdateInput = {
  nextScene?: string | null;
  scene?: SceneWhereUniqueInput | null;
  text?: string | null;
};
