import React, { Component } from 'react'
import { todasmaquinas } from '../../services/admin';
import {registro, infoColaborador} from "../../services/colabingWs";
import AppContext from '../../AppContext';
 


export default class colabRegistro extends Component {
static contextType = AppContext;
    state = {
         colaborador: {},
         listMaq:[]

  }   
  componentWillMount(){
        const {history} = this.props
        todasmaquinas()
            .then((res)=>{
             if(res.data.result.length>0){
              this.setState({listMaq:res.data.result})
              console.log(this.state);
             }else{
                history.push("/maquina")
                return false
             }
            })
            .catch((error)=>{
                console.log("error",error)
            })
            //utilizamos props de rutas match ya que mandaremos datos por medio del id
            const {id} = this.props.match.params;
            //si viene un id en los paramas realizamos un peticion al backend
            if(id){
            infoColaborador(id).then(res =>{
                const {result} = res.data
                this.setState({colaborador: result})
            })
        }
    }
              handleChange = (event)=>{
                let {colaborador} = this.state;
                colaborador = {...colaborador, [event.target.name]:event.target.value};
                this.setState({colaborador})
              }
              //esta funcion envia los datos a la base de datos
              onSubmit = (event) => {
                event.preventDefault()
                console.log("voy  enviar datos")
                registro(this.state.colaborador).then((response)=>{
                      this.setState({colaborador:{}})
                      console.log("felicidades",response)
                      //localStorage.setItem( "Login",JSON.stringify(response.data.colaborador ) )
                      //this.context.setUser(response.data.colaborador)
                      this.props.history.push("/listacolaboradores")



                }).catch((error)=>{
                        console.log("hay un error",error.response)
                })
              }
    
    
    render() {
         // aqui podemos declarar const var & let 
         console.log("la data",this.state.colaborador);
         const {handleChange, onSubmit} = this;
         const {colaborador, listMaq} = this.state;
        return (
            <div>
   
                <div>
                        <div className="uk-child-width-expand@s uk-text-center">
                                <h1 className="uk-heading-medium">
                                    <div className="uk-card uk-card-default uk-card-body">COLABORADOR

                        </div>
                                </h1>
            
                                    </div>



                        <div className="uk-child-width-expand@s uk-text-center" >
                           <form
                             onSubmit={onSubmit}
                               >
                                
                                
{/*////////////////////////////// primer input /////////////////////////////////////////*/}
                                            <div className="uk-margin">
                                                <div className="uk-inline">  
                                                         <span className="uk-form-icon" uk-icon="icon: user" ></span>
                                                        <input className="uk-input"    
                                                        type="text" 
                                                        name="nombre" 
                                                        onChange={handleChange}
                                                        required      
                                                        value = {colaborador["nombre"] ? colaborador["nombre"]:""}
                                                        placeholder='Ingresa tu nombre completo'
                                                        />

                                                 </div>
                                            </div>
{/*////////////////////////////// segundo input /////////////////////////////////////////*/}
                                    <div className="uk-margin">
                                            <div className="uk-inline">  
                                                <span className="uk-form-icon" uk-icon="icon: mail"></span>
                                                        <input className="uk-input" 
                                                        type="email" 
                                                        name="email" 
                                                        onChange={handleChange}
                                                        required 
                                                        value = {colaborador["email"] ? colaborador["email"]:""}
                                                        placeholder='Ingresa tu email'
                                                        />

                                    </div>
                                            </div>
{/*////////////////////////////// tercer input /////////////////////////////////////////*/}

                                            <div className="uk-margin">
                                            <div className="uk-inline">  
                                                <span className="uk-form-icon" uk-icon="icon: mail" ></span>
                                                        <input className="uk-input"    
                                                        type="email" 
                                                        name="email_confirm" 
                                                        onChange={handleChange}
                                                        required       
                                                        value = {colaborador["email_confirm"] ? colaborador["email_confirm"]:""}
                                                        placeholder='Confirma email'
                                                        />

                                    </div>
                                            </div>


 {/*////////////////////////////// cuarto input /////////////////////////////////////////*/}
 
                                    <div className="uk-margin">
                                            <div className="uk-inline">
                                                    <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                                                        <input 
                                                        className="uk-input" 
                                                        type="password"  
                                                        required
                                                        name="password"
                                                        onChange={handleChange}
                                                        value = {colaborador["password"] ? colaborador["password"]:""}
                                                        placeholder='Ingresa un password'
                                                        />

                                    </div>
                                            </div>

 {/*////////////////////////////// quinto  input /////////////////////////////////////////*/}
 
                                            <div className="uk-margin">
                                            <div className="uk-inline">
                                                    <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                                                        <input 
                                                        className="uk-input" 
                                                        type="password" 
                                                        required
                                                        name="confirmapassword"
                                                        onChange={handleChange}
                                                        value = {colaborador["confirmapassword"] ? colaborador["confirmapassword"]:""}
                                                        placeholder='Confirma el password'
                                                        />


                                    </div>
                                            </div>  
    
 {/*////////////////////////////// sexto  input /////////////////////////////////////////*/}
                                <div className="uk-margin">
                                            <div className="uk-inline">
                                                    <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: clock"></span>
                                                        <input 
                                                        className="uk-input" 
                                                        type="text"
                                                        required
                                                        name="horario_entrada"
                                                        onChange={handleChange} 
                                                        value = {colaborador["horario_entrada"] ? colaborador["horario_entrada"]:"09:00"} 
                                                        placeholder = 'Horario de Entrada'                                        
                                                        />


                                    </div>
                                            </div>   
{/*////////////////////////////// septimo  input /////////////////////////////////////////*/}
                                         <div className="uk-margin">
                                            <div className="uk-inline">
                                                    <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: clock"></span>
                                                        <input 
                                                        className="uk-input" 
                                                        type="text" 
                                                        required
                                                        name="horario_salida"
                                                        onChange={handleChange}
                                                        value = {colaborador["horario_salida"] ? colaborador["horario_salida"]:"18:00"}
                                                        placeholder='Horario de Salida'
                                                        />

{/*////////////////////////////// octavo  input /////////////////////////////////////////*/}
                                    </div>
                                            </div>
                                            <div className="uk-margin">
                                            <div className="uk-inline">
                                                    <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: clock"></span>
                                                    <select name='_maquina'value={colaborador['_maquina']? colaborador['_maquina']:''} onChange={this.handleChange} className="uk-select">
                                                     <option value={0}>Selecciona la Maquina</option>
                                                     {listMaq.map((item,i)=> <option value={item._id} key={item._id}>{item.modelo}</option>)}
                                                      </select>

                                    </div>
                                            </div>                                           
{/*////////////////////////////// noveno  input /////////////////////////////////////////*/}
                                  <div className="uk-margin">
                                            <div className="uk-inline">
                                                    <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: question"></span>
                                                    <select name='estatus'value = {colaborador["estatus"] ? colaborador["estatus"]:"Activo"}  onChange={handleChange} required placeholder='Estatus' className="uk-select">
                                                      <option value="Activo">Activo</option>
                                                      <option value="Inactivo">Inactivo</option>
                                                    </select>
                                    </div>
                                            </div>
{/*////////////////////////////// ultimo/decimo  input /////////////////////////////////////////*/} 
                                    <div className="uk-margin">
                                            <div className="uk-inline">
                                                    <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon:  users"></span>
                                                    <select name='rol' value = {colaborador["rol"] ? colaborador["rol"]:"Estandar"}  onChange={handleChange} required placeholder='Rol' className="uk-select">
                                                      <option value="Estandar">Estandar</option>
                                                      <option value="Administrador">Administrador</option>
                                                      <option value="Supervisor">Supervisor</option>
                                                </select>
                                    </div>
                                            </div>
{/*////////////////////////////// boton /////////////////////////////////////////*/}

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
