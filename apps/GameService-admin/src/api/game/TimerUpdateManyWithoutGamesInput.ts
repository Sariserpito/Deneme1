import { TimerWhereUniqueInput } from "../timer/TimerWhereUniqueInput";

export type TimerUpdateManyWithoutGamesInput = {
  connect?: Array<TimerWhereUniqueInput>;
  disconnect?: Array<TimerWhereUniqueInput>;
  set?: Array<TimerWhereUniqueInput>;
};
