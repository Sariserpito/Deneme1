import { Progress } from "../progress/Progress";
import { Timer } from "../timer/Timer";

export type Game = {
  createdAt: Date;
  id: string;
  progresses?: Array<Progress>;
  timers?: Array<Timer>;
  title: string | null;
  updatedAt: Date;
};
