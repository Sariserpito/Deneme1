import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ProgressEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="currentScene" source="currentScene" />
        <TextInput label="game ID" source="gameId" />
        <TextInput label="scene ID" source="sceneId" />
        <TextInput label="user ID" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
