//card de productos en el inicio de la aplicacion
import React, { Fragment, useReducer } from 'react';
import './css/Producto.css';
import { useStateValue } from '../StateProvider';
import { TYPES } from './actions/ShoppingCartAction';
import '../fontello/css/fontello.css';
import { TypesProduct } from './actions/ProductoAction';
import CurrencyFormat from 'react-currency-format';


export default function Product({
  product: {id, name, price,rating,image,unidades,productType, description,quantity,subtotal}}) {
  
 const [state, dispatch] = useStateValue();

const { products, basket } = state

  const addToBasket = (id,item) => {
    dispatch({ type: TYPES.ADD_TO_BASKET,
      item:{id, name, price,rating,image,unidades,productType, description,quantity,subtotal},
      payload: id});
  };


 const setProduct = (id) => {
    dispatch({ type: TypesProduct.SET_PRODUCT,payload: id});
  };
  return (
    <Fragment>
      <div className='root'>
        <div className='cardHeader'>
          <button aria-label='add-to-car' onClick={() => addToBasket(id)}>
            <i className='icon-basket add-basket' />
          </button>
          <a href='/Descrip' onClick={setProduct}>
            <h1>{name}</h1>
          </a>
        </div>
        <h4>in stock</h4>
        <div className='cardMedia'>
          <img src={image} with='100px' height='150px' />
          {name}
         
        </div>
        <div className='cantidad'>
            <p>cantidad: </p>
           
             <input className='cantidad' type='Number'/>
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
        <div classname='CardContent'>
          <h4 className='action' variant='h5' color='textSecondary'>
        
            <CurrencyFormat
            decimalScale={2}
            value={price}
            displayType={'text'}
            thousandSeperator={true}
            prefix={'$'}
            /> 
            {/* {accounting.formatMoney(50)} ejemplo de como aplicar la moneda en dolar aca*/}
          </h4>

          <p variant='body2' color='textSecondary'>
            {productType}
          </p>
        </div>
        {/* encabezado de la tarjeta */}
        <div className='CardContent'>
          <p className='description'>{description}</p>
        </div>
        <div className='CardActions' disableSpacing>
          {/* puntuacion del producto: muestra cierto numero de estrellas dependiendo de la puntuacion que tenga el producto */}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>
      
      </div>
    </Fragment>
  );
}
