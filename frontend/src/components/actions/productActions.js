import TYPES from "../constants/productConstants";
import axios from "axios";


//VISUALIZAR LA LISTA DE LOS PRODUCTOS
const listProducts =
  (category = "", searchKeyword = "", sortOrder = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: TYPES.PRODUCT_LIST_REQUEST });
      const { data } = await axios.get(
        "/api/products?category=" +
          category +
          "&searchKeyword=" +
          searchKeyword +
          "&sortOrder=" +
          sortOrder
      );

      console.log(data);
      dispatch({ type: TYPES.PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: TYPES.PRODUCT_LIST_FAIL, payload: error.message });
    }
  };
// VISUALIZAR CATEGORIAS
 const listProductCategories = () => async (dispatch) => {
  dispatch({
    type: TYPES.PRODUCT_CATEGORY_LIST_REQUEST,
  });
  
  try {
    const { data } = await axios.get('/api/products/categories');
    dispatch({ type: TYPES.PRODUCT_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TYPES.PRODUCT_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

const saveProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type: TYPES.PRODUCT_SAVE_REQUEST, payload: product });
    const {
      userSignin: { userInfo },
    } = getState();

    if (!product._id) {
      const { data } = await axios.post("/api/products/", product, {
        headers: {
          authorization: "Bearer " + userInfo.token,
        },
      });

      dispatch({ type: TYPES.PRODUCT_SAVE_SUCCESS, payload: data });
    } else {
      const { data } = await axios.put("/api/products/" + product._id, product, {
        headers: {
          authorization: "Bearer " + userInfo.token,
        }, 
      });console.log(userInfo.token)

      dispatch({ type: TYPES.PRODUCT_SAVE_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: TYPES.PRODUCT_SAVE_FAIL, payload: error.message });
  }
};

//VER DETALLES DEL PRODUCTO EN PAGINA INDIVIDUAL
const detailsProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: TYPES.PRODUCT_DETAILS_REQUEST, payload: productId });

    const { data } = await axios.get("/api/products/" + productId);

    dispatch({ type: TYPES.PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TYPES.PRODUCT_DETAILS_FAIL, payload: error.message });
  }
};
console.log(listProducts);

//ELIMINAR PRODUCTO DE LA BASE DE DATOS
const deleteProdcut = (productId) => async (dispatch, getState) => {
  try {
    const {
      userSignin: { userInfo },
    } = getState();

    dispatch({ type: TYPES.PRODUCT_DELETE_REQUEST, payload: productId });

    const { data } = await axios.delete("/api/products/" + productId, {
      headers: {
        Authorization: "Bearer " + userInfo.token,
      },
    });

    dispatch({
      type: TYPES.PRODUCT_DELETE_SUCCESS,
      payload: data,
      success: true,
    });
  } catch (error) {
    dispatch({ type: TYPES.PRODUCT_DELETE_FAIL, payload: error.message });
  }
};
//GUARDA LOS  COMENTARIOS SOBRE LOS PRODUCTOS DEL CLIENTE
const saveProductReview = (productId, review) => async (dispatch, getState) => {
  try {
    const {
      userSignin: {
        userInfo: {token},
      },
    } = getState();
    dispatch({ type: TYPES.PRODUCT_REVIEW_SAVE_REQUEST, payload: review });
    const { data } = await axios.post(
      `/api/products/${productId}/reviews`,
      review,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    dispatch({ type: TYPES.PRODUCT_REVIEW_SAVE_SUCCESS, payload: data });
  } catch (error) {
    // report error
    dispatch({ type: TYPES.PRODUCT_REVIEW_SAVE_FAIL, payload: error.message });
  }
};

export {
  listProducts,
  listProductCategories,
  detailsProduct,
  saveProduct,
  deleteProdcut,
  saveProductReview,
};
