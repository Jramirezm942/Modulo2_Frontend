import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(LocalizedFormat);


const TarjetaPedido = ({
  _id,
  cantidad,
  _cliente,
  _colaborador,
  colaboradorId,
  fecha_de_inicio,
  fecha_de_termino,
  estatus
}) => {
  return (
    <div className="uk-margin-small-bottom">
      <div className="uk-card uk-card-default">
        <div className="uk-card-body uk-padding-small">
          <h3 className="uk-card-title uk-text-center">
            <Link
              to={`/pedido/${_id}`}
              className="uk-button uk-button-text uk-text-lead">
              {_cliente}/{cantidad}/{_colaborador}
            </Link>
          </h3>
          <div>Cliente: {_cliente}</div>
          <div>Cantidad {cantidad} </div>
          <div>Colaborador: {_colaborador} </div>
          <div>Fecha de Inicio: {dayjs(fecha_de_inicio).format("YYYY-MM-DD")} </div>
          <div>Fecha de Termino: {dayjs(fecha_de_termino).format("YYYY-MM-DD")} </div>
          <div>Estatus: {estatus} </div>
          <div className="uk-text-center">
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarjetaPedido;