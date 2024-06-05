import { Choice } from "../choice/Choice";
import { JsonValue } from "type-fest";

export type Scene = {
  choices?: Array<Choice>;
  content: string | null;
  createdAt: Date;
  id: string;
  isCheckpoint: boolean | null;
  progresses: JsonValue;
  timers: JsonValue;
  updatedAt: Date;
};
