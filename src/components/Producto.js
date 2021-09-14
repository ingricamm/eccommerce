import React,{Fragment, useState} from "react";
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import "../fontello/css/fontello.css";


export default function Producto({product:{id,name,productType,image,price,rating,description}}) {
  const [{basket}, dispatch] = useStateValue();


  const addToBasket= () =>{
    dispatch({
      type: actionTypes.ADD_TO_BASKET,

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
      <div className='root'>
         <div className='cardHeader'>
              <button aria-label="add-to-car" onClick={addToBasket}>
              <i className ='icon-basket add-basket' />
            </button>
            <h1>{name}</h1>
             
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
              <p paragraph>{description}</p>
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
      </div>
    </Fragment>
  );
}
     
