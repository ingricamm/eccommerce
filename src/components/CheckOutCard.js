import React from 'react';
import './css/Producto.css'
import { useStateValue } from '../StateProvider';
import { TYPES} from './actions/ShoppingCartAction';

/*import accounting from 'accounting'; formato de moneda ex: dolar, euro*/


export default function CheckoutCard({product:{id,name,productType,image,price,rating,description}}) {
const [{basket}, dispatch] = useStateValue();

   const removeItem =()=> dispatch({
    type: TYPES.REMOVE_ITEM,
    id:id,
   })

  return (

    <>
      <div className='root'>
         <div className='cardHeader'>
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
          <div className='remove'>
            <button className='delete'>
              Eliminar
              < i className ='icon-trash-empty'fontSize='large' onClick={removeItem}/>
            </button>
          </div>
      </div>
    </>
  );
                
}
