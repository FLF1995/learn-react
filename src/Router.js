import React from 'react'
import { HashRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import App from "./pages/App";
import Clock from "./pages/Clock";
import Toggle from "./pages/Toggle";
import Status from "./pages/Status";
import ListAndKey from "./pages/ListAndKey";
import Form from "./pages/Form";
// import Layout from "./MainLayout";
import LoginControl from "./pages/LoginControl";
import Login from "./pages/login/Login";

const history = createBrowserHistory();
const BasicRoutes = () => (
  <HashRouter history={history}>
    {/* <Layout></Layout> */}
    <Switch>
      <Route exact path="/app/:id" component={App}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/clock" component={Clock}></Route>
      <Route exact path="/toggle" component={Toggle}></Route>
      <Route exact path="/status" component={Status}></Route>
      <Route exact path="/form" component={Form}></Route>
      <Route exact path="/list-and-key" component={ListAndKey}></Route>
      <Route exact path="/login-control" component={LoginControl}></Route>
    </Switch>
  </HashRouter>
);

export default BasicRoutes;