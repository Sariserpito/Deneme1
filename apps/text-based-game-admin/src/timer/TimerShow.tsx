import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { GAME_TITLE_FIELD } from "../game/GameTitle";
import { SCENE_TITLE_FIELD } from "../scene/SceneTitle";

export const TimerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
