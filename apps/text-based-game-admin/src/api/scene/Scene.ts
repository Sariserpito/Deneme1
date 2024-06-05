import { Choice } from "../choice/Choice";
import { Progress } from "../progress/Progress";
import { Timer } from "../timer/Timer";

export type Scene = {
  choices?: Array<Choice>;
  content: string | null;
  createdAt: Date;
  id: string;
  isCheckpoint: boolean | null;
  progresses?: Array<Progress>;
  timers?: Array<Timer>;
  updatedAt: Date;
};
