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

export const SceneShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="isCheckpoint" source="isCheckpoint" />
        <TextField label="Progresses" source="progresses" />
        <TextField label="Timers" source="timers" />
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
      </SimpleShowLayout>
    </Show>
  );
};
