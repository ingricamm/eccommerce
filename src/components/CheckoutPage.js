import React from "react";
import { Grid } from "@material-ui/core";
import { useStateValue } from '../StateProvider';
/*import products from '../ProductData' solucion temporal para ver datos que tengo*/
import CheckoutCard from "./CheckOutCard";
import Total from "./Total";



const CheckoutPage =()=>{
    const [{basket}, dispatch] = useStateValue();

    function FormRow(){
        return(
           <>
           {basket?.map((item)=>(
              <Grid item xs={12} sm={6} md={4} lg={3}>
                     <CheckoutCard key={item.id} product={item}/>
                </Grid> 
           ))}
           </> 
        ); 
    }

    return(
        <div className='total-card'>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h2 align ='center' gutterBottom variant='h4'>
                        Shopping Cart
                    </h2>
                </Grid>
               <Grid item xs={12} sm={8} md={9} container spacing={2}>
                   <FormRow/>
               </Grid>
               <Grid item xs={12} sm={4} md={3}>
                   <h3 align-item ='center' >
                   <Total/>
                    </h3>
               </Grid>
            </Grid>
         </div>
        
    );
}
export default CheckoutPage;