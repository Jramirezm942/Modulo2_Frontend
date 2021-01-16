import React, { Component } from "react";
import { TarjetaPlista } from "../../components";
import { todospedidos } from "../../services/admin";
import {infoPedido} from "../../services/pedidoWs";
import AppContext from "../../AppContext";
import { Navbar } from "../../components";

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
    let sectionStyle = {
        width: "100%",
        backgroundImage: 'url("https://i.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I")'
      };
    return(
        <div style={sectionStyle}>
        <Navbar/>
        <section className="uk-section">
            <div className="uk-container" style={{marginRight:"-25%" }}>
                <h2 style={{color:'black'}}>Lista de Pedidos</h2>
                <div className="uk-grid uk-child-width-1-2">
                    <div>
                        {listPed.map((item,i)=>
                         <TarjetaPlista key={i}{...item} isDemo={true} />)}
                    </div>
                </div> 
            </div>
        </section>
        </div>
    )
}
}
