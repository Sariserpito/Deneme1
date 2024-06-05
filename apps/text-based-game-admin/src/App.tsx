import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { GameList } from "./game/GameList";
import { GameCreate } from "./game/GameCreate";
import { GameEdit } from "./game/GameEdit";
import { GameShow } from "./game/GameShow";
import { SceneList } from "./scene/SceneList";
import { SceneCreate } from "./scene/SceneCreate";
import { SceneEdit } from "./scene/SceneEdit";
import { SceneShow } from "./scene/SceneShow";
import { TimerList } from "./timer/TimerList";
import { TimerCreate } from "./timer/TimerCreate";
import { TimerEdit } from "./timer/TimerEdit";
import { TimerShow } from "./timer/TimerShow";
import { ChoiceList } from "./choice/ChoiceList";
import { ChoiceCreate } from "./choice/ChoiceCreate";
import { ChoiceEdit } from "./choice/ChoiceEdit";
import { ChoiceShow } from "./choice/ChoiceShow";
import { ProgressList } from "./progress/ProgressList";
import { ProgressCreate } from "./progress/ProgressCreate";
import { ProgressEdit } from "./progress/ProgressEdit";
import { ProgressShow } from "./progress/ProgressShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TextBasedGame"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Game"
          list={GameList}
          edit={GameEdit}
          create={GameCreate}
          show={GameShow}
        />
        <Resource
          name="Scene"
          list={SceneList}
          edit={SceneEdit}
          create={SceneCreate}
          show={SceneShow}
        />
        <Resource
          name="Timer"
          list={TimerList}
          edit={TimerEdit}
          create={TimerCreate}
          show={TimerShow}
        />
        <Resource
          name="Choice"
          list={ChoiceList}
          edit={ChoiceEdit}
          create={ChoiceCreate}
          show={ChoiceShow}
        />
        <Resource
          name="Progress"
          list={ProgressList}
          edit={ProgressEdit}
          create={ProgressCreate}
          show={ProgressShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
