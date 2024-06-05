import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { ChoiceTitle } from "../choice/ChoiceTitle";

export const SceneCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="choices"
          reference="Choice"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ChoiceTitle} />
        </ReferenceArrayInput>
        <TextInput label="content" multiline source="content" />
        <BooleanInput label="isCheckpoint" source="isCheckpoint" />
        <div />
        <div />
      </SimpleForm>
    </Create>
  );
};
