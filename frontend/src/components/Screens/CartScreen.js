import React, { useEffect } from "react";
/*import products from '../ProductData' solucion temporal para ver datos que tengo*/
import Total from "../Total";
import { TYPES } from "../constants/cartConstants";
import "../css/CartScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { currency } from "../reducers/CartReducer";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { Link } from "react-router-dom";

function CartScreen(props) {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addToCart(productId, qty));
  });

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };

   
  
  return (
    <div className="paper">
      <div className="cart-list">
        <ul className="cart-list-container">
          <li className="cart-header">
            <h2>Shopping Cart</h2>
            <h2>Price</h2>
          </li>
          {cartItems.length === 0 ? (
            <div>Cart is empty</div>
          ) : (
            cartItems.map((item) => (
              <li>
                <div className="cart-card">
                  <div className="check-card">
                    <img src={item.image} alt="product" with="100px" />
                    <div className="card-content">
                      <Link to={"/product/" + item.product}>{item.name}</Link>
                      <p> {item.productType}</p>
                      {/* encabezado de la tarjeta */}
                      <p paragraph>{item.description}</p>
                      <div className="quantity">
                        Qty:
                        <select
                          value={item.qty}
                          onChange={(e) =>
                            dispatch(addToCart(item.product, e.target.value))
                          }
                        >
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                        {/* <button type="button" className="button" onClick={() => removeFromCartHandler(item.product)} >
                      Delete
                    </button> */}
                      </div>
                      <button onClick={() => removeFromCartHandler(item.product)}>
                        Eliminar item
                        <i className="icon-trash-empty" fontSize="large" />
                      </button>
                    </div>
                  </div>
                  <div className="price">
                     <p className="productTotal"> {currency(item.price)}</p>
                  </div>
                </div>
                <div className="check-total">
                  <p>subtotal ( {qty} productos )=</p>
                  <b>
                    <p>${currency(item.price * qty)} </p>
                  </b>
                </div>
              </li>
            ))
          )}
        </ul>
        <Total />
      </div>
    </div>
  );
}
export default CartScreen;
