import React from 'react'
import { Switch, Route } from "react-router-dom";
import Login from "./containers/Login";
import Cliente from "./containers/Cliente";
import Colaborador from './containers/Colaborador';
import Maquinaria from './containers/Maquinaria';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/Cliente" component={Cliente} />
    <Route exact path="/Colaborador" component={Colaborador} />
    <Route exact path="/Maquinaria" component={Maquinaria} />
  </Switch>
);

export default Routes;