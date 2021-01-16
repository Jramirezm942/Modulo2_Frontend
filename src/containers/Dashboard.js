import React, { Component } from 'react'
import { todoscolaboradores, todosclientes } from "../services/admin";
import { Navbar } from "../components";



export default class Dashboard extends Component {
    state = {
        data:{},
        listCli: [],
        listCol: []   
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
            console.log("error",error.response)
        })


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

    }


    render() {
      const result = this.state.listCol.length
      console.log("ese result",result)
      const resultado = this.state.listCli.length
      console.log("ese result",resultado)
        return (
            <div>
               
                <Navbar/>
            

              

                <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid="true">
            <div className="uk-card-media-left uk-cover-container">
                <img src="https://i.picsum.photos/id/1042/3456/5184.jpg?hmac=5xr8Veg2D_kEQQO6rvGj_Yk8s_N4iq3-eZ9_KclSXNQ" alt="" uk-cover="true"/>
                <canvas width="600" height="400"></canvas>
            </div>
            <div>
                <div class="uk-card-body">
                    <h3 class="uk-card-title">Lista de Colaboradores</h3>
                    <p>
                    {this.state.listCol.length}
                    </p>
                </div>
            </div>
        </div>
        




            <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid="true">
            <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
                <img src="https://i.picsum.photos/id/1042/3456/5184.jpg?hmac=5xr8Veg2D_kEQQO6rvGj_Yk8s_N4iq3-eZ9_KclSXNQ" alt="" uk-cover="true"/>
                <canvas width="600" height="400"></canvas>
            </div>
            <div>
                <div class="uk-card-body">
                    <h3 class="uk-card-title">Lista de Clientes</h3>
                    <p>
                    {this.state.listCli.length}
                    </p>
                </div>
            </div>
        </div>
        


        
        </div>
        
        






            
                );
            };
}
          