import React, { Component } from "react";
import { InputField } from "../../components";
import {ingresarPedido,actualizarPedido,infoPedido} from "../../services/pedidoWs";
import { todoscolaboradores, todosclientes } from "../../services/admin";
import { buildNotification } from "../../utils/notification";
import AppContext from "../../AppContext";
import  {TarjetaPedido}  from "../../components";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(LocalizedFormat);

class PedidoForm extends Component {
  static contextType = AppContext;
  state = {
    pedido: {},
    listCli: [],
    listCol: [],
    clientevalue: 0,
    colvalue: 0
  };

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
        infoPedido(id).then(res =>{
            const {result} = res.data
            this.setState({pedido: result})
        })
    }
}

  handleChange = (e) => {
    let { pedido } = this.state;
    pedido = { ...pedido, [e.target.name]: e.target.value };
    this.setState({ pedido });
  };

  handleSubmit = (e)=>{
    e.preventDefault();
    const {pedido} = this.state;
    console.log(pedido)
    //const {agregarpedido} = this.context;
    const {history} = this.props
    const {id} = this.props.match.params;

    //actiones como se reutiliza esta vista verificamos dependiendo de si existe un id
    //realizamos un update o creamos una propiedad

    const action = id ? actualizarPedido : ingresarPedido //<---- son ws(webservices) chequen si se importaron
    const params = id ? {pedido, id} : { pedido } // creamos los parametros depeiendo de la accion 

    action(params)
    .then((res)=>{
        const {result} = res.data
        history.push("/listapedidos")
    })
    .catch(error=>{ 
        //almacenamos los errores una variable y sacamos solo los mensajes!!
        const errors = Object.values(error.response.data.error)
        //recorremos el arreglo y constuimos la notificacion (importar buildNotification)
        //error = al mensaje, "danger" = al color de la notificacion, close = si tiene o no metodo para cerra
    
        errors.map((error) => buildNotification(error,"danger","close"))
    })
}

  render() {
    const { pedido,listCol, listCli } = this.state;
    return (
      <section className="uk-section">
        <div className="uk-container">
          <h2 className="">Pedido</h2>
          <div className="uk-grid uk-child-width-1-2">
          <form onSubmit={this.handleSubmit}>
            <InputField
              name="cantidad"
              type="number"
              min="1"
              value={pedido.cantidad}
              handleChange={this.handleChange}
              placeholder="Cantidad"
            />
            <div className="uk-margin">
              <div className="uk-form-controls">
             <select name='_cliente'value={pedido['_cliente']? pedido['_cliente']:''} onChange={this.handleChange} className="uk-select">
                <option value={0}>Selecciona al Cliente</option>
                {listCli.map((item,i)=> <option value={item._id} key={item._id}>{item.nombre}</option>)}
            </select> 
            </div>
            </div>
            <div className="uk-margin">
            <div className="uk-form-controls">
            <select name='_colaborador'value={pedido['_colaborador'] ? pedido['_colaborador']:''} onChange={this.handleChange} className="uk-select">
              <option value={0}>Selecciona al Colaborador</option>
              {listCol.map((item,i)=> <option value={item._id} key={item._id}>{item.nombre}</option>)}
            </select>
            </div>
            </div>
            <InputField
              name="fecha_de_inicio"
              type="date"
              value={dayjs(pedido.fecha_de_inicio).format("YYYY-MM-DD")}
              handleChange={this.handleChange}
              placeholder="Fecha de Inicio"
            />
             <InputField
              name="fecha_de_termino"
              type="date"
              value={dayjs(pedido.fecha_de_termino).format("YYYY-MM-DD")}
              handleChange={this.handleChange}ç
              placeholder="Fecha de Termino"
              />
            <div className="uk-margin">
            <div className="uk-form-controls">
              <select name="estatus" value={pedido['estatus']? pedido['estatus']:'En espera'} onChange={this.handleChange} className="uk-select">
                <option value='En espera'>En espera</option>
                <option value='En proceso'>En proceso</option>
                <option value='Cancelada'>Cancelada</option>
                <option value='Terminada'>Terminada</option>
              </select>
              </div>
              </div>
            <button type="submit" className="uk-button uk-button-primary">
              Guardar
            </button>
          </form>
          <div>
          <TarjetaPedido {...pedido} isDemo={true} />
        </div>
      </div>
      </div>
  </section>
    );
  }
}

export default PedidoForm;