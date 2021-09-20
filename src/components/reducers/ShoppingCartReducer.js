import {TYPES}  from '../actions/ShoppingCartAction'

export const shoppingInitialState ={
    basket:[],
    user: null,


}

export const getBasketTotal =(basket) => {
    basket?.reduce((amount,item) => item.price + amount, 0)
        
} 
export function shoppingCartReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_BASKET: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      //console.log(newItem);

      let itemInBasket = state.basket.find((item) => item.id === newItem.id);

      return itemInBasket
        ? {
            ...state,
            basket: state.basket.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            basket: [...state.basket, { ...newItem, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_FROM_BASKET: {
      let itemToDelete = state.basket.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            basket: state.basket.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            basket: state.basket.filter((item) => item.id !== action.payload),
          };
    }
    case TYPES.REMOVE_ALL_FROM_BASKET: {
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART:{
      return {shoppingInitialState};
    
  }

     case TYPES.SET_USER:
         return{
             ...state,
             user: action.user
    };

     case TYPES.SET_SHIPPING_DATA:
        return{
            ...state,
            shippingData:action.shippingData,
     }  
            
            
        default: return state;
    }     
}

export default shoppingCartReducer








// export const initialState ={
//     basket:[],
//     user: null,


// }
// export const getBasketTotal =(basket) => {
//     basket?.reduce((amount,item) => item.price + amount, 0)
        
// } 

// const shoppingCartReducer = (state,action)=>{
//     console.log(action);
//     switch(action.type){

//        case TYPES.ADD_TO_BASKET:
//         return {
//             ...state,
//             basket:[...state.basket, action.item]
         
//         };
//         case TYPES.REMOVE_ITEM:
//          const index = state.basket.findIndex(
//              (basketItem)=>basketItem.id===action.id);
//            let newBasket = [...state.basket];
//            if (index >=0){
//                newBasket.splice(index, 1)
//            } else{
//                (console.log('cant remove product')); 
            
//             }
            
//            return{
//                 ...state,
//                 basket:newBasket,
//             };
        
//         case TYPES.SET_USER:
//             return{
//                 ...state,
//                 user: action.user
//             };
            
//          case TYPES.EMPTY_BASKET :
//             return{
//                 ...state,
//                 basket:action.basket
//             }

//           case TYPES.SET_SHIPPING_DATA:
//               return{
//                   ...state,
//                   shippingData:action.shippingData,
//               }  
            
            
//         default: return state;
//     }
    
// }
// export default shoppingCartReducer