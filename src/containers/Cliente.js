import React, { Component } from 'react'

export default class Cliente extends Component {
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





                               <div>
                                    <h3>Dar de Alta a un Cliente</h3>
                                            <p>Datos requeridos son Nombre Completo Y Año.</p>
                                </div>  

            <div class="uk-child-width-expand@s" uk-grid>
                        <div class="uk-grid-item-match">
                                <div class="uk-card uk-card-default uk-card-body">
                                        <h3>Formulario </h3>

                                    <form>

                                            <div class="uk-margin">
                                                    <input class="uk-input uk-form-width-medium uk-form-large" type="text" placeholder="Nombre Completo"></input>
                                            </div>

                                            <div class="uk-margin">
                                                    <input class="uk-input uk-form-width-medium uk-form-large" type="text" placeholder="Año"></input>
                                            </div>



                                    </form>


                                </div>
                        </div>      


            


                                </div> 




        </div> 


         
    )
    }
}
