import{createContext, useContext, } from 'react';
import { createStore, combineReducers,  applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';

import{ cartReducer } from './components/reducers/CartReducer'

import {

  productListReducer,
  productDetailsReducer,
  productSaveReducer,
  productDeleteReducer,
  productReviewSaveReducer,
} from './components/reducers/productReducers';

import {
  userSigninReducer,
  userRegisterReducer,
  userUpdateReducer,
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


//const cartItems = Cookie.get() || [];
// const userInfo = Cookies.getJSON('userInfo') || null;

const initialState ={
 //cart: { cartItems, shipping: {}, payment: {} },
  // user:userInfo ,
  
};

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  productSave: productSaveReducer,
  productDelete: productDeleteReducer,
  productReviewSave: productReviewSaveReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  userUpdate: userUpdateReducer,
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
