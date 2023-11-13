import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { pokemonsReducer } from './reducers/pokemons';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import './index.css';

const rootElement = document.getElementById('root');

if(rootElement){
  const root = ReactDOM.createRoot(rootElement);
  
  const store = createStore(pokemonsReducer);
  
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}

