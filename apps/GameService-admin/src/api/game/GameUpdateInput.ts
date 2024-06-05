import { InputJsonValue } from "../../types";
import { TimerUpdateManyWithoutGamesInput } from "./TimerUpdateManyWithoutGamesInput";

export type GameUpdateInput = {
  progresses?: InputJsonValue;
  timers?: TimerUpdateManyWithoutGamesInput;
  title?: string | null;
};
