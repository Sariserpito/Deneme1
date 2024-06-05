import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SCENE_TITLE_FIELD } from "./SceneTitle";
import { GAME_TITLE_FIELD } from "../game/GameTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const SceneShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="isCheckpoint" source="isCheckpoint" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Choice" target="sceneId" label="Choices">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="nextScene" source="nextScene" />
            <ReferenceField label="scene" source="scene.id" reference="Scene">
              <TextField source={SCENE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="text" source="text" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Progress"
          target="sceneId"
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
        <ReferenceManyField reference="Timer" target="sceneId" label="Timers">
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
