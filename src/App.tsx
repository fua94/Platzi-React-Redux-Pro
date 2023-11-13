import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Col } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { getPokemon } from './api';
import { setPokemons as setPokemonsActions } from './actions';
import logo from './statics/logo.svg';
import './App.css';
import { PokemonState } from './reducers/pokemons';
import { Dispatch } from 'redux';
import { Pokemon } from './actions/types';

function App({ pokemons, setPokemons }: any) {
  console.log("🚀 ~ file: App.js ~ line 12 ~ App ~ pokemons", pokemons)
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes);
    };

    fetchPokemons();
  // eslint-disable-next-line
  }, []);

  return (
    <div className='App'>
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

const mapStateToProps = (state: PokemonState) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setPokemons: (value: Pokemon[]) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
