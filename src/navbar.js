import React from 'react';
import { Link } from 'react-router-dom';
import image1 from './images/image1.jpg';



function Nav() {


  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <img src={image1} alt="shopping" />
        </div>
        <div className="search">
          <input type="text" placeholder="Search products..." />
          <button type="submit" onClick={Filter}>Search</button>
        </div>
        <nav >
          <ul>

            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mycart">My Cart</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            <li>

              <Link to="/login">Login</Link>


            </li>
          </ul>
        </nav>
       
      </div>
    </header>
  );
}

export default Nav;
