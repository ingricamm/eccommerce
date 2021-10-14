import Axios from "axios";
import Cookie from "js-cookie";
import { TYPES} from "../constants/cartConstants";

const addToCart = (productId, qty) => async (dispatch, getState) => {
  try {
    const { data } = await Axios.get("/api/products/" + productId);
    dispatch({
      type: TYPES.ADD_ITEM_TO_CART, payload: {
        product: data.id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty
      }
    });
    const { cart: { cartItems } } = getState();
    
     Cookie.set('cartItems', JSON.stringify(cartItems));

  } catch (error) {

  }
}
const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: TYPES.REMOVE_ITEM_FROM_CART, payload: productId });

  const { cart: { cartItems } } = getState();
  Cookie.set('cartItems', JSON.stringify(cartItems));
}
const saveShipping = (data) => (dispatch) => {
  dispatch({ type: TYPES.CART_SAVE_SHIPPING, payload: data });
}
const savePayment = (data) => (dispatch) => {
  dispatch({ type: TYPES.CART_SAVE_PAYMENT, payload: data });
}
export { addToCart, removeFromCart, saveShipping, savePayment }