import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './shop.css'; // Import your CSS file
import { useCartContext } from './Cart';

function Shop() {
  const navigate = useNavigate()

  useEffect(
    ()=>{

        if(localStorage.getItem("login")!=null){
    
        }
        else{
          navigate("/login")
        }
    }, [navigate]
)

  const [products, setProducts] = useState([]);

  const {state, dispatch} = useCartContext()
  console.log("STATE", state)
  function addToCart(product){
    dispatch({type: "addToCart", payload: product})
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className= "container">
     
     
      
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title}  className="image"/>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p> Rating: {product.rating.rate}</p>
            <button className= "addtocartbutton"  onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <Link to="/order">Proceed to Order</Link>
    </div>
  );
}

export default Shop;
