import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Router } from 'react-router-dom';
// import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import "./App.css"
import Nav from './navbar';
import Home from './Home'; // Import your Home component
import Shop from './Shop'; // Import your Shop component
import Categories from './MyCart'; // Import your Categories component
import Deals from './Deals'; // Import your Deals component
import Contact from './Orders'; // Import your Contact component
import { CartProvider } from './Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <CartProvider>
      <Router>

<App />
</Router>
  </CartProvider>


);
