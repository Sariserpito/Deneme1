import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { GameTitle } from "../game/GameTitle";

export const TimerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="delay" source="delay" />
        <ReferenceInput source="game.id" reference="Game" label="game">
          <SelectInput optionText={GameTitle} />
        </ReferenceInput>
        <TextInput label="scene ID" source="sceneId" />
        <TextInput label="targetScene" source="targetScene" />
      </SimpleForm>
    </Create>
  );
};
