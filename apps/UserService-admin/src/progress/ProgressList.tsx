import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProgressList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Progresses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="currentScene" source="currentScene" />
        <TextField label="game ID" source="gameId" />
        <TextField label="ID" source="id" />
        <TextField label="scene ID" source="sceneId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user ID" source="userId" />
      </Datagrid>
    </List>
  );
};
