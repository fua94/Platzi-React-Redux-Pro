import { Reducer } from 'redux';
import { Pokemon, PokemonActions } from '../actions/types';
import { PokemonsActionsType } from '../actions';
import { fromJS, List } from 'immutable';

export type PokemonState = {
  pokemons: Pokemon[];
};

export type PokemonStateImmutable = typeof initialState;

const initialState = fromJS<PokemonState>({
  pokemons: [],
});

export const pokemonsReducer: Reducer<
  PokemonStateImmutable,
  PokemonsActionsType
> = (state = initialState, action) => {
  switch (action.type) {
    case PokemonActions.SET_POKEMONS:
      return state.setIn(['pokemons'], fromJS(action.payload));
    case PokemonActions.SET_FAVORITE:
      const pokemons = List.of(state.get('pokemons'));

      const currentPokemonIndex = pokemons.findIndex((pokemon: any) => {
        return pokemon.get('id') === action.payload;
      });

      if (currentPokemonIndex < 0) {
        return state;
      }

      const isFavorite = state.getIn([
        'pokemons',
        currentPokemonIndex,
        'favorite',
      ]);

      return state.setIn(
        ['pokemons', currentPokemonIndex, 'favorite'],
        !isFavorite,
      );
    default:
      return state;
  }
};
