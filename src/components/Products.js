/*tomamos los productos y se los asignamos a la tarjeta de los productos, usamos el un grid de matiial para ajustar
 el contenido de acuerdo al tamaño de pantalla*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Product from './CardProduct';
import {products} from '../ProductData'

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent:'center',
    flexGrow: 1,
    padding:theme.spacing(2),
  },
  
}));

export default function Products() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Grid container spacing={2}>
        {
            products.map(product =>(
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  {/* toma los articulos de acuerdo a su unico identificador, 
                  pasa la informacion a CardProduct
                   y los separa de acuerdo al tamaño de pantalla  */}
                     <Product key={product.id} product={product}/>
                </Grid>
            ))
        }
      </Grid>
    </div>
  );
}
