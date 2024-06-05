import { ChoiceCreateNestedManyWithoutScenesInput } from "./ChoiceCreateNestedManyWithoutScenesInput";
import { InputJsonValue } from "../../types";

export type SceneCreateInput = {
  choices?: ChoiceCreateNestedManyWithoutScenesInput;
  content?: string | null;
  isCheckpoint?: boolean | null;
  progresses?: InputJsonValue;
  timers?: InputJsonValue;
};
