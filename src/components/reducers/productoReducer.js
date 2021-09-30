 import { TypesProduct } from '../actions/ProductoAction';
 
 export const productoInitialState ={
     producto:[]
 }

 export const  productoReducer = (state,action)=>{
  switch(action.type){
    case TypesProduct.SET_PRODUCT:
                return{
                    ...state,
                    producto: action.producto
                
                
     }
            default: return state;
    };
    
}
