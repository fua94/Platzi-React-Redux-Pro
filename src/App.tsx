import React, { useEffect } from 'react';
import { Col, Spin } from 'antd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { getPokemon } from './api';
import { setPokemonsWithDetails, setLoading } from './actions';
import logo from './statics/logo.svg';
import './App.css';
import { PokemonStateImmutable } from './reducers/pokemons';
import { Pokemon } from './actions/types';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { List } from 'immutable';
import { UiStateImmutable } from './reducers/ui';

function App() {
  const pokemons = useSelector<PokemonStateImmutable, List<Pokemon>>(
    (state: any) => state.getIn(['data', 'pokemons'], shallowEqual),
  ).toJS();

  const loading = useSelector<UiStateImmutable, boolean>((state: any) =>
    state.getIn(['ui', 'loading']),
  );
  const dispatchThunk: ThunkDispatch<
    PokemonStateImmutable,
    unknown,
    AnyAction
  > = useDispatch();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));

      const pokemonsRes = await getPokemon();

      if (pokemonsRes) {
        dispatchThunk(setPokemonsWithDetails(pokemonsRes));
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
        <PokemonList pokemons={pokemons as Pokemon[]} />
      )}
    </div>
  );
}

export default App;
