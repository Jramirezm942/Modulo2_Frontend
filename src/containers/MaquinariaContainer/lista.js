import React, { Component } from "react";
import { TarjetaMlista } from "../../components";
import { todasmaquinas } from "../../services/admin";
import {infoMaquina} from "../../services/maquinaWs";
import AppContext from "../../AppContext";


export default class ListaMaquinasContainer extends Component {
    //Se inicialza context
    static contextType = AppContext;

   state = {
       listMaq:[]
    }

componentWillMount(){
    //valida que exista un colaborador de lo contrario redirect al registro 
    //const {state} = this.context
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
        infoMaquina(id).then(res =>{
            const {result} = res.data
            this.setState({maquina: result})
        })
    }
}
render(){
    const {maquina, listMaq} = this.state
    return(
        <section className="uk-section">
            <div className="uk-container">
                <h3>Lista de Máquinas</h3>
                <div className="uk-grid uk-child-width-1-2">
                    <div>
                    {listMaq.map((item,i)=>
                         <TarjetaMlista key={i}{...item} isDemo={true} />)}
                    </div>
                </div> 
            </div>
        </section>
    )
}
}