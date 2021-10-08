import React from "react";
/*import products from '../ProductData' solucion temporal para ver datos que tengo*/
import Total from "../Total";
import { useStateValue } from "../../StateProvider";
import { TYPES } from "../constants/cartConstants";
import "../css/CheckoutPage.css";
import "../css/Total.css";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import '../css/CheckoutPage.css';
import { currency } from '../reducers/CartReducer';

function BasketScreen(props,{
  product: {
    id,
    name,
    productType,
    image,
    price,
    rating,
    description,
    // quantity,
    unidades,
  }}) {
  const basket = useSelector((state) => state.basket);

  const { basketItems } = basket;
  const productId = props.match.params.id;
  const quantity = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const [dispatch] = useStateValue();

const addToBasket = (id, item) => {
    dispatch({
      type: TYPES.ADD_TO_BASKET,
      item: {
        id,
        name,
        price,
        rating,
        image,
        unidades,
        productType,
        description,
        quantity,
      },
      payload: id,
    });
  };


  const delFromCart = (id, all = false) => {
    //console.log(id, all);
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_BASKET, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_BASKET, payload: id });
    }
  };
  return (
    <div className=".paper">
      <div className="cart-list">
        <ul className="cart-list-container">
          <li>
            <h3>Shopping Cart</h3>
            <div>Price</div>
          </li>
          {basketItems.length === 0 ? (
            <div>Cart is empty</div>
          ) : (
            basketItems.map((item) => (
              <li>
                <div className='card'>
                <div className='check-card'>
                <img src={item.image} with='100px' />
                <div className='check-card-content'>
                    <h1>{item.name}</h1>
                    {/* {accounting.formatMoney(50)} ejemplo de como aplicar la moneda en dolar aca*/}
                    <p> {item.productType}</p>
                    {/* encabezado de la tarjeta */}
                    <p paragraph>{item.description}</p>

                    <div className='quantity'>
                    <label> Cantidad</label>
                    <br />
                    <button>
                        <FontAwesomeIcon
                        icon={faChevronLeft}
                        onClick={() => delFromCart(item.id)}
                        />
                    </button>
                    <span> {quantity} </span>
                    <button>
                        <FontAwesomeIcon
                        icon={faChevronRight}
                        onClick={() => addToBasket(item.id)}
                        />
                    </button>
                    <br/>
            
                    <button onClick={() => delFromCart(item.id, true)}>
                        Eliminar item
                        <i className='icon-trash-empty' fontSize='large' />
                    </button>
                    </div>
                </div>
                <div className='price'>
                    <p>Precio</p>
                    <b>
                    <p className='productTotal'> {currency(item.price)}</p>
                    </b>
                </div>
                </div>
                <div className='check-total'>
                <p>subtotal ( {quantity} productos )=</p>
                <b><p>${currency(item.price* quantity)} </p></b>
                </div>
            </div>
        </li>
            ))
          )}
        </ul> 
      <Total/> 
      </div>
 
    </div>
  );
}
export default BasketScreen;
