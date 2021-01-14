import React, {Component} from "react";
import AppContext from '../../AppContext';
import  {TarjetadeMaquina}  from "../../components";
import { todoscolaboradores } from "../../services/admin";
//ws
import { registrarMaquina, infoMaquina, actualizarMaquina } from "../../services/maquinaWs";
import { buildNotification } from "../../utils/notification";
import Form from './Form'

//esta visa nos servira para crear y para ver detalle de las propiedads

export default class MaquinariaContainer extends Component {
    //Se inicialza context
    static contextType = AppContext;

   state = {
       maquina:{},
       listCol:[]
    }

    //utilizamos el ciclo de vida para cargar los datos de la maquina
    componentWillMount(){
        //valida que exista un colaborador de lo contrario redirect al registro 
        //const {state} = this.context
        const {history} = this.props
        todoscolaboradores()
            .then((res)=>{
             if(res.data.result.length>0){
              this.setState({listCol:res.data.result})
              console.log(this.state);
             }else{
                history.push("/colaborador/registro")
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
            infoMaquina(id).then(res =>{
                const {result} = res.data
                this.setState({maquina: result})
            })
        }
    }


    //handle change para cachar los datos del textInput con una nueva propuesta de para guardar datos
    handleChange = (e) => {
         let {maquina} = this.state;
         //nueva propuesta para guardar datos
         maquina = {...maquina, [e.target.name]:e.target.value};
         this.setState({maquina})
    }


    handleSubmit = (e)=>{
        e.preventDefault();
        const {maquina} = this.state;
        //const {agregarMaquina} = this.context;
        const {history} = this.props
        const {id} = this.props.match.params;

        //actiones como se reutiliza esta vista verificamos dependiendo de si existe un id
        //realizamos un update o creamos una propiedad

        const action = id ? actualizarMaquina : registrarMaquina //<---- son ws(webservices) chequen si se importaron
        const params = id ? {maquina, id} : { maquina } // creamos los parametros depeiendo de la accion 

        action(params)
        .then((res)=>{
            const {result} = res.data
            //agregarMaquina(result);
            history.push("/listamaquinas")
        })
        .catch(error=>{ 
            //almacenamos los errores una variable y sacamos solo los mensajes!!
            const errors = Object.values(error.response.data.error)
            //recorremos el arreglo y constuimos la notificacion (importar buildNotification)
            //error = al mensaje, "danger" = al color de la notificacion, close = si tiene o no metodo para cerra
        
            errors.map((error) => buildNotification(error,"danger","close"))
        })
    }
    render(){
        const {maquina,listCol} = this.state
        return(
            <section className="uk-section">
                <div className="uk-container">
                    <h3>Máquina</h3>
                    <div className="uk-grid uk-child-width-1-2">
                        <Form 
                            maquina = {maquina}
                            listCol = {listCol}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                        />
                        <div>
                             <TarjetadeMaquina {...maquina} isDemo={true}/>
                        </div>
                    </div> 
                </div>
            </section>
        )
    }
}
