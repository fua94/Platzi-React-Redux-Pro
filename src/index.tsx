import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { pokemonsReducer } from './reducers/pokemons';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import './index.css';

const rootElement = document.getElementById('root');
const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

if(rootElement){
  const root = ReactDOM.createRoot(rootElement);
  
  const store = createStore(pokemonsReducer, devToolsExtension && devToolsExtension());
  
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}

