import { Progress as TProgress } from "../api/progress/Progress";

export const PROGRESS_TITLE_FIELD = "currentScene";

export const ProgressTitle = (record: TProgress): string => {
  return record.currentScene?.toString() || String(record.id);
};
