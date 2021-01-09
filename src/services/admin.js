import {_axios} from "./api"
export const todoscolaboradores = () => {
    return _axios.get('/listacolaboradores')
}

export const todasmaquinas = () => {
    return _axios.get('/listamaquinas')
}

export const todosclientes = () => {
    return _axios.get('/listaclientes')
}