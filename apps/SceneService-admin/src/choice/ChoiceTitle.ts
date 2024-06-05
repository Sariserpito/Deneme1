import { Choice as TChoice } from "../api/choice/Choice";

export const CHOICE_TITLE_FIELD = "nextScene";

export const ChoiceTitle = (record: TChoice): string => {
  return record.nextScene?.toString() || String(record.id);
};
