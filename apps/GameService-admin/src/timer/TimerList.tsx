import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { GAME_TITLE_FIELD } from "../game/GameTitle";

export const TimerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Timers"}
      perPage={50}
      pagination={<Pagination />}
    >
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
    </List>
  );
};
