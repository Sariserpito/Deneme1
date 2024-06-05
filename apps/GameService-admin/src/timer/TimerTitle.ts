import { Timer as TTimer } from "../api/timer/Timer";

export const TIMER_TITLE_FIELD = "sceneId";

export const TimerTitle = (record: TTimer): string => {
  return record.sceneId?.toString() || String(record.id);
};
