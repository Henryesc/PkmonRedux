import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store';
import { BrowserRouter } from 'react-router-dom';
import { fetchCards } from './features/cardsSlice';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

store.dispatch(fetchCards())

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
