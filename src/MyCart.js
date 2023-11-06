import React, { useState , useEffect} from 'react';
import { useCartContext } from './Cart';
import { useNavigate } from 'react-router-dom';
import './MyCart.css';

function MyCart() {
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
  
  const [selectedItems, setSelectedItems] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);

  const {state, dispatch} = useCartContext()
const cart = state.cart
  console.log("STATE", state)
  function addToOrder(items){
    dispatch({type: "addToOrders", payload: items})
  }

  const handleSelectItem = (itemId) => {
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [itemId]: !prevSelectedItems[itemId],
    }));
  };

  const handlePlaceOrder = () => {
    const itemsToOrder = cart.filter((item) => selectedItems[item.id]);

    addToOrder(itemsToOrder);

    setOrderPlaced(true);
  };

  return (
    
        <div className="mycart-container">
          <h2 className="cart-header">My Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul className="cart-list">
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <input
                    type="checkbox"
                    checked={selectedItems[item.id] || false}
                    onChange={() => handleSelectItem(item.id)}
                  />
                  {item.title} - ${item.price} (Quantity: {item.quantity})
                </li>
              ))}
            </ul>
          )}
          {!orderPlaced && (
            <button onClick={handlePlaceOrder} className="order-button">
              Place Order
            </button>
          )}
          {orderPlaced && <p>Order placed successfully!</p>}
        </div>
      );
          }
export default MyCart;
