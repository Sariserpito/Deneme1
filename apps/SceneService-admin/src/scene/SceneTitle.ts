import { Scene as TScene } from "../api/scene/Scene";

export const SCENE_TITLE_FIELD = "id";

export const SceneTitle = (record: TScene): string => {
  return record.id?.toString() || String(record.id);
};
