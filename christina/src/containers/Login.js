import React, { Component } from 'react'



export default class Login extends Component {

    state = {
          data:{}    
    }   
                //esta funcion es para escuchar lo que el usuaio teclea en el componente Login
                handleChange = (event)=>{
                                // {key:value}  
                        const { value, name} = event.target;
                                let { data } = this.state
        
                                data[name] = value

                                this.setState({ data })
                }
                //esta funcion envia los datos a la base de datos
                onSubmit = (event) => {
                  event.preventDefault()
                  console.log("voy  enviar datos")
                  Login(this.state.data).then((response)=>{
                        this.setState({data:{}})
                        console.log("felicidades",response)

                  }).catch((error)=>{
                          console.log("hay un error")
                  })
                }

    render(){
            // aqui podemos declarar const var & let 
            console.log("la data",this.state.data);
            const {handleChange, onSubmit} = this;
            const {data} = this.state;


        return(
           
                <div>
                        <div className="uk-child-width-expand@s uk-text-center">
                                <h1 class="uk-heading-medium">
                                    <div class="uk-card uk-card-default uk-card-body">MANAGER TRACKER 

                        </div>
                                </h1>
            
                                    </div>



                        <div class="uk-child-width-expand@s uk-text-center" >
                                <form
                                onSubmit={onSubmit}
                                >
                                        
                                    <div class="uk-margin">
                                            <div class="uk-inline">  
                                                <span class="uk-form-icon" uk-icon="icon: user"></span>
                                                        <input class="uk-input" 
                                                        type="email" 
                                                        name="email" 
                                                        onChange={handleChange}
                                                        // required       
                                                        //  value = {data["email"] ? data ["email"]: ""}
                                                        />

                                    </div>
                                            </div>



                                    <div class="uk-margin">
                                            <div class="uk-inline">
                                                    <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                                                        <input 
                                                        class="uk-input" 
                                                        type="password" //password 
                                                        required
                                                        name="password"
                                                        onChange={handleChange}
                                                        // value = {data["password"] ? data ["password"]: ""}
                                                        
                                                        />

                                    </div>
                                            </div>

                                </form>
                        </div>

                                        <div class="uk-child-width-expand@s uk-text-center">
                                                <p>
    
                                                <button class="uk-button uk-button-primary uk-button-large">Entrar</button>
    
                                                </p>
                                        </div>
                                    
                </div>

               
        );
    }
}
