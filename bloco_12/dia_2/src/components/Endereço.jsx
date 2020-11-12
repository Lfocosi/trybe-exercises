import React from 'react';

class Endereço extends React.Component {
  render() {
    const { value, atualizar } = this.props;
    return (
      <div>
        <label htmlFor="en">Endereço: </label>
        <textarea id="en" name="Endereço" maxLength="200" value={value} onChange={atualizar}/>
      </div>
    );
  }
}

export default Endereço;