import React from "react";
import { Link } from "react-router-dom";


const TarjetaCliente = ({
  _id,
  nombre,
  año_de_ingreso,
  _pedido,
  isDemo = false,
}) => {
  return (
    <div className="uk-margin-small-bottom">
      <div className="uk-card uk-card-default">
        <div className="uk-card-body uk-padding-small">
          <h3 className="uk-card-title uk-text-center">
            <Link
              to={`/cliente/${_id}`}
              className="uk-button uk-button-text uk-text-lead">
              {nombre}
            </Link>
          </h3>
          <div>Nombre: {nombre}</div>
          <div>Año de Ingreso: {año_de_ingreso} </div>
          <div>Pedidos: {_pedido} </div>
          <div className="uk-text-center">
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarjetaCliente;