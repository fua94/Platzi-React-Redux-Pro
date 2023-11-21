import { fromJS } from 'immutable';
import { UiActions } from '../actions/types';
import { Reducer } from 'redux';
import { UiActionsType } from '../actions';

export type UiState = {
  loading: boolean;
};

const initialState = fromJS<UiState>({
  loading: false,
});

export type UiStateImmutable = typeof initialState;

export const uiReducer: Reducer<UiStateImmutable, UiActionsType> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case UiActions.SET_LOADING:
      return state.setIn(['loading'], action.payload);
    default:
      return state;
  }
};
