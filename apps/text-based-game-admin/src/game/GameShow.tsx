import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { GAME_TITLE_FIELD } from "./GameTitle";
import { SCENE_TITLE_FIELD } from "../scene/SceneTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const GameShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Progress"
          target="gameId"
          label="Progresses"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="currentScene" source="currentScene" />
            <ReferenceField label="game" source="game.id" reference="Game">
              <TextField source={GAME_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField label="scene" source="scene.id" reference="Scene">
              <TextField source={SCENE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Timer" target="gameId" label="Timers">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="delay" source="delay" />
            <ReferenceField label="game" source="game.id" reference="Game">
              <TextField source={GAME_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField label="scene" source="scene.id" reference="Scene">
              <TextField source={SCENE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="targetScene" source="targetScene" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
