import { Pokemon, PokemonActions } from './types';

type SetPokemonsAction = {
  type: typeof PokemonActions.SET_POKEMONS
  payload: Pokemon[]
}

export type PokemonsActionsType = SetPokemonsAction

export const setPokemons = (payload: Pokemon[]): SetPokemonsAction => ({
  type: PokemonActions.SET_POKEMONS,
  payload,
});
