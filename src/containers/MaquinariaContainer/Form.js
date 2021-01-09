import React from 'react';

import { InputField } from "../../components";



const Form = ({ handleSubmit, handleChange, maquina,listCol}) => {


    return (

      <div>

        <form className="uk-width-1-1" onSubmit={handleSubmit}>

          <InputField

            name='modelo'

            value={maquina.modelo}

            placeholder='modelo'

            handleChange={handleChange}

          />

          <InputField

            name='capacidad'

            value={maquina.capacidad}

            placeholder='capacidad por hora'

            handleChange={handleChange}

          />

          <InputField

            name='estado'

            value={maquina.estado}

            placeholder='estado de la máquina'

            handleChange={handleChange}

          />

         <select className="uk-select">
                <option>Selecciona al Colaborador</option>
                {listCol.map((item,i)=> <option key={item._id}>{item.nombre}</option>)}
            </select>

        <button type="submit" className="uk-button uk-button-primary">
            Ingresar Maquina
          </button>
        </form>
      </div>
    );
  };
  export default Form;

