import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import CartProvider from './provider/cart.provider';
import CollectionProvider from './contexts/collection/collection.context';

import './index.css';
import App from './App';

ReactDOM.render(
  <CartProvider>
    <CollectionProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </CollectionProvider>
  </CartProvider>,
  document.getElementById('root')
);
