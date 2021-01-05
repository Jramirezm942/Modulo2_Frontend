import {_axios} from "./api";

export const colaborador = (data)=>{
    return _axios.post("/colaborador",data)

}

