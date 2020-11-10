import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
        const p = this.props
        return (
            <div className="pokedex">
                <Pokemon key={p.pokemons[p.numero].id} pokemon={p.pokemons[p.numero]} />)}
            </div>
        );
    }
}

export default Pokedex;