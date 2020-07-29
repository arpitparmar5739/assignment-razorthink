import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { RoutesPath } from "../constants";

import Home from "../components/Home";

const routes = () => (
  <Router>
    <Switch>
      <Route exact path={RoutesPath.home} component={Home} />
      <Route exact path={RoutesPath.searchKeyword} component={Home} />
      <Route exact path={RoutesPath.imageView} component={Home} />
      <Redirect from="*" to={RoutesPath.home} />
    </Switch>
  </Router>
);

export default routes;
