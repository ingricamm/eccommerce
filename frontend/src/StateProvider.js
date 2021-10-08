import{createContext, useContext, } from 'react';
import { createStore, combineReducers,  applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookies from 'js-cookie';

import{
    shoppingReducer
} from './components/reducers/CartReducer'

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


import  data  from './ProductData';

export const StateContext = createContext();
export const useStateValue =() => useContext(StateContext);
const basketItems = Cookies.get('basketItems') || [];
const userInfo = Cookies.get('userInfo') || null;
// const basketItems = Cookies.getJSON('basketItems') || [];
// const userInfo = Cookies.getJSON('userInfo') || null;
const initialState ={
  basket:{ shipping: {}, payment: {} },
  cart:0,
  ItemInBasket:basketItems,
  product:data,
  user:userInfo ,
  
};

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  basket: shoppingReducer,
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
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store

