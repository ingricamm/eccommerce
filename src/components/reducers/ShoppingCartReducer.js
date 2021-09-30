import { TYPES } from '../actions/ShoppingCartAction';
import { products } from '../../ProductData';


export const shoppingInitialState = {
  basket: [],
  user: null,
  products: products,
  cart:[],
 
 
};


export function shoppingReducer(state, action) {
    console.log(action);

  switch (action.type) {
    case TYPES.ADD_TO_BASKET:


      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
     console.log(newItem);
      
      let itemInBasket = state.basket.find((item) => item.id === newItem.id);
      
      console.log(itemInBasket)
      return itemInBasket
        ? {
            ...state,
              basket: state.basket.map((item) =>
  
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1, subtotal:item.price *item.quantity}
                : item
            ),cart:[...state.cart, action.item,],
          }
        : {
            ...state,
            basket: [...state.basket, { ...newItem}],
            cart:[...state.cart, action.item]
          };
          
    case TYPES.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case TYPES.EMPTY_BASKET:
      return {
        ...state,
        basket: action.basket,
      };

    case TYPES.SET_SHIPPING_DATA:
      return {
        ...state,
        shippingData: action.shippingData,
      };

    case TYPES.REMOVE_ONE_FROM_BASKET: {
      console.log(state.basket)
      let itemToDelete = state.basket.find((item) => item.id === action.payload);
      let newcart = [...state.cart];
      
      //console.log(itemToDelete)
      // console.log(...state.cart)
      // console.log(newcart.item)

           return itemToDelete.quantity > 1 
           
            ?{ ...state,
             basket:state.basket.map((item)=>
             item.id===action.payload
             ?{ ...item, quantity: item.quantity - 1, subtotal:item.price *item.quantity}
                : item
            ), 
            
             cart:newcart.splice(1)
          }
        : {
            ...state,
           basket: state.basket.filter((item) => item.id !== action.payload),
              cart:newcart.splice(1),
          };

         
          }
    case TYPES.REMOVE_ALL_FROM_BASKET: {
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.payload),
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
  
  

    default:
      return state;
  }
}
