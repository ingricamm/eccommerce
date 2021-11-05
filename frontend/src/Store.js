import{createContext, useContext, } from 'react';
import { createStore, combineReducers,  applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


import{ cartReducer } from './components/reducers/CartReducer'

import {

  productListReducer,
   productCategoryListReducer,
  productDetailsReducer,
  productSaveReducer,
  productDeleteReducer,
  productReviewSaveReducer,
} from './components/reducers/productReducers';

import {
  userSigninReducer,
  userRegisterReducer,
  userDeleteReducer,
  userDetailsReducer,
  userListReducer,
  userUpdateProfileReducer
} from './components/reducers/userReducers';

import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  myOrderListReducer,
  orderListReducer,
  orderDeleteReducer,
} from './components/reducers/orderReducers';



export const StateContext = createContext();
export const useStateValue =() => useContext(StateContext);

const userInfo = localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null;
const cartItems =localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : []; 

const initialState ={
  cart: { cartItems, shipping: {}, payment: {} },
   user: userInfo ,
   userInfo:userInfo,
  
};

const reducer = combineReducers({
  productList: productListReducer,
   productCategoryList: productCategoryListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  userDelete: userDeleteReducer,
  userDetails:userDetailsReducer,
  userUpdate:userUpdateProfileReducer,
  userList:userListReducer,
  productSave: productSaveReducer,
  productDelete: productDeleteReducer,
  productReviewSave: productReviewSaveReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
 
  myOrderList: myOrderListReducer,
  orderList: orderListReducer,
  orderDelete: orderDeleteReducer,
});
 

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
// Infer the `RootState` and `AppDispatch` types from the store itself

