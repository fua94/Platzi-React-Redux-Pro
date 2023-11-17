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

type SetFavoriteAction = {
  type: typeof PokemonActions.SET_FAVORITE;
  payload: string;
};

export type PokemonsActionsType =
  | SetPokemonsAction
  | SetLoadingAction
  | SetFavoriteAction;

export const setPokemons = (payload: Pokemon[]): SetPokemonsAction => ({
  type: PokemonActions.SET_POKEMONS,
  payload,
});

export const setLoading = (payload: boolean): SetLoadingAction => ({
  type: PokemonActions.SET_LOADING,
  payload,
});

export const setFavorite = (payload: string): SetFavoriteAction => ({
  type: PokemonActions.SET_FAVORITE,
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
            id: String(pd.id),
            name: pd.name,
            image: pd.sprites.front_default,
            types: pd.types.map((a) => a.type.name),
            isFavorite: false,
          };
        }
        return {
          id: '',
          name: '',
          image: '',
          types: [],
          isFavorite: false,
        };
      });

      dispatch(setPokemons(formatedPokemons));
    }
  };
