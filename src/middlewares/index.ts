import { Middleware } from 'redux';
import { orderByParam } from '../utils/strings';
import { Pokemon } from '../redux/types';

export const logger: Middleware = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

export const featuring: Middleware = (store) => (next) => (actionInfo) => {
  const featured = [{ name: 'eddie' }, ...actionInfo.action.payload];
  const updatedActionInfo = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: featured },
  };
  next(updatedActionInfo);
};

export const orderByNameDesc: Middleware = (store) => (next) => (action) => {
  const { action: oldAction } = action;
  const orderedPokemons = orderByParam<Pokemon>(
    oldAction.payload,
    'name',
    'DES',
  );
  const updatedActionInfo = {
    ...action,
    action: { ...oldAction, payload: orderedPokemons },
  };
  next(updatedActionInfo);
};
