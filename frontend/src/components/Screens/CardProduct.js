//card de productos en el inicio de la aplicacion
import React, { Fragment, useState } from "react";
//import "../css/Producto.css";
import { TYPES } from "../constants/cartConstants";
import "../../fontello/css/fontello.css";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";
import data from "../../ProductData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct, saveProductReview } from '../actions/productActions';
import { PRODUCT_REVIEW_SAVE_RESET } from '../constants/productConstants';

export default function Product({
  product: {
    id,
    name,
    price,
    rating,
    image,
    unidades,
    productType,
    description,
    quantity,
    subtotal,
  },
}) {
  
  const [{ basket }, { products }] = useState("");
  const dispatch = useDispatch();

  const addToBasket = (id, item) => {
    dispatch({
      type: TYPES.ADD_TO_BASKET,
      item: {
        id,
        name,
        price,
        rating,
        image,
        unidades,
        productType,
        description,
        quantity,
        subtotal,
      },
      payload: id,
    });
  };

  return (
    <Fragment>
      <div className="card-product">
        <div className="cardHeader">
          <button aria-label="add-to-car" onClick={() => addToBasket(id)}>
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="button-cart"
              style={{ color: "white" }}
            />
          </button>
          <Link to={"/product/" + id}>{name}</Link>
        </div>
        <p>in stock</p>
        <div className='card-media'>
          <Link to={"/product/" + id}>
              <img
                className="product-image"
                src={image}
                alt="product"
                with="200px"
                height="150px"
              />
          </Link>
        </div>
        {name}
        <div className="cantidad">
          <p>cantidad: </p>
          <input  type="Number" />
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
              value={price}
              displayType={"text"}
              thousandSeperator={true}
              prefix={"$"}
            />
            {/* {accounting.formatMoney(50)} ejemplo de como aplicar la moneda en dolar aca*/}
          </h4>

          <p variant="body2" color="textSecondary">
            {productType}
          </p>
        </div>
        {/* encabezado de la tarjeta */}

          <p className="description">{description}</p>

        <div className="CardActions" disableSpacing>
          {/* puntuacion del producto: muestra cierto numero de estrellas dependiendo de la puntuacion que tenga el producto */}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>
      </div>
    </Fragment>
  );
}
