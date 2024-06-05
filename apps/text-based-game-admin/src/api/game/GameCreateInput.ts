import { ProgressCreateNestedManyWithoutGamesInput } from "./ProgressCreateNestedManyWithoutGamesInput";
import { TimerCreateNestedManyWithoutGamesInput } from "./TimerCreateNestedManyWithoutGamesInput";

export type GameCreateInput = {
  progresses?: ProgressCreateNestedManyWithoutGamesInput;
  timers?: TimerCreateNestedManyWithoutGamesInput;
  title?: string | null;
};
