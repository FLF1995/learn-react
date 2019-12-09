import React from 'react'
import { HashRouter, Route, Switch, hashHistory } from "react-router-dom";
import App from "./App";
import Clock from "./Clock";

const BasicRoutes = ()=>(
	<HashRouter history={hashHistory}>
    <Switch>
      <Route exact path="/app/:id" component={App}></Route>
      <Route exact path="/clock" component={Clock}></Route>
    </Switch>
	</HashRouter>
)

export default BasicRoutes;