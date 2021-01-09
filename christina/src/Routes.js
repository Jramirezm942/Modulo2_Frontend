import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from './containers/Home';
import Login from "./containers/Login";
import Cliente from "./containers/Cliente";
import Colaborador from './containers/Colaborador';
import Maquinaria from './containers/Maquinaria';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/colaborador/ingresar" component={Login} />
    <Route exact path="/cliente" component={Cliente} />
    <Route exact path="/colaborador" component={Colaborador} />
    <Route exact path="/maquina" component={Maquinaria} />
  </Switch>
);

export default Routes;