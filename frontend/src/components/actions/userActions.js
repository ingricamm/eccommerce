import Axios from "axios";
import Cookie from 'js-cookie';
import TYPES from "../constants/userConstants";

const update = ({ userId, name, userName, email , password }) => async (dispatch, getState) => {
  const { userSignin: { userInfo } } = getState();
 
  dispatch(
    { type:TYPES.USER_UPDATE_REQUEST, 
      payload: {
         userId, name, userName, email,password
         } 
        });

  try {
    const { data } = await Axios.put("/api/users/signin" + userId,
      { name,userName, email, password }, {
      headers: {
        Authorization: 'Bearer ' + userInfo.token
      }
    });

    dispatch({ type: TYPES.USER_UPDATE_SUCCESS, payload: data });
    Cookie.set('userInfo', JSON.stringify(data));
  
  } catch (error) {
    dispatch(
      { type: TYPES.USER_UPDATE_FAIL,
         payload: error.message 
        });
  }
}

const signin = (email, password) => async (dispatch) => {
  dispatch({ 
    type: TYPES.USER_SIGNIN_REQUEST,
     payload: {
        email, password 
      }
     });

  try {
    const { data } = await Axios.post("/api/users/signin", { email, password });
    dispatch({
       type: TYPES.USER_SIGNIN_SUCCESS, 
       payload: data 
      });

    Cookie.set('userInfo', JSON.stringify(data));
    
 
  } catch (error) {
    dispatch(
      { type: TYPES.USER_SIGNIN_FAIL,
         payload: error.message
         });
  }
}


const detailsUser = (userId) => async (dispatch, getState) => {
  dispatch({ type: TYPES.USER_DETAILS_REQUEST, payload: userId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(`/api/users/${userId}`, {
      headers: { Authorization: `Bearer ${userInfo?.token}` },
    });
    dispatch({ type: TYPES.USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: TYPES.USER_DETAILS_FAIL, payload: message });
  }
};
export const updateUserProfile = (user) => async (dispatch, getState) => {
  dispatch({ type: TYPES.USER_UPDATE_PROFILE_REQUEST, payload: user });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/users/profile`, user, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: TYPES.USER_UPDATE_PROFILE_SUCCESS, payload: data });
    dispatch({ type: TYPES.USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: TYPES.USER_UPDATE_PROFILE_FAIL, payload: message });
  }
};
export const updateUser = (user) => async (dispatch, getState) => {
  dispatch({ type: TYPES.USER_UPDATE_PROFILE_REQUEST, payload: user });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/users/${user._id}`, user, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: TYPES.USER_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: TYPES.USER_UPDATE_FAIL, payload: message });
  }
};
 const listUsers = () => async (dispatch, getState) => {
  dispatch({ type: TYPES.USER_LIST_REQUEST });
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await Axios.get('/api/users', {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: TYPES.USER_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: TYPES.USER_LIST_FAIL, payload: message });
  }
};
const deleteUser = (userId) => async (dispatch, getState) => {
  dispatch({ type: TYPES.USER_DELETE_REQUEST, payload: userId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.delete(`/api/users/${userId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: TYPES.USER_DELETE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: TYPES.USER_DELETE_FAIL, payload: message });
  }
};

const register = (name,userName, email, password) => async (dispatch) => {
 
  dispatch(
    { type: TYPES.USER_REGISTER_REQUEST, 
      payload: {
         name,userName, email, password,
         }
         });
 
  try {
    
    const { data } = await Axios.post("/api/users/register", {
       name, userName, email, password, 
      });

    dispatch(
      { type: TYPES.USER_REGISTER_SUCCESS, 
        payload: data 
      });

    Cookie.set('userInfo', JSON.stringify(data));
  
  } catch (error) {
    dispatch(
      { type: TYPES.USER_REGISTER_FAIL,
        payload: error.message 
        });
  }
}

const logout = () => (dispatch) => {
  Cookie.remove("userInfo");
  dispatch({ type: TYPES.USER_LOGOUT })
}
export { signin, 
  register, 
  logout, 
  update,
   listUsers,
 detailsUser,
deleteUser};