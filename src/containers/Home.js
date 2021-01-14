import React, { Component } from 'react'


export default class Home extends Component {
    render() {
        return (
            <div>
        <div className="uk-position-relative">
                        <img src="https://i.picsum.photos/id/370/4928/3264.jpg?hmac=UGe0txSnG4hhV-fAoi7e3mTnvQFhYYNcPJJbYFePh5Q" alt=""/>
                            <div className="uk-position-top">
                                <nav className="uk-navbar-container" uk-navbar="true">
                                    <div className="uk-navbar-center">
                                            <ul className="uk-navbar-nav">
                                                <li className="uk-active"><a href="//">MANAGER TRACKER</a></li>
                                                        <li>
                                                                <a href="//">Colaborador</a>
                                                                        <div className="uk-navbar-dropdown">
                                                                                <ul className="uk-nav uk-navbar-dropdown-nav">
                                                                                    <li className="uk-nav-header">Opciones</li>
                                                                                        <li><a href="/colaborador/registro">Registrar</a></li>
                                                                                            <li><a href="//">Actuializar</a></li>
                                                                                </ul>
                                                                        </div>
                                                    </li>
                                    <li>
                                            <a href="//">Cliente</a>
                                            <div className="uk-navbar-dropdown">
                                                <ul className="uk-nav uk-navbar-dropdown-nav">
                                                    <li className="uk-nav-header">Opciones</li>
                                                        <li><a href="//">Registrar</a></li>
                                                            <li><a href="//">Actuializar</a></li>
                                                </ul>
                                            </div>
                                    </li>
                                    <li>
                                        <a href="//">Pedidos</a>
                                        <div className="uk-navbar-dropdown">
                                            <ul className="uk-nav uk-navbar-dropdown-nav">
                                                <li className="uk-nav-header">Opciones</li>
                                                    <li><a href="//">Registrar</a></li>
                                                        <li><a href="//">Actuializar</a></li>
                                            </ul>
                                        </div>
                                </li>
                                <li>
                                    <a href="//">Maquinaria</a>
                                    <div className="uk-navbar-dropdown">
                                        <ul className="uk-nav uk-navbar-dropdown-nav">
                                            <li className="uk-nav-header">Opciones</li>
                                                <li><a href="//">Registrar</a></li>
                                                    <li><a href="//">Actuializar</a></li>
                                        </ul>
                                    </div>
                            </li>
                            <li>
                                <a href="//">DashBoard</a>
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