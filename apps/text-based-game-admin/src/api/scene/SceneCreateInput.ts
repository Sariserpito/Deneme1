import { ChoiceCreateNestedManyWithoutScenesInput } from "./ChoiceCreateNestedManyWithoutScenesInput";
import { ProgressCreateNestedManyWithoutScenesInput } from "./ProgressCreateNestedManyWithoutScenesInput";
import { TimerCreateNestedManyWithoutScenesInput } from "./TimerCreateNestedManyWithoutScenesInput";

export type SceneCreateInput = {
  choices?: ChoiceCreateNestedManyWithoutScenesInput;
  content?: string | null;
  isCheckpoint?: boolean | null;
  progresses?: ProgressCreateNestedManyWithoutScenesInput;
  timers?: TimerCreateNestedManyWithoutScenesInput;
};
