import React, { useEffect } from 'react';
import { Col, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { getPokemon } from './api';
import { setPokemonsWithDetails, setLoading } from './actions';
import logo from './statics/logo.svg';
import './App.css';
import { PokemonState } from './reducers/pokemons';
import { Pokemon } from './actions/types';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

function App() {
  const pokemons = useSelector<PokemonState, Pokemon[]>(
    (state) => state.pokemons,
  );
  const loading = useSelector<PokemonState, boolean>((state) => state.loading);
  const dispatch: ThunkDispatch<PokemonState, unknown, AnyAction> =
    useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));

      const pokemonsRes = await getPokemon();

      if (pokemonsRes) {
        dispatch(setPokemonsWithDetails(pokemonsRes));
        dispatch(setLoading(false));
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
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
