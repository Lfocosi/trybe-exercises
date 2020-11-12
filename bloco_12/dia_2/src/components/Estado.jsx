import React from 'react';
import CarregarEstados from './CarregarEstados.jsx'

class Estado extends React.Component {
  render() {
    const { value, atualizar } = this.props;
    return (
      <div>
        <label htmlFor="es">Estado: </label>
        <select id="es" name="Estado" value={value} onChange={atualizar} >
          <CarregarEstados />
        </select>
      </div>
    );
  }
}

export default Estado;