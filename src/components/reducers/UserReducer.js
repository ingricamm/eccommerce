import {TYPES}  from '../actions/NavbarAction'

export const initialState ={
    user: null,
}


const userReducer = (state,action)=>{
    // console.log(action);

    switch(action.type){
       
        case TYPES.SET_USER:
            return{
                ...state,
                user: action.user
            };
       
        default: return state;
    }
    
}
export default userReducer