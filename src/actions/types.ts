export enum PokemonActions {
  SET_POKEMONS,
  SET_LOADING,
  SET_FAVORITE,
}

export type Pokemon = {
  id: string;
  name: string;
  image: string;
  types: string[];
  isFavorite: boolean;
};
