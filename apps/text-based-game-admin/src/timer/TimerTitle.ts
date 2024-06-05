import { Timer as TTimer } from "../api/timer/Timer";

export const TIMER_TITLE_FIELD = "targetScene";

export const TimerTitle = (record: TTimer): string => {
  return record.targetScene?.toString() || String(record.id);
};
