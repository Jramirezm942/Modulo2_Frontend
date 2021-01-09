import React, { Component } from 'react'


export default class Home extends Component {
    render() {
        return (
            <div>
        <div class="uk-position-relative">
                        <img src="https://www.esan.edu.pe/apuntes-empresariales/2019/02/18/1500x844tipos_oficinas_proyectos_.jpg" alt=""/>
                            <div class="uk-position-top">
                                <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar="true">
                                    <div class="uk-navbar-center">
                                            <ul class="uk-navbar-nav">
                                                <li class="uk-active"><a href="//">MANAGER TRACKER</a></li>
                                                        <li>
                                                                <a href="//">Colaborador</a>
                                                                        <div class="uk-navbar-dropdown">
                                                                                <ul class="uk-nav uk-navbar-dropdown-nav">
                                                                                    <li class="uk-nav-header">Opciones</li>
                                                                                        <li><a href="/colaborador/registro">Registrar</a></li>
                                                                                            <li><a href="//">Actuializar</a></li>
                                                                                </ul>
                                                                        </div>
                                                    </li>
                                    <li>
                                            <a href="//">Cliente</a>
                                            <div class="uk-navbar-dropdown">
                                                <ul class="uk-nav uk-navbar-dropdown-nav">
                                                    <li class="uk-nav-header">Opciones</li>
                                                        <li><a href="//">Registrar</a></li>
                                                            <li><a href="//">Actuializar</a></li>
                                                </ul>
                                            </div>
                                    </li>
                                    <li>
                                        <a href="//">Pedidos</a>
                                        <div class="uk-navbar-dropdown">
                                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                                <li class="uk-nav-header">Opciones</li>
                                                    <li><a href="//">Registrar</a></li>
                                                        <li><a href="//">Actuializar</a></li>
                                            </ul>
                                        </div>
                                </li>
                                <li>
                                    <a href="//">Maquinaria</a>
                                    <div class="uk-navbar-dropdown">
                                        <ul class="uk-nav uk-navbar-dropdown-nav">
                                            <li class="uk-nav-header">Opciones</li>
                                                <li><a href="//">Registrar</a></li>
                                                    <li><a href="//">Actuializar</a></li>
                                        </ul>
                                    </div>
                            </li>
                            <li>
                                <a href="//">Dash - Board</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
            </div>
        )
    }
}