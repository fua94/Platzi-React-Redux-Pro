import { Reducer } from 'redux';
import { Pokemon, PokemonActions } from '../actions/types';
import { PokemonsActionsType } from '../actions';

export type PokemonState = {
  pokemons: Pokemon[]
}

const initialState: PokemonState = {
  pokemons: [],
};

export const pokemonsReducer: Reducer<PokemonState, PokemonsActionsType> = (state = initialState, action) => {
  switch (action.type) {
    case PokemonActions.SET_POKEMONS:
      return { ...state, pokemons: action.payload };
  default:
      return state;
  }
};
