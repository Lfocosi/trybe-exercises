import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
  constructor() {
    super();
    this.clicou = this.clicou.bind(this);
    this.state = {
      pokemonA: 0
    }
  }
  clicou() {
    if (this.state.pokemonA === pokemons.length - 1) {
      this.setState({
        pokemonA: -1
      })
    }
    this.setState((estadoAnterior, _props) => ({
      pokemonA: estadoAnterior.pokemonA + 1
    }))
  }
  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={pokemons} numero={this.state.pokemonA} />
        <button type='button' onClick={this.clicou}>Next Pokemon</button>
      </div>
    );
  }
}

export default App;