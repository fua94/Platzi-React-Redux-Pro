import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemon, getPokemonDetails } from '../../api';
import { setLoading } from './ui';
import { Pokemon } from '../types';

export type PokemonState = {
  pokemons: Pokemon[];
};

const initialState: PokemonState = {
  pokemons: [],
};

export const fetchPokemonsWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithDetails',
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    const pokemons = await getPokemon();
    if (pokemons) {
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
    }
    dispatch(setLoading(false));
  },
);

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {
        return pokemon.id === action.payload;
      });

      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].isFavorite;

        state.pokemons[currentPokemonIndex].isFavorite = !isFavorite;
      }
    },
  },
});

export const { setFavorite, setPokemons } = dataSlice.actions;
export default dataSlice.reducer;
