import React, { useEffect } from 'react';
import { Col, Spin } from 'antd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg';

import { Pokemon } from './reducers/types';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { PokemonState, fetchPokemonsWithDetails } from './slices/dataSlice';
import './App.css';
import { RootState } from './redux/Provider';

function App() {
  const pokemons = useSelector<RootState, Pokemon[]>(
    (state) => state.data.pokemons,
    shallowEqual,
  );
  const loading = useSelector<RootState, boolean>((state) => state.ui.loading);
  const dispatch: ThunkDispatch<PokemonState, unknown, AnyAction> =
    useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
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
