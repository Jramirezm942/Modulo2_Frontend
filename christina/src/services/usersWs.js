import {_axios} from "./api";

export const ingreso = (data)=>{
    return _axios.post("/colaborador/ingreso",data)
}
export const registro = (data)=>{
    return _axios.post("/colaborador/registro",data)
}
export const salir = () => {
    return _axios.post("/colaborador/salir")
}