import { JsonValue } from "type-fest";
import { Timer } from "../timer/Timer";

export type Game = {
  createdAt: Date;
  id: string;
  progresses: JsonValue;
  timers?: Array<Timer>;
  title: string | null;
  updatedAt: Date;
};
