import React, { useEffect } from 'react';
import { Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { getPokemon, getPokemonDetails } from './api';
import { setPokemons } from './actions';
import logo from './statics/logo.svg';
import './App.css';
import { PokemonState } from './reducers/pokemons';
import { Pokemon } from './actions/types';

function App() {
  const pokemons = useSelector<PokemonState, Pokemon[]>(
    (state) => state.pokemons,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();

      if (pokemonsRes) {
        const pokemonsDetailed = await Promise.all(
          pokemonsRes.map((pokemon) => getPokemonDetails(pokemon)),
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
      }
    };

    fetchPokemons();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
