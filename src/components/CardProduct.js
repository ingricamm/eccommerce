//card de productos en el inicio de la aplicacion

import React,{Fragment, useState} from "react";
import './css/Producto.css';
import { useStateValue } from '../StateProvider';
import { TYPES} from './actions/ShoppingCartAction';
import "../fontello/css/fontello.css";
import Contador from "./Contador";





export default function Product({product:{id,name,productType,image,price,rating,description}}) {
  const [{basket}, dispatch] = useStateValue();
 
  const addToBasket= () =>{
    dispatch({
      type: TYPES.ADD_TO_BASKET,

      item:{
        id,
        name,
        productType,
        image,
        price,
        rating,
        description,
      }
  })
  }

  return (
    <Fragment>
     
      <div className='root' >
      
         <div className='cardHeader'>
              <button aria-label="add-to-car" onClick={addToBasket}>
              <i className ='icon-basket add-basket' />
            </button> 
             <a href='/Description'>
            <h1>{name}</h1>
             </a>
         </div>  
            <h4>in stock</h4>
        
        <div className='cardMedia'>
            <img src={image} with='100px'/>
            {name}
        </div>
        <div classname='CardContent'>
          <h4
              className='action'
              variant='h5'
              color='textSecondary'
            >
            {price} 

            {/* {accounting.formatMoney(50)} ejemplo de como aplicar la moneda en dolar aca*/}
            </h4>
            <p variant="body2" color="textSecondary" >
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
            .map((_, i)=>(
              <p>&#11088;</p>
            ))
            }
         
          </div>
        <Contador/>
          
      </div>
  
    </Fragment>
  );
}
     
