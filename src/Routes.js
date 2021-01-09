import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from './containers/Home';
import Login from "./containers/ColaboradorContainer/Login";
import Cliente from "./containers/Cliente";
import Colaborador from './containers/ColaboradorContainer/colabRegistro';
import Maquinaria from './containers/MaquinariaContainer/index';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/Home" component={Home} />
    <Route exact path="/cliente" component={Cliente} />
    <Route exact path="/colaborador" component={Colaborador} />
    <Route exact path="/maquina" component={Maquinaria} />
  </Switch>
);
export default Routes;