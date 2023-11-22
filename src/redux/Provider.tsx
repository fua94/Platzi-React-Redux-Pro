import React from 'react';
import { Provider } from 'react-redux';
import {
  StoreEnhancer,
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers: StoreEnhancer = composeAlt(applyMiddleware(thunk));
const store = createStore(rootReducer, composedEnhancers);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type Props = {
  children: React.ReactNode;
};
const ReduxProvider: React.FunctionComponent<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
