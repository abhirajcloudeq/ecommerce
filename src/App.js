import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './navbar';
import Shop from './Shop'; 
import Login from './login';
import MyCart from './MyCart';
import Orders from "./Orders";
import Signup from './Signup';
function App() {

  return (
      <>
      <Nav />
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/mycart" element={<MyCart/>} />
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />

         
      </Routes>
      
      
      </>
  );
}

export default App;
