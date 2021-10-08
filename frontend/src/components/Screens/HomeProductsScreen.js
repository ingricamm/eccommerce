/*tomamos los productos y se los asignamos a la tarjeta de los productos, usamos el un grid de matiial para ajustar
 el contenido de acuerdo al tamaño de pantalla*/
import React,{  useEffect,useState } from 'react'; 
import { listProducts } from '../actions/productActions';
import { makeStyles } from '@material-ui/core/styles';
import Product from './CardProduct';
import { useSelector } from 'react-redux';
import axios from 'axios';
import products from '../../ProductData';
import '../css/Producto.css'

export default function Products(props) {
  // const [searchKeyword, setSearchKeyword,
  // sortOrder, setSortOrder, dispatch] = useState('');
  // const category = props.match.params.id ? props.match.params.id : '';
  // const productList = useSelector((state) => state.productList);

 
 

  return (
    <>
      <div className='container' >
       <ul className='grid-responsive'>
         {
            products.map((product) =>(
                <li >
                  {/* toma los articulos de acuerdo a su unico identificador, 
                  pasa la informacion a CardProduct
                   y los separa de acuerdo al tamaño de pantalla  */}
                     <Product key={product.id} product={product}/>
                </li>
            ))
        }
      </ul>
    </div>
    </>
  );
}

//  <div className={classes.root} >
//       <Grid container spacing={2}>
//         {
//             products.map(product =>(
//                 <Grid item xs={6} sm={4} md={3} lg={2}>
//                   {/* toma los articulos de acuerdo a su unico identificador, 
//                   pasa la informacion a CardProduct
//                    y los separa de acuerdo al tamaño de pantalla  */}
//                      <Product key={product.id} product={product}/>
//                 </Grid>
//             ))
//         }
//       </Grid>
//     </div>