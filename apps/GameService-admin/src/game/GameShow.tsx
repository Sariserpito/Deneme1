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

export const GameShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Progresses" source="progresses" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Timer" target="gameId" label="Timers">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="delay" source="delay" />
            <ReferenceField label="game" source="game.id" reference="Game">
              <TextField source={GAME_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="scene ID" source="sceneId" />
            <TextField label="targetScene" source="targetScene" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
