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
    case PokemonActions.SET_FAVORITE:
      const newPokemonsList = [...state.pokemons];
      const currentPokemonIndex = newPokemonsList.findIndex((pokemon) => {
        return pokemon.id === action.payload;
      });

      if (currentPokemonIndex < 0) {
        return state;
      }

      const currentPokemon = { ...newPokemonsList[currentPokemonIndex] };

      currentPokemon.isFavorite = !currentPokemon.isFavorite;
      newPokemonsList[currentPokemonIndex] = currentPokemon;

      return { ...state, pokemons: newPokemonsList };
    case PokemonActions.SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
