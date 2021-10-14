/*tomamos los productos y se los asignamos a la tarjeta de los productos, usamos el un grid de matiial para ajustar
 el contenido de acuerdo al tamaño de pantalla*/
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import "../css/Producto.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CurrencyFormat from "react-currency-format";
import Rating from "../Rating";

export default function HomeProducts(props) {
  // const [searchKeyword, setSearchKeyword,
  // sortOrder, setSortOrder, dispatch] = useState('');
  // const category = props.match.params.id ? props.match.params.id : '';
 
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());

    return () => {
      //
    };
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error} </div>
      ) : (
        <div className="container">
          <ul className="grid-responsive">
            {products.map((product) => (
              <li key={product.id}>
                {/* toma los articulos de acuerdo a su unico identificador, 
                  pasa la informacion a CardProduct
                   y los separa de acuerdo al tamaño de pantalla  */}

                <div className="card-product">
                  <div className="cardHeader">
                    <button aria-label="add-to-car">
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        className="button-cart"
                        style={{ color: "white" }}
                      />
                    </button>
                    <Link to={"/product/" + product.id}>{product.name}</Link>
                  </div>
                  <p>in stock</p>
                  <div className="card-media">
                    <Link to={"/product/" + product.id}>
                      <img
                        className="product-image"
                        src={product.image}
                        alt="product"
                        with="200px"
                        height="150px"
                      />
                    </Link>
                  </div>
                  {product.name}
                  <div className="cantidad">
                    <p>cantidad: </p>
                    <input type="Number" />
                    {/* <datalist id='cantidad'>
                <option value='1' selected='true'/>
                <option value='2' />
                <option value='3' />
                <option value='4' />
                <option value='5' />
                <option value='6' />
                <option value='7' />
                <option value='8' />
                <option value='9' />
                <option value='10' />
            </datalist> */}
                  </div>
                  <div classname="CardContent">
                    <h4 className="action" variant="h5" color="textSecondary">
                      <CurrencyFormat
                        decimalScale={2}
                        value={product.price}
                        displayType={"text"}
                        thousandSeperator={true}
                        prefix={"$"}
                      />
                      {/* {accounting.formatMoney(50)} ejemplo de como aplicar la moneda en dolar aca*/}
                    </h4>

                    <p variant="body2" color="textSecondary">
                      {product.productType}
                    </p>
                  </div>
                  <p className="description">{product.description}</p>
                  <div className="product-rating">
                    <Rating
                      value={product.rating}
                      text={product.numReviews + " reviews"}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
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
