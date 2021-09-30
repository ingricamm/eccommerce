//card de productos en el inicio de la aplicacion
import React, { Fragment } from 'react';
import '../css/Producto.css';
import { useStateValue } from '../../StateProvider';
import { TYPES } from './../actions/ShoppingCartAction';
import '../../fontello/css/fontello.css';

export default function CardAdd({
  product: { id, name, productType, image, price, rating, description,unidades },
}) {
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
      dispatch({
        type: TYPES.ADD_TO_BASKET,

        item: {
          id,
          name,
          productType,
          image,
          price,
          rating,
          description,
        }
      });
    };
  

  return (
    <Fragment>
      <div className='root'>
        <div className='card'>
          <h1>nombre</h1>
          <h4 className='action' variant='h5' color='textSecondary'>
           ${price}.000
              {/* {accounting.formatMoney(50)} ejemplo de como aplicar la moneda en dolar aca*/}
          </h4>
        </div>
        <h4>in stock</h4>

        <div className='card'>
          <div className='card cantidad'>
            <p>cantidad: </p>
            <input
              type='number'
              min='1'
              max={10}
              key='cantidad'
              list='cantidad'
              name='cantidad'
              placeholder='1'
            />
            
            {/* <datalist id='cantidad'>
                <option value='1' selected='true'/>
                <option value='2' />
                <option value='3' />
                <option value='4' />
                <option value='5' />
                <option value='6' />
                <option value='7' />
                <option value='8' />
                <option value='9' />
                <option value='10' />
            </datalist> */}
          </div>
         <button aria-label='add-to-car' onClick={addToBasket} >
            Añadir al carrito<i className='icon-basket add-basket' />
          </button>
        </div>
        <div classname='Card Content'>
          <p variant='body2' color='textSecondary'>
            tenis
          </p>
        </div>
        {/* encabezado de la tarjeta */}
       
      </div>
    </Fragment>
  );
}
