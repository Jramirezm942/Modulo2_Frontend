import {_axios} from "./api";


export const infoMaquina = (id) => {

  return _axios.get(`/maquina/${id}`);

};

export const registrarMaquina = (params) => {

  return _axios.post(`/maquina`, params.maquina);

};


export const actualizarMaquina = (params) => {

  return _axios.patch(`/maquina/${params.id}`, params.maquina);

};
