import React from 'react';
import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import './PokemonList.css';
import { Pokemon } from '../actions/types';

type Props = {
  pokemon: Pokemon;
};

const PokemonCard = ({ pokemon }: Props) => {
  return (
    <Card
      title={pokemon.name}
      cover={<img src={pokemon.image} alt={pokemon.name} />}
      extra={<StarOutlined />}>
      <Meta description={pokemon.abilities.join(',')} />
    </Card>
  );
};

export default PokemonCard;
