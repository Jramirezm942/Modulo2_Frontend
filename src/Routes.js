import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from './containers/Home';
import Login from "./containers/ColaboradorContainer/Login";
import Cliente from "./containers/ClienteContainer/Cliente";
import colabRegistro from './containers/ColaboradorContainer/colabRegistro';
import Maquinaria from './containers/MaquinariaContainer/index';
import Pedido from './containers/PedidosContainer/index';
import ListaPedidos from './containers/PedidosContainer/lista';
import ListaClientes from "./containers/ClienteContainer/Clientelista";
import ListaColaboradores from './containers/ColaboradorContainer/lista';
import ListaMaquinas from './containers/MaquinariaContainer/lista';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/Home" component={Home} />
    <Route exact path="/cliente" component={Cliente} />
    <Route exact path="/colaborador/registro" component={colabRegistro} />
    <Route exact path="/maquina" component={Maquinaria} />
    <Route exact path="/pedido" component={Pedido} />
    <Route exact path="/listapedidos" component={ListaPedidos} />
    <Route exact path="/listaclientes" component={ListaClientes} />
    <Route exact path="/listacolaboradores" component={ListaColaboradores} />
    <Route exact path="/listamaquinas" component={ListaMaquinas} />
    <Route exact path="/pedido/:id" component={Pedido} />
    <Route exact path="/cliente/:id" component={Cliente} />
    <Route exact path="/colaborador/:id" component={colabRegistro} />
    <Route exact path="/maquina/:id" component={Maquinaria} />
  </Switch>
);
export default Routes;