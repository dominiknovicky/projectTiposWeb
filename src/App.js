import { ThemeProvider } from "styled-components";
import React from "react";
import { Switch, Route } from "react-router-dom";
import theme from "./styles/themes/default";
import LoginRegistration from "./containers/LogRegPage";
import Homepage from './containers/Homepage/index';
import Userprofile from './containers/UserprofilePage/index';

const App = () => (
  <div>
    <ThemeProvider theme={theme}>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={Homepage} />
          />
          <Route
            path="/login"
            component={LoginRegistration} />
          />
          <Route
            path="/registration"
            component={LoginRegistration} />
          />
          <Route
            path="/user"
            component={Userprofile} />
          />
        </Switch>
      </div>
    </ThemeProvider>
  </div>
);

export default App;
