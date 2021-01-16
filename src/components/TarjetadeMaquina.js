import React from "react";
import { Link } from "react-router-dom";


const TarjetadeMaquina = ({
  _id,
  modelo,
  capacidad,
  estado,
  _colaborador
}) => {
  return (
    <div className="uk-margin-small-bottom">
      <div className="uk-card uk-card-default">
        <div className="uk-card-body uk-padding-small">
          <h3 className="uk-card-title uk-text-center">
            <Link
              to={`/maquina/${_id}`}
              className="uk-button uk-button-text uk-text-lead">
              {modelo}
            </Link>
          </h3>
          <div>Modelo: {modelo}</div>
          <div>Capacidad {capacidad} por hora</div>
          <div>Estado: {estado} </div>
          <div>Colaborador: {_colaborador} </div>
          <p className="uk-text-break">{estado}</p>
          <div className="uk-text-center">
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarjetadeMaquina;