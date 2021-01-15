import React from 'react';

import { InputField } from "../../components";



const Form = ({ handleSubmit, handleChange, maquina,listCol}) => {


    return (

      <div>

        <form className="uk-width-1-1" onSubmit={handleSubmit}>

          <InputField

            name='modelo'

            value={maquina.modelo}

            placeholder='Modelo'

            handleChange={handleChange}

          />

          <InputField

            name='capacidad'

            value={maquina.capacidad}

            placeholder='Capacidad por Hora'

            handleChange={handleChange}

          />
        <div className="uk-margin">
         <label className="uk-form-label uk-text-capitalize" style={{color:'white'}}>
           Estado</label>
           <div className="uk-form-controls">
            <select name='estado'value={maquina['estado'] ? maquina['estado']:'Activa'} onChange={handleChange} className="uk-select"> 
                <option value="Activa">Activa</option>
                <option value="No disponible">No disponible</option>
                <option value="Apagada">Apagada</option>
            </select>
            </div>
            </div>
            <div className="uk-margin">
            <label className="uk-form-label uk-text-capitalize" style={{color:'white'}}>
             Colaborador</label>
            <select name='_colaborador'value={maquina['_colaborador'] ? maquina['_colaborador']:''} onChange={handleChange} className="uk-select">
                <option value={0}>Selecciona al Colaborador</option>
                {listCol.map((item,i)=> <option value={item._id} key={item._id}>{item.nombre}</option>)}
            </select>
          </div>
         
        <button type="submit" className="uk-button uk-button-primary">
            Guardar
          </button>
        </form>
      </div>
    );
  };
  export default Form;

