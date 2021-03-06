import React, { Component } from 'react'
import { todasmaquinas } from '../../services/admin';
import {registro, infoColaborador, actualizarColaborador} from "../../services/colabingWs";
import AppContext from '../../AppContext';
import { Navbar } from "../../components";



export default class colabRegistro extends Component {
static contextType = AppContext;
    state = {
         colaborador: {},
         listMaq:[],
         isEditable:false
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
            this.setState({isEditable:true})
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
                const {colaborador} = this.state
                const {id} = this.props.match.params;
                const action = id ? actualizarColaborador : registro //<---- son ws(webservices) chequen si se importaron
                const params = id ? {colaborador, id} : { colaborador } // creamos los parametros depeiendo de la accion 
                action(params).then((response)=>{
                      this.setState({colaborador:{}})
                      console.log("felicidades",response)
                      this.props.history.push("/listacolaboradores")



                }).catch((error)=>{
                        console.log("hay un error",error.response)
                })
              }
    
    
    render() {
        let sectionStyle = {
                width: "100%",
                backgroundImage: 'url("https://i.picsum.photos/id/1078/3000/2000.jpg?hmac=kI-4ittyvRAG5-z9urHPPBQ4kDNJ4ItiEw6-NagOy10")'
              };
         // aqui podemos declarar const var & let 
         console.log("la data",this.state.colaborador);
         const {handleChange, onSubmit} = this;
         const {colaborador, listMaq, isEditable} = this.state;
         console.log(isEditable)
        return (
            <div style={sectionStyle}>
            <Navbar/>
                <div>
                        <div  className="uk-child-width-expand@s uk-text-center">
                                <h1 className="uk-heading-medium">
                                    <div className="uk-card uk-card-default uk-card-body" style={{backgroundColor:'transparent', color:'white'}}>COLABORADOR

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
{!isEditable &&
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

    }
 {/*////////////////////////////// cuarto input /////////////////////////////////////////*/}
 {!isEditable &&
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
  }
 {/*////////////////////////////// quinto  input /////////////////////////////////////////*/}
 {!isEditable &&
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
    } 
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
    
                                                <button className="uk-button uk-button-primary uk-button-large" style={{marginBottom:'2%'}}>Guardar</button>
    
                                                </p>
                                        </div>

                                </form>
                        </div>

                                       
                                    
                </div>
 





            </div>
        )
    }
}
