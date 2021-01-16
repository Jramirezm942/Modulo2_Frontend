import {_axios} from "./api"
export const todoscolaboradores = () => {
    return _axios.get('/admin/listacolaboradores')
}

export const todasmaquinas = () => {
    return _axios.get('/admin/listamaquinas')
}

export const todosclientes = () => {
    return _axios.get('/admin/listaclientes')
}

export const todospedidos = () => {
    return _axios.get('/admin/listapedidos')
}