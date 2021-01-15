import React from "react";
import { Link } from "react-router-dom";


const TarjetaColaborador = ({
  _id,
  nombre,
  horario_entrada,
  horario_salida,
  estatus,
  _maquina,
  email,
  rol
}) => {
  return (
    <div className="uk-margin-small-bottom">
      <div className="uk-card uk-card-default" style={{opacity: '0.8'}}>
        <div className="uk-card-body uk-padding-small" >
          <h3 className="uk-card-title uk-text-center">
            <Link
              to={`/colaborador/${_id}`}
              className="uk-button uk-button-text uk-text-lead">
              {nombre}
            </Link>
          </h3>
          <div>Nombre: {nombre}</div>
          <div>Horario de Entrada: {horario_entrada} </div>
          <div>Horario de Salida: {horario_salida} </div>
          <div>Estatus: {estatus} </div>
          <div>Máquina: {_maquina?.modelo} </div>
          <div>Email: {email} </div>
          <div>Rol: {rol} </div>
          <div className="uk-text-center">
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarjetaColaborador;