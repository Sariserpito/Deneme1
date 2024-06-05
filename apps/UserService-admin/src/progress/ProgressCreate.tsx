import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ProgressCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="currentScene" source="currentScene" />
        <TextInput label="game ID" source="gameId" />
        <TextInput label="scene ID" source="sceneId" />
        <TextInput label="user ID" source="userId" />
      </SimpleForm>
    </Create>
  );
};
