import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ReduxProvider from './redux/Provider';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <ReduxProvider>
        <App />
      </ReduxProvider>
    </React.StrictMode>,
  );
}
