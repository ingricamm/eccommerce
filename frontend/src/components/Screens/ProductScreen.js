import React, { useEffect, useState } from 'react';
import '../css/ProductScreen.css'
import Rating from '../Rating';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import  products  from '../../ProductData';
import { PRODUCT_REVIEW_SAVE_RESET } from '../constants/productConstants';
import { detailsProduct, saveProductReview } from '../actions/productActions';


function ProductScreen(props) {
  
   const product = products.find((item)=>item.id===props.match.params.id);
    const [qty, setQty]=useState(1);

  return (

      <div>
        <div className="back-to-result">
          <Link to="/">Back to result</Link>
        </div>
        {
        
          <>
            <div className="details">
              <div className="details-image">
                <img src={product.image} alt="product"></img>
              </div>
              <div className="details-info">
                <ul>
                  <li>
                    <h4>{product.name}</h4>
                  </li>
                  <li>
                    <a href="#reviews">
                      <Rating
                        value={product.rating}
                        text={product.numReviews + ' reviews'}
                      />
                    </a>
                  </li>
                  <li>
                    Price: <b>${product.price}</b>
                  </li>
                  <li>
                    Description:
                    <div>{product.description}</div>
                  </li>
                </ul>
              </div>
              <div className="details-action">
                <ul>
                  <li>Price:<b> ${product.price}</b></li>
                   <li>
                  Qty:{' '}
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
                </li> 
                <li>
                    {product.countInStock > 0 && (
                      <button
                       className="button primary"
                      >
                        Add to Cart
                      </button>
                    )}
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-margined">
              <h2>Reviews</h2>
              

            </div>
          </>
        
        }
    </div>
  );
}
export default ProductScreen;
