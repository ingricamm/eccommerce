import React, { useEffect, useState } from "react";
import "../css/ProductScreen.css";
import Rating from "../Rating";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TYPES from "../constants/productConstants";
import { detailsProduct, saveProductReview } from "../actions/productActions";

function ProductScreen(props) {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const productReviewSave = useSelector((state) => state.productReviewSave);
  const { success: productSaveSuccess } = productReviewSave;
  const dispatch = useDispatch();

  //ESTA FUNCIÓN SIRVE PARA MOSTRATR EL ARTIVULO DEPENDIENDO DEL ID
  useEffect(() => {
    if (productSaveSuccess) {
      alert("Review submitted successfully.");
      setRating(0);
      setComment("");
      dispatch({ type: TYPES.PRODUCT_REVIEW_SAVE_RESET });
    }
    dispatch(detailsProduct(props.match.params.id));

    return () => {
      //
    };
  }, [dispatch, productSaveSuccess, props.match.params.id]);
  //AÑADIR AL CARRITO DE COMPRAS

  const handleAddToCart = () => {
    props.history.push("/cart/" + props.match.params.id + "?QTY=" + qty);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch actions
    dispatch(
      saveProductReview(props.match.params.id, {
        name: userInfo.name,
        rating: rating,
        comment: comment,
      })
    );
  };

  return (
    <div>
      <div className="back-to-result">
        <Link to="/">Back to result</Link>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error} </div>
      ) : (
        <>
          <div className="details">
            <div className="card-details">
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
                        text={product.numReviews + " reviews"}
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
            </div>
            <div className="details-action">
              <ul>
                <li>
                  Price:<b> ${product.price}</b>
                </li>
                <li>
                  Status:{" "}
                  {product.countInStock > 0 ? "in Stock" : "unavailable"}
                </li>
                <li>
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
                </li>
                <li>
                  {product.countInStock > 0 && (
                    <button
                      className="button primary"
                      onClick={handleAddToCart}
                    >
                      Add to Cart
                    </button>
                  )}
                </li>
              </ul>
            </div>{" "}
          </div>
          <div className="details-content-margined">
            <ul className="review" id="reviews">
              <h2>Reviews</h2>
              {!product.reviews?.length && <div>There is no review</div>}
              {product.reviews?.map((review) => (
                <li key={review._id}>
                  <div>{review.name}</div>
                  <div>
                    <Rating value={review.rating}></Rating>
                  </div>
                  <div>{review.createdAt.substring(0, 10)}</div>
                  <div>{review.comment}</div>
                </li>
              ))}
              <li>
                {userInfo ? (
                  <form onSubmit={submitHandler}>
                    <ul className="form-container">
                      <h3>Write a customer review</h3>
                      <li>
                        <label htmlFor="rating">Rating</label>
                        <select
                          name="rating"
                          id="rating"
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value="1">1- Poor</option>
                          <option value="2">2- Fair</option>
                          <option value="3">3- Good</option>
                          <option value="4">4- Very Good</option>
                          <option value="5">5- Excelent</option>
                        </select>
                      </li>
                      <li>
                        <label htmlFor="comment">Comment</label>
                        <textarea
                          name="comment"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                      </li>
                      <li>
                        <button type="submit" className="button primary">
                          Submit
                        </button>
                      </li>
                    </ul>
                  </form>
                ) : (
                  <div>
                    Please <Link to="/signin">Sign-in</Link> to write a review.
                  </div>
                )}
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
export default ProductScreen;
