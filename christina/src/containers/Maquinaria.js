import React, { Component } from 'react'

export default class Maquinaria extends Component {
    render() {
        return (
            <div>
                    <nav class="uk-navbar uk-navbar-container uk-margin">
                            <div class="uk-navbar-left">
                                    <a class="uk-navbar-toggle" href="//">
                                        <span uk-navbar-toggle-icon></span> <span class="uk-margin-small-left">HOME</span>
                                    </a>
                            </div>
                    </nav>

                    <div class="uk-section uk-section-primary uk-light">
                            <div class="uk-container">
                                    <h3>STATUS MAQUINARIA</h3>
                                    <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
                                            <div>
                                                     <p>Colborador</p>
                                            </div>
                                            <div>
                                                    <p>AQUI VAN LOS COLABORADORES </p>
                                            </div>
                    
                                    </div>      

                                    <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
                                            <div>
                                                    <p>Modelo</p>
                                            </div>
                                            <div>
                                                    <p>AQUI VA EL MODELO DE LA MAQUINA</p>
                                            </div>
                    
                                    </div> 


                                    <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
                                            <div>
                                                    <p>Capacidad</p>
                                            </div>
                                            <div>
                                                    <p>CAPACIAD DE PRODUCCION POR HORA</p>
                                            </div>
                    
                                    </div> 

                                    <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
                                            <div>
                                                    <p>Estado</p>
                                            </div>
                                            <div>
                                                    <p>ACTIVA//DISPONIBLE/APAGADA</p>
                                            </div>
                    
                                    </div> 


                                    

                                </div>
                            </div>
            </div>
        )
    }
}
