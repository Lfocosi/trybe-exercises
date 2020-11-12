import React from 'react';

class DescriçãoDoCargo extends React.Component {
  render() {
    const { value, atualizar } = this.props;
    return (
      <div>
        <label htmlFor="dc">Descrição do cargo: </label>
        <textarea id="dc" name="DescriçãoDoCargo" maxLength="500" value={value} onChange={atualizar}/>
      </div>
    );
  }
}

export default DescriçãoDoCargo;