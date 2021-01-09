import React, { Component } from 'react'
import {registro} from "../../services/colabingWs";
export default class colabRegistro extends Component {
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
                registro(this.state.data).then((response)=>{
                      this.setState({data:{}})
                      console.log("felicidades",response)
// aqui va algo de dylan
                      localStorage.setItem( "Login",JSON.stringify( response.data.user ) )
                      //setearemos el usuario hasta el app D:!!
                      //destoructurando
                      this.context.setUser(response.data.user)
                      this.props.history.push("cliente")
// aqui va algo de dylan
                }).catch((error)=>{
                        console.log("hay un error",error.response)
                })
              }
    render() {
         // aqui podemos declarar const var & let
         console.log("la data",this.state.data);
         const {handleChange, onSubmit} = this;
         const {data} = this.state;
        return (
            <div>
                <div>
                        <div className="uk-child-width-expand@s uk-text-center">
                                <h1 classNameName="uk-heading-medium">
                                    <div classNameName="uk-card uk-card-default uk-card-body">REGISTRAR UN NUEVO COLABORADOR
                        </div>
                                </h1>
                                    </div>
                        <div className="uk-child-width-expand@s uk-text-center" >
        <form
        // onSubmit={onSubmit}
        >
{/*////////////////////////////// segundo input input /////////////////////////////////////////*/}
                                                        <div className="uk-margin">
                                            <div className="uk-inline">
                                                <span className="uk-form-icon" uk-icon="icon: user" ></span>
                                                        <input className="uk-input"
                                                        type="nombre"
                                                        name="nombre"
                                                        // onChange={handleChange}
                                                        // required
                                                        // value = {data["email"] ? data["email"]:""}
                                                        />
                                    </div>
                                            </div>
                                        {/*////////////////////////////// primer input /////////////////////////////////////////*/}
                                    <div className="uk-margin">
                                            <div className="uk-inline">
                                                <span className="uk-form-icon" uk-icon="icon: mail"></span>
                                                        <input className="uk-input"
                                                        type="email"
                                                        name="email"
                                                        // onChange={handleChange}
                                                        // required
                                                        // value = {data["email"] ? data["email"]:""}
                                                        />
                                    </div>
                                            </div>
                                             {/*////////////////////////////// segundo input input /////////////////////////////////////////*/}
                                            <div className="uk-margin">
                                            <div className="uk-inline">
                                                <span className="uk-form-icon" uk-icon="icon: mail" ></span>
                                                        <input className="uk-input"
                                                        type="email"
                                                        name="email"
                                                        // onChange={handleChange}
                                                        // required
                                                        // value = {data["confirmaremail"] ? data["confirmaremail"]:""}
                                                        />
                                    </div>
                                            </div>
 {/*////////////////////////////// tercer input /////////////////////////////////////////*/}
                                    <div className="uk-margin">
                                            <div className="uk-inline">
                                                    <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                                                        <input
                                                        className="uk-input"
                                                        type="password" //password
                                                        // required
                                                        // name="password"
                                                        // onChange={handleChange}
                                                        // value = {data["password"] ? data["password"]:""}
                                                        />
                                    </div>
                                            </div>
 {/*////////////////////////////// ultimo  input /////////////////////////////////////////*/}
                                            <div className="uk-margin">
                                            <div className="uk-inline">
                                                    <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                                                        <input
                                                        className="uk-input"
                                                        type="password" //password
                                                        // required
                                                        // name="password"
                                                        // onChange={handleChange}
                                                        // value = {data["password"] ? data["password"]:""}
                                                        />
                                    </div>
                                            </div>
                                            <div className="uk-child-width-expand@s uk-text-center">
                                                <p>
                                                <button className="uk-button uk-button-primary uk-button-large">Registrar</button>
                                                </p>
                                        </div>
                                </form>
                        </div>
                </div>
            </div>
        )
    }
}