import { ThemeProvider } from "styled-components";
import React from "react";
  import { Switch, Route } from "react-router-dom";
import theme from "./styles/themes/default";
import LoginRegistration from "./containers/LogRegPage";

const App = () => (
  <div>
    <ThemeProvider theme={theme}>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={LoginRegistration} />
          />
          <Route
            path="/login"
            component={LoginRegistration} />
          />
          <Route
            path="/registration"
            component={LoginRegistration} />
          />
        </Switch>
      </div>
    </ThemeProvider>
  </div>
);

export default App;
