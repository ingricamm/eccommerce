import React from "react";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router";
import "./css/Total.css";
import {currency} from './reducers/CartReducer'

const Total = () => {
  const history = useHistory();
  const [{ basket, cart }] = useStateValue();
  
  const getBasketTotal = basket?.reduce(
    (amount, { price, quantity }) => amount + price * quantity,
    0
  );

  console.log(getBasketTotal);
  return (
    <div className="total-card">
      <h2>Total</h2>
      <div className='total-items'>
          <h4>
            items:
          </h4>
          <p>{cart.length}</p>
      
      <div>
        <h3>Subtotal</h3>
       <b> {currency(getBasketTotal)}</b>
        <CurrencyFormat
            decimalScale={2}
            Value={getBasketTotal}
            displayType={'text'}
            thousandSeperator={true}
            prefix={'$'}
            renderText={
              value => 
              <div>{value}</div>}
        />
        
      </div>
      <Link to="/checkout">
        <button className="button-check">Check out</button>
      </Link>
      </div>
    </div>
  );
};

export default Total;
