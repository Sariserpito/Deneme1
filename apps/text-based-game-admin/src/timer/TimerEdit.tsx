import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { GameTitle } from "../game/GameTitle";
import { SceneTitle } from "../scene/SceneTitle";

export const TimerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="delay" source="delay" />
        <ReferenceInput source="game.id" reference="Game" label="game">
          <SelectInput optionText={GameTitle} />
        </ReferenceInput>
        <ReferenceInput source="scene.id" reference="Scene" label="scene">
          <SelectInput optionText={SceneTitle} />
        </ReferenceInput>
        <TextInput label="targetScene" source="targetScene" />
      </SimpleForm>
    </Edit>
  );
};
