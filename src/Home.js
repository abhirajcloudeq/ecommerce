import React from 'react';
import image1 from './images/image1.jpg';
import './Home.css'; // Import a CSS file for styling (create Home.css with your styles)
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  if(localStorage.getItem("login")!=null){

  }
  else{
    navigate("/login")
  }
  return (
    <div className="home-container">
  <div>

    
  </div>
      <h1 className="home-title">Welcome to Our Online Store</h1>
      <p className="home-description">Discover amazing products and great deals.</p>

      <div>
        <div className="details">
          <img src={image1} alt="" className="product-image" />
          <h2>Product Name</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
