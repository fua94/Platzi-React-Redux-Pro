export enum PokemonActions {
  SET_POKEMONS = 'SET_POKEMONS',
  SET_FAVORITE = 'SET_FAVORITE',
}

export enum UiActions {
  SET_LOADING = 'SET_LOADING',
}

export type Pokemon = {
  id: string;
  name: string;
  image: string;
  types: string[];
  isFavorite: boolean;
};
