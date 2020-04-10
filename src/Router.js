import React from 'react'
import { HashRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import App from "./pages/App";
import BasicLayout from "./pages/basicLayout/basicLayout";
import Home from "./pages/home/home"

const history = createBrowserHistory();
const BasicRoutes = () => (
  <HashRouter history={history}>
    <Switch>
      <Route path="/index" component={BasicLayout}></Route>
    </Switch>
  </HashRouter>
);

export default BasicRoutes;