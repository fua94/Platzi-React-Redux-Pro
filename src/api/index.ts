import axios from 'axios';

type PokemonSummary = {
  url: string;
};

type Pokemon = {
  name: string;
  sprites: {
    front_default: string;
  };
  abilities: {
    ability: {
      name: string;
    };
  }[];
};

export const getPokemon = (): Promise<PokemonSummary[] | void> => {
  return axios
    .get<{ results: PokemonSummary[] }>(
      'https://pokeapi.co/api/v2/pokemon?limit=151',
    )
    .then((res) => res.data.results)
    .catch((err) => console.log(err));
};

export const getPokemonDetails = (
  pokemon: PokemonSummary,
): Promise<Pokemon | void> => {
  return axios
    .get(pokemon.url)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
