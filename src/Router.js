import React from 'react'
import { HashRouter, Route, Switch, hashHistory } from "react-router-dom";
import App from "./pages/App";
import Clock from "./pages/Clock";
import Toggle from "./pages/Toggle";
import Layout from "./MainLayout";
import LoginControl from "./pages/LoginControl";

const BasicRoutes = () => (
  <HashRouter history={hashHistory}>
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