import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { pokemonsReducer } from './reducers/pokemons';
import { Provider } from 'react-redux';
import {
  StoreEnhancer,
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';
import './index.css';

const rootElement = document.getElementById('root');
const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers: StoreEnhancer = composeAlt(applyMiddleware(thunk));

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  const store = createStore(pokemonsReducer, composedEnhancers);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  );
}
