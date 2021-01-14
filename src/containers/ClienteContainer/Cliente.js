import React, { Component } from 'react'
import {registrarCliente} from "../../services/clienteWs";
import {infoCliente} from "../../services/clienteWs";

export default class clienteRegist extends Component {
        state = {
                data:{}   
          } 
        componentWillMount(){
                const {history} = this.props
                    //utilizamos props de rutas match ya que mandaremos datos por medio del id
                    const {id} = this.props.match.params;
                    //si viene un id en los paramas realizamos un peticion al backend
                    if(id){
                    infoCliente(id).then(res =>{
                        const {result} = res.data
                        this.setState({data: result})
                    })
                }
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
                        registrarCliente(this.state.data).then((response)=>{
                              this.setState({data:{}})
                              console.log("felicidades",response)
                              this.props.history.push("/listaclientes")
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
                                    <div classNameName="uk-card uk-card-default uk-card-body">Registrar un nuevo Cliente

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
                                                        value = {data["nombre"] ? data["nombre"]:""}
                                                        />

                                    </div>
                                            </div>
                                      

                                             {/*////////////////////////////// segundo input input /////////////////////////////////////////*/}
                                            <div className="uk-margin">
                                            <div className="uk-inline">  
                                                <span className="uk-form-icon" uk-icon="icon: mail" ></span>
                                                        <input className="uk-input"    
                                                        type="Number" 
                                                        name="año_de_ingreso" 
                                                        onChange={handleChange}
                                                        required
                                                        placeholder="Año de Ingreso"      
                                                        value = {data["año_de_ingreso"] ? data["año_de_ingreso"]:""}
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
