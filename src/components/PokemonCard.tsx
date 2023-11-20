import React from 'react';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import './PokemonList.css';
import { Pokemon } from '../actions/types';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../actions';
import StarButton from './StarButton';

type Props = {
  pokemon: Pokemon;
};

const PokemonCard = ({ pokemon }: Props) => {
  const dispatch = useDispatch();

  const handleOnFavorite = () => {
    dispatch(setFavorite(pokemon.id));
  };

  return (
    <Card
      title={pokemon.name}
      cover={<img src={pokemon.image} alt={pokemon.name} />}
      extra={
        <StarButton
          isFavorite={pokemon.isFavorite}
          onClick={handleOnFavorite}
        />
      }>
      <Meta description={pokemon.types.join(',')} />
    </Card>
  );
};

export default PokemonCard;
