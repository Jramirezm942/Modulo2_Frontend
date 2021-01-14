import React, { Component } from "react";
import { TarjetaPlista } from "../../components";
import { todospedidos } from "../../services/admin";
import {infoPedido} from "../../services/pedidoWs";
import AppContext from "../../AppContext";


export default class ListaPedidosContainer extends Component {
    //Se inicialza context
    static contextType = AppContext;

   state = {
       listPed:[]
    }

componentWillMount(){
    //valida que exista un colaborador de lo contrario redirect al registro 
    //const {state} = this.context
    const {history} = this.props
    todospedidos()
        .then((res)=>{
         if(res.data.result.length>0){
          this.setState({listPed:res.data.result})
          console.log(this.state);
         }else{
            history.push("/pedido")
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
        infoPedido(id).then(res =>{
            const {result} = res.data
            this.setState({pedido: result})
        })
    }
}
render(){
    const {pedido, listPed} = this.state;
    console.log(listPed);
    return(
        <section className="uk-section">
            <div className="uk-container">
                <h3>Lista de Pedidos</h3>
                <div className="uk-grid uk-child-width-1-2">
                    <div>
                        {listPed.map((item,i)=>
                         <TarjetaPlista key={i}{...item} isDemo={true} />)}
                    </div>
                </div> 
            </div>
        </section>
    )
}
}
