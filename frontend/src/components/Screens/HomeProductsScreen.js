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
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const category = props.match.params.id ? props.match.params.id : "";
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());

    return () => {
      //
    };
  }, []);

  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };

  return (
    <>
      {category && <h2>{category}</h2>}
      <div classname="navbar-filter">
        <ul className="filter">
          <li>
            Sort By{" "}
            <select name="sortOrder" onChange={sortHandler}>
              <option value="">Newest</option>
              <option value="lowest">Lowest</option>
              <option value="highest">Highest</option>
            </select>
          </li>
        </ul>
      </div>
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
                    <Link to={"/product/" + product._id}>{product.name}</Link>
                    <button aria-label="add-to-car">
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        className="button-cart"
                      />
                    </button>
                  </div>
                  <div className="card-media">
                    <Link to={"/product/" + product._id}>
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
                  <div>
                    Qty:{" "}
                    <select
                      value={qty}
                      onChange={(e) => {
                        setQty(e.target.value);
                      }}
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div classname="CardContent">
                    <CurrencyFormat
                      decimalScale={2}
                      value={product.price}
                      displayType={"text"}
                      thousandSeperator={true}
                      prefix={"$"}
                    />
                    
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
