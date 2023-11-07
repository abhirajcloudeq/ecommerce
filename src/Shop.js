import React, { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import './shop.css'; // Import your CSS file
import { useCartContext } from './Cart';

function Shop() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("login") !== null) {
      // User is logged in
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const [products, setProducts] = useState([]);

  const { state, dispatch } = useCartContext();

  function addToCart(product) {
    dispatch({ type: "addToCart", payload: product });
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  function truncateDescription(description) {
    if (description.length <= 200) {
      return description;
    } else {
      return description.slice(0, 200) + '...';
    }
  }

  return (
    <div className="container">
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h2 style={{fontSize:"20px"}}>{product.title}</h2>
            <img src={product.image} alt={product.title} className="image" />
            <p>{truncateDescription(product.description)}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating.rate}</p>
            <button className="addtocartbutton" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Shop;
