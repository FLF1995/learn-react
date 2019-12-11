import React from 'react'
import { HashRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import App from "./pages/App";
import Clock from "./pages/Clock";
import Toggle from "./pages/Toggle";
import Layout from "./MainLayout";
import LoginControl from "./pages/LoginControl";

const history = createBrowserHistory();
const BasicRoutes = () => (
  <HashRouter history={history}>
    <Layout></Layout>
    <Switch>
      <Route exact path="/app/:id" component={App}></Route>
      <Route exact path="/clock" component={Clock}></Route>
      <Route exact path="/toggle" component={Toggle}></Route>
      <Route exact path="/login-control" component={LoginControl}></Route>
    </Switch>
  </HashRouter>
);

export default BasicRoutes;