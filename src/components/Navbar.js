import React from "react";
import { salir} from "../services/colabingWs";

const Navbar = ({ salir }) => {
  return (


<nav className="uk-navbar-container" uk-navbar="true">
                                    <div className="uk-navbar-center">
                                            <ul className="uk-navbar-nav">
                                                <li className="uk-active"><a href="/home">MANAGER TRACKER</a></li>
                                                        <li>
                                                                <a>Colaborador</a>
                                                                        <div className="uk-navbar-dropdown">
                                                                                <ul className="uk-nav uk-navbar-dropdown-nav">
                                                                                    <li className="uk-nav-header">Opciones</li>
                                                                                        <li><a href="/colaborador/registro">Registrar</a></li>
                                                                                            <li><a href="/listacolaboradores">Actualizar</a></li>
                                                                                </ul>
                                                                                    </div>
                                                                                    </li>
                                             <li>
                                            <a>Cliente</a>
                                            <div className="uk-navbar-dropdown">
                                                <ul className="uk-nav uk-navbar-dropdown-nav">
                                                    <li className="uk-nav-header">Opciones</li>
                                                        <li><a href="/cliente">Registrar</a></li>
                                                            <li><a href="/listaclientes">Actualizar</a></li>
                                                </ul>
                                            </div>
                                    </li>
                                    <li>
                                        <a>Pedidos</a>
                                        <div className="uk-navbar-dropdown">
                                            <ul className="uk-nav uk-navbar-dropdown-nav">
                                                <li className="uk-nav-header">Opciones</li>
                                                    <li><a href="/pedido">Registrar</a></li>
                                                        <li><a href="/listapedidos">Actualizar</a></li>
                                            </ul>
                                        </div>
                                </li>
                                <li>
                                    <a>Maquinaria</a>
                                    <div className="uk-navbar-dropdown">
                                        <ul className="uk-nav uk-navbar-dropdown-nav">
                                            <li className="uk-nav-header">Opciones</li>
                                                <li><a href="/maquina">Registrar</a></li>
                                                    <li><a href="/listamaquinas">Actualizar</a></li>
                                        </ul>
                                    </div>
                            </li>
                            <li>
                                <a href="//">DashBoard</a>
                            </li>
                            <li> 
                                <a onClick={salir} href="/">Salir</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                );
            };

            export default Navbar;