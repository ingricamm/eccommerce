import TYPES from "../constants/userConstants";

function userSigninReducer(state = {user:null}, action) {
   console.log(action);

  switch (action.type) {
    case TYPES.USER_SIGNIN_REQUEST:
      return { loading: true };
    case TYPES.USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case TYPES.USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case TYPES.USER_LOGOUT:
      return {};
    default: return state;
  }
}

function userUpdateReducer(state = {user:null}, action) {
  switch (action.type) {
    case TYPES.USER_UPDATE_REQUEST:
      return { loading: true };
    case TYPES.USER_UPDATE_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case TYPES.USER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

function userRegisterReducer(state ={user:null}, action) {
  switch (action.type) {
    case TYPES.USER_REGISTER_REQUEST:
      return { loading: true };
    case TYPES.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case TYPES.USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export {
  userSigninReducer, userRegisterReducer, userUpdateReducer
}