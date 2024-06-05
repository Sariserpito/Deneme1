import { ProgressUpdateManyWithoutGamesInput } from "./ProgressUpdateManyWithoutGamesInput";
import { TimerUpdateManyWithoutGamesInput } from "./TimerUpdateManyWithoutGamesInput";

export type GameUpdateInput = {
  progresses?: ProgressUpdateManyWithoutGamesInput;
  timers?: TimerUpdateManyWithoutGamesInput;
  title?: string | null;
};
