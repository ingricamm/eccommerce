import React from 'react';
/*import products from '../ProductData' solucion temporal para ver datos que tengo*/
import CheckoutCard from './CheckOutCard';
import Total from './Total';
import { products } from '../ProductData';
import { useStateValue } from '../StateProvider';
import { TYPES } from './actions/ShoppingCartAction';
import './css/CheckoutPage.css';

const CheckoutPage =()=>{
    const [{basket}, dispatch] = useStateValue();
     const delFromCart = (id, all = false) => {
    //console.log(id, all);
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_BASKET, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_BASKET,payload: id});
    }
  };
    return(
        <div className='.paper'>
                    <h2 align ='center' gutterBottom variant='h4'>
                        Shopping Cart
                    </h2>
                    <div className='check-container'>
                            <article className='box'>
                                {basket?.map((item)=>(
                                    <div className='item'>
                                    <CheckoutCard key={item.id} product={item} data={products} delFromCart={delFromCart} />
                                    </div>  
                                ))}
                            </article>
                            <div className='card-total'>
                                <Total/>
                            </div>
                        {/* <button onClick={clearCart}>Limpiar Carrito</button> */}
                    </div>
                   
        
         </div>
        
    );
}
export default CheckoutPage;