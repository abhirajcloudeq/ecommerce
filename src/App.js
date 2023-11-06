import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './navbar';
import Shop from './Shop'; 
import Login from './login';
import MyCart from './MyCart';
import Orders from "./Orders"
function App() {

  return (
      <>
      <Nav />
      <Routes>
        {/* <Route path="/" exact element={<Home/>} /> */}
        <Route path="/" element={<Shop/>} />
        {/* <Route path="/categories" element={<Categories/>} /> */}
        <Route path="/mycart" element={<MyCart/>} />
        {/* <Route path="/contact" element={<Contact/>} /> */}
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/login" element={<Login/>} />
         
      </Routes>
      
      
      </>
  );
}

export default App;
