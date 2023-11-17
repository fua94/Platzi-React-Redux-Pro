import { Reducer } from 'redux';
import { Pokemon, PokemonActions } from '../actions/types';
import { PokemonsActionsType } from '../actions';

export type PokemonState = {
  pokemons: Pokemon[];
  loading: boolean;
};

const initialState: PokemonState = {
  pokemons: [],
  loading: false,
};

export const pokemonsReducer: Reducer<PokemonState, PokemonsActionsType> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case PokemonActions.SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case PokemonActions.SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
