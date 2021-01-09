import React from "react";
// import dayjs from "dayjs";
// import relativeTime from "dayjs/plugin/relativeTime";
import { Link } from "react-router-dom";
// import "dayjs/locale/es";
// dayjs.extend(relativeTime);

const TarjetadeMaquina = ({
  _id,
  modelo,
  capacidad,
  estado,
  _colaborador,
  colaboradorId,
  isDemo = false,
}) => {
  const isOwner = colaboradorId === _colaborador?._id;
  return (
    <div className="uk-margin-small-bottom">
      <div className="uk-card uk-card-default">
        {!isDemo ? (
          <div className="uk-card-header uk-padding-small">
            <div className="uk-grid-small uk-flex-middle" uk-grid="true">
              <div className="uk-width-auto">
                <img
                  className="uk-border-circle"
                  width="40"
                  height="40"
                  alt={_colaborador?.nombre}
                />
              </div>
              <div className="uk-width-expand">
                <h3 className="uk-card-title uk-margin-remove-bottom">
                  {_colaborador?.name}
                </h3>
                <p className="uk-text-meta uk-margin-remove-top">Colaborador</p>
              </div>
              {isOwner ? (
                <div>
                  <Link
                    to={`/maquina/${_id}`}
                    className="uk-button uk-button-text">
                    Editar
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
        <div className="uk-card-media-top">
        </div>
        <div className="uk-card-body uk-padding-small">
          <h3 className="uk-card-title uk-text-center">
            <Link
              to={`/maquina/${_id}`}
              className="uk-button uk-button-text uk-text-lead">
              {modelo}
            </Link>
          </h3>
          <div>Modelo: {modelo}</div>
          <div>Capacidad: {capacidad} por hora</div>
          {/* <div>Creada {dayjs(createdAt).locale("es").fromNow()}</div> */}
          <p className="uk-text-break">{estado}</p>
          <div className="uk-text-center">
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarjetadeMaquina;