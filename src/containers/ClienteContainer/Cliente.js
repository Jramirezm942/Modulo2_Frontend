import React, { Component } from 'react'
import {registrarCliente, actualizarCliente} from "../../services/clienteWs";
import {infoCliente} from "../../services/clienteWs";
import { Navbar } from "../../components";
import AppContext from '../../AppContext';

export default class clienteRegist extends Component {
static contextType = AppContext;
        state = {
                cliente:{},  
          } 
        componentWillMount(){
                const {history} = this.props
                    //utilizamos props de rutas match ya que mandaremos datos por medio del id
                    const {id} = this.props.match.params;
                    //si viene un id en los paramas realizamos un peticion al backend
                    if(id){
                    infoCliente(id).then(res =>{
                        console.log('info cliente', res)
                        const {result} = res.data
                        this.setState({cliente: result})
                    })
                }
            }  
                      //esta funcion es para escuchar lo que el usuaio teclea en el componente Login
                      handleChange = (event)=>{
                        let {cliente} = this.state;
                         cliente = {...cliente, [event.target.name]:event.target.value};
                         this.setState({cliente})
                      }
                      //esta funcion envia los datos a la base de datos
                      onSubmit = (event) => {
                      event.preventDefault()
                       console.log("voy  enviar datos")
                       const {cliente} = this.state
                       const {id} = this.props.match.params;
                        const action = id ? actualizarCliente : registrarCliente //<---- son ws(webservices) chequen si se importaron
                        const params = id ? {cliente, id} : { cliente } // creamos los parametros depeiendo de la accion 
                        action(params).then((response)=>{
                         this.setState({cliente:{}})
                         console.log("felicidades",response)
                         this.props.history.push("/listaclientes")


                }).catch((error)=>{
                          console.log("hay un error",error.response)
                })
              }


render() {
        // aqui podemos declarar const var & let 
        console.log("la data",this.state.cliente);
        const {handleChange, onSubmit} = this;
        const {cliente} = this.state;
        let sectionStyle = {
                width: "100%",
                height: "900px",
                backgroundImage: 'url("https://i.picsum.photos/id/192/2352/2352.jpg?hmac=jN5UExysObV7_BrOYLdxoDKzm_c_lRM6QkaInKT_1Go")'
              };
    return (
        <div style={sectionStyle}>
                <Navbar/>


                <div>
                        <div className="uk-child-width-expand@s uk-text-center">
                                <h1 classNameName="uk-heading-medium">
                                    <div classNameName="uk-card uk-card-default uk-card-body" style={{color:'white'}}>Cliente

                        </div>
                                </h1>
            
                                    </div>



                        <div className="uk-child-width-expand@s uk-text-center" >
        <form
        onSubmit={onSubmit}
        >
                                
                                
{/*////////////////////////////// segundo input input /////////////////////////////////////////*/}
                                                        <div className="uk-margin">
                                            <div className="uk-inline">  
                                                <span className="uk-form-icon" uk-icon="icon: user" ></span>
                                                        <input className="uk-input"    
                                                        type="text" 
                                                        name="nombre" 
                                                        onChange={handleChange}
                                                        required
                                                        placeholder="nombre"      
                                                        value = {cliente["nombre"] ? cliente["nombre"]:""}
                                                        />

                                    </div>
                                            </div>
                                      

                                             {/*////////////////////////////// segundo input input /////////////////////////////////////////*/}
                                            <div className="uk-margin">
                                            <div className="uk-inline">  
                                                <span className="uk-form-icon" uk-icon="icon: date" ></span>
                                                        <input className="uk-input"    
                                                        type="Number" 
                                                        name="año_de_ingreso" 
                                                        onChange={handleChange}
                                                        required
                                                        placeholder="Año de Ingreso"      
                                                        value = {cliente["año_de_ingreso"] ? cliente["año_de_ingreso"]:""}
                                                        />

                                    </div>
                                            </div>


 




                                            <div className="uk-child-width-expand@s uk-text-center">
                                                <p>
    
                                                <button className="uk-button uk-button-primary uk-button-large">Guardar</button>
    
                                                </p>
                                        </div>

                                </form>
                        </div>

                                       
                                    
                </div>
 





            </div>
    )
    }
}
