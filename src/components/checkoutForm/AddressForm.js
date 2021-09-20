import { Grid } from '@material-ui/core';
import * as React from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import { Link } from 'react-router-dom';
import  AddressInput  from './AddressInput';
import { TYPES } from './../actions/ShoppingCartAction';
import {useStateValue} from '../../StateProvider'

const AddressForm=({nextStep}) => {
  const methods =useForm(); 
  const [{shippingData}, dispatch] = useStateValue();


  return (
   
   
   <>
    <div>
      <h6 className='title'>Shopping Address</h6>
    </div>
    <FormProvider {...methods}>
      {/*El onsubmit Toma los datos que hemos recolecctado con los input */}
       <form onSubmit={methods.handleSubmit(data=>{
          dispatch({
            /*los datos tomados con el onsubmit los pasa al shipping data */
            type:TYPES.SET_SHIPPING_DATA,
            shippingData:data,
          });
          /*Para hacer el cambio de pestaña llamamos el boton next que se encuentra en check out
          dicho boton es pasado como props para poder ser usado */
            nextStep();
       })}>
          <Grid container spacing={2}>
            <AddressInput required name='firstName' label ='Frist Name'/>
            <AddressInput required name='lastName' label ='Last Name'/>
            <AddressInput required name='address' label ='Address'/>
            <AddressInput required name='email' label ='Email'/>
            <AddressInput required name='postcode' label ='Post Code'/>
            <AddressInput required name='city' label ='city'/>
          </Grid>
          <div className='stylebutton'>
            <Link to ='/checkout-page'>
              <button className='Prev' >Back to check out page</button>
           </Link>
          <button className='Next' type='submit'>Next</button>
          </div>
          
        </form>
    </FormProvider>
   
   </>
  );
}
export default AddressForm