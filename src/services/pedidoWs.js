import {_axios} from "./api";


export const pedidosporColaborador = (id) => {
  return _axios.get(`/pedido?_colaborador=${id}`);
};

export const pedidosporCliente = (id)=> {
    return _axios.get(`/pedido?_cliente=${id}`);
};


export const infoPedido = (id) => {
  return _axios.get(`/pedido/${id}`);
};


export const ingresarPedido = (params) => {
  return _axios.post(`/pedido`, params.pedido);
};


export const actualizarPedido = (params) => {
  return _axios.patch(`/pedido/${params.id}`, params.pedido);
};

