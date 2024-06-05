import { ChoiceUpdateManyWithoutScenesInput } from "./ChoiceUpdateManyWithoutScenesInput";
import { InputJsonValue } from "../../types";

export type SceneUpdateInput = {
  choices?: ChoiceUpdateManyWithoutScenesInput;
  content?: string | null;
  isCheckpoint?: boolean | null;
  progresses?: InputJsonValue;
  timers?: InputJsonValue;
};
