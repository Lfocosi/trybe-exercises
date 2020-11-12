import React from 'react';

class CarregarEstados extends React.Component {
  render() {
    const estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goías', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraíma', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']
    return (
      estados.map((estado) => (
        <option key={estado} value={estado}>{estado}</option>
      ))
    );
  }
}

export default CarregarEstados;