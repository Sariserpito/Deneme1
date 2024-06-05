import { InputJsonValue } from "../../types";
import { TimerCreateNestedManyWithoutGamesInput } from "./TimerCreateNestedManyWithoutGamesInput";

export type GameCreateInput = {
  progresses?: InputJsonValue;
  timers?: TimerCreateNestedManyWithoutGamesInput;
  title?: string | null;
};
