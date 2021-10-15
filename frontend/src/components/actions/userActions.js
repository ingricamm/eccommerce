import Axios from "axios";
import Cookie from 'js-cookie';
import TYPES from "../constants/userConstants";

const update = ({ userId, name, email, password, userName }) => async (dispatch, getState) => {
  const { userSignin: { userInfo } } = getState();
 
  dispatch(
    { type:TYPES.USER_UPDATE_REQUEST, 
      payload: {
         userId, name, email, password
         } 
        });

  try {
    const { data } = await Axios.put("/api/users/signin" + userId,
      { name, email, password }, {
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

const register = (name, email, password, userName) => async (dispatch) => {
 
  dispatch(
    { type: TYPES.USER_REGISTER_REQUEST, 
      payload: {
         name, email, password,userName
         }
         });
 
  try {
    
    const { data } = await Axios.post("/api/users/register", {
       name, email, password, userName
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
  update };