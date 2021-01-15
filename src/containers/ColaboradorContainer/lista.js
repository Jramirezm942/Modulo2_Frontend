import React, { Component } from "react";
import { TarjetaColaborador } from "../../components";
import { todoscolaboradores } from "../../services/admin";
import {infoColaborador} from "../../services/colabingWs";
import AppContext from "../../AppContext";
import { Navbar } from "../../components";


export default class ListaColaboradorsContainer extends Component {
    //Se inicialza context
    static contextType = AppContext;

   state = {
       listCol:[]
    }

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
        infoColaborador(id).then(res =>{
            const {result} = res.data
            this.setState({colaborador: result})
        })
    }
}
render(){
    const {colaborador, listCol} = this.state;
    let sectionStyle = {
        width: "100%",
        backgroundImage: 'url("https://i.picsum.photos/id/1078/3000/2000.jpg?hmac=kI-4ittyvRAG5-z9urHPPBQ4kDNJ4ItiEw6-NagOy10")'
      };

    return(
        <div style={sectionStyle}>
        <Navbar/>
        <section className="uk-section" >
            <div className="uk-container" style={{marginRight:"-25%" }} >
                <h2 style={{color:'white'}}>Lista de Colaboradores</h2>
                <div className="uk-grid uk-child-width-1-2">
                    <div >
                    {listCol.map((item,i)=>
                         <TarjetaColaborador key={i}{...item} isDemo={true} />)}
                    </div>
                </div> 
            </div>
        </section>
        </div>
    )
}
}