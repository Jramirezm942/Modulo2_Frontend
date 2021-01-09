import React, { Component } from "react";
import { InputField } from "../../components";
import {
   ingresarPedido,
   actualizarPedido,
} from "../../services/pedidoWs";
import { buildNotification } from "../../utils/notification";
import AppContext from "../../AppContext";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(LocalizedFormat);

class PedidoForm extends Component {
  static contextType = AppContext;
  state = {
    pedido: {},
    listCli: [],
    listCol: [],
  };

  componentDidMount() {
    const { pedido_id, id } = this.props.match.params;
    todoscolaboradores()
    .then((res)=>{
     if(res.data.result.length){
         this.setState({listCol:res.data.result})
     }
    })
    .catch((error)=>{
        console.log("error",error)
    })
      this.setState({ });
  }

  handleChange = (e) => {
    let { pedido } = this.state;
    pedido = { ...pedido, [e.target.name]: e.target.value };
    this.setState({ pedido });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { history } = this.props;
    const isEditing = this.props.location.pathname.includes("edit");
    const {
      pedido,
      clienteInfo: {_id},
      colaborador: {_id},
    } = this.state;
    const action = isEditing ? actualizarPedido : ingresarPedido;
    action({ ...pedido, _cliente: _id, _colaborador:_id })
      .then(() => {
        buildNotification("Pedido ingresado exitosamente!", "éxito");
        history.push("/");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  render() {
    const { pedido, clienteInfo, colaboradorInfo } = this.state;
    return (
      <section className="uk-section">
        <div className="uk-container">
          <h2 className="">Ingresar Pedido {clienteInfo.nombre}</h2>
          <form onSubmit={this.handleSubmit}>
            <InputField
              name="cantidad"
              type="number"
              min="1"
              value={pedido.cantidad}
              handleChange={this.handleChange}
              placeholder="Cantidad"
            />
            <InputField
              name="cliente"
              type="text"
              value={pedido.cliente}
              handleChange={this.handleChange}
              placeholder='Cliente'
            />
            <InputField
                name='colaborador'
                type='text'
                value={pedido.colaborador}
                handleChange={this.handleChange}
                placeholder='Colaborador'
            />
            <button type="submit" className="uk-button uk-button-primary">
              Ingresar Pedido
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default PedidoForm;