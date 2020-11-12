import React from 'react';

class Tipo extends React.Component {
  render() {
    const { atualizar } = this.props;
    return (
      <div onChange={atualizar}>
        <label htmlFor="ca">Casa</label>
        <input type="radio" id="ca" name="Tipo" value="Casa" />
        <br/>
        <label htmlFor="ap">Apartamento</label>
        <input type="radio" id="ap" name="Tipo" value="Apartamento" />
      </div>
    );
  }
}

export default Tipo;