export enum PokemonActions {
  SET_POKEMONS,
  SET_LOADING,
}

export type Pokemon = {
  name: string;
  image: string;
  abilities: string[];
};
