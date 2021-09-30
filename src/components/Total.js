import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router";
import "./css/Total.css";

const Total = () => {
  const history = useHistory();
  const [{ basket, cart }] = useStateValue();

  const getBasketTotal = basket?.reduce(
    (amount, { price, quantity }) => amount + price * quantity,
    0
  );

  console.log(getBasketTotal);
  return (
    <div className="total">
      <h2>Total</h2>
      <h4>
        items:
        <span>{cart.length}</span>
      </h4>
      <h3>Subtotal</h3>
      <CurrencyFormat
        decimalScale={2}
        formattedValue={getBasketTotal}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
      <Link to="/checkout">
        <button className="button-check">Check out</button>
      </Link>
    </div>
  );
};

export default Total;
