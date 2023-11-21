import { createSlice } from '@reduxjs/toolkit';
import { PokemonState } from '../reducers/pokemons';

const initialState: PokemonState = {
  pokemons: [],
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {
        return pokemon.id === action.payload.pokemonId;
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
