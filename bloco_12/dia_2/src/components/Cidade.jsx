import React from 'react';

class Cidade extends React.Component {
  render() {
    const { value, atualizar } = this.props;
    return (
      <div>
        <label htmlFor="ci">Cidade: </label>
        <textarea id="ci" name="Cidade" maxLength="28" value={value} onChange={atualizar}/>
      </div>
    );
  }
}

export default Cidade;