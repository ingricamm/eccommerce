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

function userDetailsReducer (state = { loading: true }, action) {
  switch (action.type) {
    case TYPES.USER_DETAILS_REQUEST:
      return { loading: true };
    case TYPES.USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case TYPES.USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case TYPES.USER_DETAILS_RESET:
      return { loading: true };
    default:
      return state;
  }
};
function userUpdateProfileReducer  (state = {}, action)  {
  switch (action.type) {
    case TYPES.USER_UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case TYPES.USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true };
    case TYPES.USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    case TYPES.USER_UPDATE_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};
function userUpdateReducer  (state = {}, action) {
  switch (action.type) {
    case TYPES.USER_UPDATE_REQUEST:
      return { loading: true };
    case TYPES.USER_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case TYPES.USER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case TYPES.USER_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};
export const userListReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case TYPES.USER_LIST_REQUEST:
      return { loading: true };
    case TYPES.USER_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case TYPES.USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
function userDeleteReducer (state = {}, action)  {
  switch (action.type) {
    case TYPES.USER_DELETE_REQUEST:
      return { loading: true };
    case TYPES.USER_DELETE_SUCCESS:
      return { loading: false, success: true };
    case TYPES.USER_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case TYPES.USER_DELETE_RESET:
      return {};
    default:
      return state;
  }
};


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
  userSigninReducer, 
  userRegisterReducer, 
  userUpdateReducer,
   userDeleteReducer,
  userDetailsReducer,
  userUpdateProfileReducer
}