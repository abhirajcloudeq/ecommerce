import React, { useEffect } from 'react';
import { useCartContext } from './Cart';
import { useNavigate } from 'react-router-dom';
import './Order.css';

function Orders() {
    const navigate = useNavigate()

    console.log("LOGIN", localStorage.getItem("login"))
    useEffect(
        ()=>{

            if(localStorage.getItem("login")!=null){
        
            }
            else{
              navigate("/login")
            }
        }, [navigate]
    )
    const {state} = useCartContext()
    console.log("STATE", state)
    const orders = state.orders
  return (
        <div className="orders-container">
          <h2 className="order-header">Orders</h2>
          {orders.length === 0 ? (
            <p>No orders yet.</p>
          ) : (
            <ul className="orders-list">
              {orders.map((order, index) => (
                <li key={index} className="order-item">
                  <h3>Order {index + 1}</h3>
                  <ul className="order-details">
                    {order.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                        <p>Price: ${item.price}</p>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
 
}

export default Orders;
