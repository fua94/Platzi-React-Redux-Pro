import { AnyAction } from 'redux';
import { PokemonSummary, getPokemonDetails } from '../api';
import { Pokemon, PokemonActions, UiActions } from './types';
import { ThunkAction } from 'redux-thunk';
import { PokemonStateImmutable } from '../reducers/pokemons';

type SetPokemonsAction = {
  type: typeof PokemonActions.SET_POKEMONS;
  payload: Pokemon[];
};

type SetFavoriteAction = {
  type: typeof PokemonActions.SET_FAVORITE;
  payload: string;
};

type SetLoadingAction = {
  type: typeof UiActions.SET_LOADING;
  payload: boolean;
};

export type PokemonsActionsType = SetPokemonsAction | SetFavoriteAction;

export type UiActionsType = SetLoadingAction;

export const setPokemons = (payload: Pokemon[]): SetPokemonsAction => ({
  type: PokemonActions.SET_POKEMONS,
  payload,
});

export const setFavorite = (payload: string): SetFavoriteAction => ({
  type: PokemonActions.SET_FAVORITE,
  payload,
});

export const setPokemonsWithDetails =
  (
    pokemons: PokemonSummary[] = [],
  ): ThunkAction<void, PokemonStateImmutable, unknown, AnyAction> =>
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

export const setLoading = (payload: boolean): SetLoadingAction => ({
  type: UiActions.SET_LOADING,
  payload,
});
