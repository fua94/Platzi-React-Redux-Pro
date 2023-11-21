import React from 'react';
import PokemonCard from './PokemonCard';
import { Pokemon } from '../actions/types';

type Props = {
  pokemons: Pokemon[];
};

const PokemonList: React.FunctionComponent<Props> = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => {
        return <PokemonCard pokemon={pokemon} key={pokemon.name} />;
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill({ name: '' }),
};

export default PokemonList;
