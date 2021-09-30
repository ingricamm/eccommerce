import React from 'react';
import { TYPES } from './actions/ShoppingCartAction';
import { useStateValue } from '../StateProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import './css/CheckoutPage.css';
import CurrencyFormat from 'react-currency-format';

/*import accounting from 'accounting'; formato de moneda ex: dolar, euro*/

export default function CheckoutCard({
  product: {
    id,
    name,
    productType,
    image,
    price,
    rating,
    description,
    quantity,
    unidades,
  },
}) {
  const [{ basket }, dispatch] = useStateValue();

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
    <>
      <div className='card'>
        <div className='check-card'>
          <img src={image} with='100px' />
          <div className='check-card-content'>
            <h1>{name}</h1>
            {/* {accounting.formatMoney(50)} ejemplo de como aplicar la moneda en dolar aca*/}
            <p> {productType}</p>
            {/* encabezado de la tarjeta */}
            <p paragraph>{description}</p>

            <div className='quantity'>
              <label> Cantidad</label>
              <br />
              <button>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  onClick={() => delFromCart(id)}
                />
              </button>
              <span> {quantity} </span>
              <button>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  onClick={() => addToBasket(id)}
                />
              </button>
              <p className='productTotal'>total ${price * quantity}</p>
              <br/>
      
              <button onClick={() => delFromCart(id, true)}>
                Eliminar item
                <i className='icon-trash-empty' fontSize='large' />
              </button>
            </div>
          </div>
          <div className='price'>
            <p>Precio</p>
            <h4>
              <CurrencyFormat
            decimalScale={2}
            formattedValue={price} 
            displayType={'text'}
            thousandSeperator={true}
            prefix={'$'}
            /> </h4>
          </div>
        </div>
        <div className='check-total'>
          <p>subtotal ( {quantity} productos )=</p>
          <h4>${price * quantity} </h4>
        </div>
      </div>
    </>
  );
}
