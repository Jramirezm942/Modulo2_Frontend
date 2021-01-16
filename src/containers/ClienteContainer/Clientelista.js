import React, { Component } from "react";
import { TarjetaCliente } from "../../components";
import { todosclientes } from "../../services/admin";
import {infoCliente} from "../../services/clienteWs";
import AppContext from "../../AppContext";
import { Navbar } from "../../components";


export default class ListaClientesContainer extends Component {
    //Se inicialza context
    static contextType = AppContext;

   state = {
       listCli:[]
    }

componentWillMount(){
    //valida que exista un colaborador de lo contrario redirect al registro 
    //const {state} = this.context
    const {history} = this.props
    todosclientes()
        .then((res)=>{
         if(res.data.result.length>0){
          this.setState({listCli:res.data.result})
          console.log(this.state);
         }else{
            history.push("/cliente")
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
        infoCliente(id).then(res =>{
            const {result} = res.data
            this.setState({cliente: result})
        })
    }
}
render(){
    const {cliente, listCli} = this.state;
    let sectionStyle = {
        width: "100%",
        backgroundImage: 'url("https://i.picsum.photos/id/192/2352/2352.jpg?hmac=jN5UExysObV7_BrOYLdxoDKzm_c_lRM6QkaInKT_1Go")'
      };
    return(
        <div style={sectionStyle}>
        <Navbar/>
        <section className="uk-section">
            <div className="uk-container" style={{marginRight:"-25%" }}>
                <h2 style={{color:'white'}}>Lista de Clientes</h2>
                <div className="uk-grid uk-child-width-1-2">
                    <div>
                    {listCli.map((item,i)=>
                         <TarjetaCliente key={i}{...item} isDemo={true} />)}
                    </div>
                </div> 
            </div>
        </section>
        </div>
    )
}
}