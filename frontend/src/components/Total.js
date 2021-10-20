import React from "react";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import {currency} from './reducers/CartReducer'
import { useSelector } from "react-redux";

const Total = (props) => {
 
  const cart = useSelector((state) => state.cart);
  
  const { cartItems } = cart;
  
  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  }

  const getTotalItems = cartItems?.reduce(
    (amount, { qty }) => amount + qty,
    0
  );
  const getCartTotal = cartItems?.reduce(
    (amount, { price, qty }) => amount + price * qty,
    0
  );

  console.log(getCartTotal);
  return (
    <div className="total-card">
      <h2>Total</h2>
      <div className='total-items'>
          <h3> items: {getTotalItems} </h3>
         
      
      <div>
        <h3>Subtotal :</h3>
        {currency(getCartTotal)}
        
      </div>
      <Link to="/checkout">
        <button className="button-check" onClick={checkoutHandler} diseable ={cartItems===0}>Check out</button>
      </Link>
      </div>
    </div>
  );
};

export default Total;
