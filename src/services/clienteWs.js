import {_axios} from "./api";

export const registrarCliente = (data)=>{
    return _axios.post("/cliente",data)

}

export const infoCliente = (id) => {

    return _axios.get(`/cliente/${id}`);
  
  };

  export const actualizarCliente = (params) => {

    return _axios.patch(`/cliente/${params.id}`, params.cliente);
  
  };