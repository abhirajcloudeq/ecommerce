import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import "./App.css"
import { CartProvider } from './Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
      <Router>

<App />
</Router>
  </CartProvider>


);
