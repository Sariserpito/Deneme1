import { ChoiceUpdateManyWithoutScenesInput } from "./ChoiceUpdateManyWithoutScenesInput";
import { ProgressUpdateManyWithoutScenesInput } from "./ProgressUpdateManyWithoutScenesInput";
import { TimerUpdateManyWithoutScenesInput } from "./TimerUpdateManyWithoutScenesInput";

export type SceneUpdateInput = {
  choices?: ChoiceUpdateManyWithoutScenesInput;
  content?: string | null;
  isCheckpoint?: boolean | null;
  progresses?: ProgressUpdateManyWithoutScenesInput;
  timers?: TimerUpdateManyWithoutScenesInput;
};
