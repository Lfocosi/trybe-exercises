import React from 'react';
import Pokemons from './data';
import PokeInfo from './Pokeinfo';
import PokeImage from './PokeImage';

class Pokedex extends React.Component {
    render() {
        return Pokemons.map((pokemon) => (
            <div>
                <PokeInfo nome={pokemon.name} tipo={pokemon.type} />
                <PokeImage imagem={pokemon.image} />
            </div>
        ))
    }
}

export default Pokedex