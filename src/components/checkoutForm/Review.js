import React from 'react';
import { useStateValue } from '../../StateProvider';
import Total from '../Total';

const Review = () => {
  const [{basket},dispatch]=useStateValue();

  return (
    <>
    <div>
      <h6>Order Summary</h6>
    </div>
    <ul>
      {
        basket?.map(product=>(
          <li key={product.name}>
            {product.name}
            <p>{product.price}</p>
          </li>
        )
          )
      }
    {Total}  
    </ul>
      
    </>
  )
}

export default Review

