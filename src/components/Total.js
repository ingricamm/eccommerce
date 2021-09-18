import React from 'react'
import {Link} from 'react-router-dom'
import {getBasketTotal} from '../reducer';
import { useStateValue } from '../StateProvider';



const Total = () =>{
    const [{basket}, dispatch] = useStateValue();

    const style = {
    with:'800px',
    margin: '0.5em',
    padding: '10px',
    borderRadius:'5px',
    backgroundColor:'white',
  };

    const Button = {
    margin: '1em',
    padding: '10px',
    backgroundColor:'#d1a4eccc',
    border:'none',
    borderRadius:'5px',
    
  }

    return(
        <div className='total' style={style}>
            <h3>Total</h3>
            {/* mostrar la cantidad e productos que tiene  en el carrito */}
            <h5>Total:{getBasketTotal(basket)}</h5>
           <h4>items:{ basket?.length}</h4>
             <Link to ='/checkout'>
            <button className='button' style={Button} color='secondary'>Check out</button>
            </Link>
        </div>
    )
}

export default Total