import React, { Component } from 'react'


 
export default class Home extends Component {
    render() {
        return (
            <div>
                                        <div class="uk-position-relative">
                                            <img src="images/light.jpg" alt=""/>
                                            <div class="uk-position-top">
                                                <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
                                                    <div class="uk-navbar-left">
                                                        <ul class="uk-navbar-nav">
                                                            <li class="uk-active"><a href="#">MANAGER - TRACKER</a></li>
                                                            {/* <li><a href="#">COLABORADOR</a></li>
                                                            <li>
                                                                <a href="#">CLIENTE</a>
                                                                <div class="uk-navbar-dropdown">
                                                                    <ul class="uk-nav uk-navbar-dropdown-nav">
                                                                        <li class="uk-active"><a href="#">Active</a></li>
                                                                        <li><a href="#">Item</a></li>
                                                                        <li class="uk-nav-header">Header</li>
                                                                        <li><a href="#">Item</a></li>
                                                                        <li><a href="#">Item</a></li>
                                                                        <li class="uk-nav-divider"></li>
                                                                        <li><a href="#">Item</a></li>
                                                                    </ul>
                                                                </div>
                                                            </li> */}



<li>
                                                                <a href="#">Colaborador</a>
                                                                        <div class="uk-navbar-dropdown">
                                                                                <ul class="uk-nav uk-navbar-dropdown-nav">
                                     
                                       
                                                                                    <li class="uk-nav-header">Opciones</li>
                                                                                        <li><a href="#">Registrar</a></li>
                                                                                            <li><a href="#">Actuializar</a></li>
                                       
                                                                                </ul>
                                                                        </div>
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
