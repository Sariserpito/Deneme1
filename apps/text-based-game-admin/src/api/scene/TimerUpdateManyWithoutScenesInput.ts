import { TimerWhereUniqueInput } from "../timer/TimerWhereUniqueInput";

export type TimerUpdateManyWithoutScenesInput = {
  connect?: Array<TimerWhereUniqueInput>;
  disconnect?: Array<TimerWhereUniqueInput>;
  set?: Array<TimerWhereUniqueInput>;
};
