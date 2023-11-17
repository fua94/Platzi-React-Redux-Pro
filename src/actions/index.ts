import { AnyAction } from 'redux';
import { PokemonSummary, getPokemonDetails } from '../api';
import { Pokemon, PokemonActions } from './types';
import { ThunkAction } from 'redux-thunk';
import { PokemonState } from '../reducers/pokemons';

type SetPokemonsAction = {
  type: typeof PokemonActions.SET_POKEMONS;
  payload: Pokemon[];
};

type SetLoadingAction = {
  type: typeof PokemonActions.SET_LOADING;
  payload: boolean;
};

export type PokemonsActionsType = SetPokemonsAction | SetLoadingAction;

export const setPokemons = (payload: Pokemon[]): SetPokemonsAction => ({
  type: PokemonActions.SET_POKEMONS,
  payload,
});

export const setLoading = (payload: boolean): SetLoadingAction => ({
  type: PokemonActions.SET_LOADING,
  payload,
});

export const setPokemonsWithDetails =
  (
    pokemons: PokemonSummary[] = [],
  ): ThunkAction<void, PokemonState, unknown, AnyAction> =>
  async (dispatch) => {
    const pokemonsDetailed = await Promise.all(
      pokemons.map((pokemon) => getPokemonDetails(pokemon)),
    );

    if (pokemonsDetailed.length) {
      const formatedPokemons: Pokemon[] = pokemonsDetailed.map((pd) => {
        if (pd) {
          return {
            name: pd.name,
            image: pd.sprites.front_default,
            abilities: pd.abilities.map((a) => a.ability.name),
          };
        }
        return {
          name: '',
          image: '',
          abilities: [],
        };
      });

      dispatch(setPokemons(formatedPokemons));
    }
  };
