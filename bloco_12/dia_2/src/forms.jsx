import React from 'react';
import Nome from './components/Nome.jsx';
import Email from './components/Email.jsx';
import CPF from './components/CPF.jsx';
import Endereço from './components/Endereço.jsx';
import Cidade from './components/Cidade.jsx';
import Estado from './components/Estado.jsx';
import Tipo from './components/Tipo.jsx';
import ResumoDoCurrículo from './components/ResumoDoCurrículo.jsx';
import Cargo from './components/Cargo.jsx';
import DescriçãoDoCargo from './components/DescriçãoDoCargo.jsx';

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Nome: "",
      Email: "",
      CPF: "",
      Endereço: "",
      Cidade: "",
      Estado: "",
      Tipo: "",
      ResumoDoCurrículo: "",
      Cargo: "",
      DescriçãoDoCargo: ""
    }
    this.atualizar = this.atualizar.bind(this);
  }

  atualizar(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <fieldset>
          <Nome value={this.state.Nome} atualizar={this.atualizar}/>
          <Email value={this.state.Email} atualizar={this.atualizar}/>
          <CPF value={this.state.CPF} atualizar={this.atualizar}/>
          <Endereço value={this.state.Endereço} atualizar={this.atualizar}/>
          <Cidade value={this.state.Cidade} atualizar={this.atualizar}/>
          <Estado value={this.state.Estado} atualizar={this.atualizar}/>
          <Tipo atualizar={this.atualizar}/>
        </fieldset>
        <fieldset>
          <ResumoDoCurrículo value={this.state.ResumoDoCurrículo} atualizar={this.atualizar}/>
          <Cargo value={this.state.Cargo} atualizar={this.atualizar}/>
          <DescriçãoDoCargo value={this.state.DescriçãoDoCargo} atualizar={this.atualizar}/>
        </fieldset>
      </form>
    );
  }
}

export default Forms;
