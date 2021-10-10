import { TYPES } from '../constants/cartConstants';


export const currency = function(number){
    return new Intl.NumberFormat('de-DE', {style: 'currency',currency: 'COP'}).format(number);
};

function cartReducer(state = { cartItems: [], shipping: {}, payment: {} }, action) {
 
  switch (action.type) {
    case TYPES.ADD_ITEM_TO_CART:
       const item = action.payload;
        const product = state.cartItems.find(x => x.product === item.product);
      if (product) {
        return {
          cartItems:
            state.cartItems.map(x => x.product === product.product ? item : x)
        };
      }

     return { cartItems: [...state.cartItems, item] };
    case TYPES.REMOVE_ITEM_FROM_CART:
      return { cartItems: state.cartItems.filter(x => x.product !== action.payload) };
    case TYPES.CART_SAVE_SHIPPING:
      return { ...state, shipping: action.payload };
    case TYPES.CART_SAVE_PAYMENT:
      return { ...state, payment: action.payload };
    default:
      return state
  }
}

export { cartReducer }
